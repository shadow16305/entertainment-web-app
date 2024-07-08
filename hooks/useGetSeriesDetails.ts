import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import MovieProps from "@/models/movieProps";
import SeriesProps from "@/models/seriesProps";

interface ReviewsResponse {
  results: Reviews[];
}

interface CastInfoResponse {
  cast: CastInfo[];
}

const useGetSeriesDetails = () => {
  const [seriesData, setSeriesData] = useState<SeriesProps | null>(null);
  const [seriesReviews, setSeriesReviews] = useState<Reviews[]>([]);
  const [seriesCast, setSeriesCast] = useState<CastInfo[]>([]);
  const id = useParams();

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
      },
    };

    const fetchData = async <T>(url: string, setDataCallback: (data: T) => void) => {
      try {
        const response = await fetch(url, options);
        const data: T = await response.json();
        setDataCallback(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    const fetchMovieData = () =>
      fetchData<SeriesProps>(`https://api.themoviedb.org/3/tv/${id.seriesId}?language=en-US`, setSeriesData);
    const fetchMovieReviews = () =>
      fetchData<ReviewsResponse>(`https://api.themoviedb.org/3/tv/${id.seriesId}/reviews`, (data) =>
        setSeriesReviews(data.results)
      );
    const fetchMovieCast = () =>
      fetchData<CastInfoResponse>(`https://api.themoviedb.org/3/tv/${id.seriesId}/credits`, (data) =>
        setSeriesCast(data.cast)
      );

    fetchMovieData();
    fetchMovieReviews();
    fetchMovieCast();
  }, [id]);

  return { seriesData, seriesReviews, seriesCast };
};

export default useGetSeriesDetails;
