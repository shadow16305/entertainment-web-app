import { useParams } from "next/navigation";
import { useState, useEffect } from "react";

const useGetMovieTrailerData = () => {
  const [trailer, setTrailer] = useState<TrailerProps[]>([]);
  const id = useParams();

  useEffect(() => {
    const fetchTrailerData = async () => {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
        },
      };

      try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id.movieId}/videos?language=en-US`, options);
        const data = await response.json();
        setTrailer(data.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchTrailerData();
  }, [id.movieId]);

  return trailer;
};

export default useGetMovieTrailerData;
