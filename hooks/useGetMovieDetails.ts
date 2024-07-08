import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import MovieProps from "@/models/movieProps";

interface ReviewsResponse {
  results: Reviews[];
}

interface CastInfoResponse {
  cast: CastInfo[];
}

const useGetMovieDetails = () => {
  const [movieData, setMovieData] = useState<MovieProps | null>(null);
  const [movieReviews, setMovieReviews] = useState<Reviews[]>([]);
  const [movieCast, setMovieCast] = useState<CastInfo[]>([]);
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
      fetchData<MovieProps>(`https://api.themoviedb.org/3/movie/${id.movieId}?language=en-US`, setMovieData);
    const fetchMovieReviews = () =>
      fetchData<ReviewsResponse>(`https://api.themoviedb.org/3/movie/${id.movieId}/reviews`, (data) =>
        setMovieReviews(data.results)
      );
    const fetchMovieCast = () =>
      fetchData<CastInfoResponse>(`https://api.themoviedb.org/3/movie/${id.movieId}/credits`, (data) =>
        setMovieCast(data.cast)
      );

    fetchMovieData();
    fetchMovieReviews();
    fetchMovieCast();
  }, [id]);

  return { movieData, movieReviews, movieCast };
};

export default useGetMovieDetails;
