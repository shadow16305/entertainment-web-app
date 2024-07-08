import { useState, useEffect } from "react";

export const useGetMovieGenres = (endpoint: string) => {
  const [genreData, setGenreData] = useState<GenreProps[]>([]);

  useEffect(() => {
    const fetchGenreData = async () => {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
        },
      };

      try {
        const response = await fetch(`https://api.themoviedb.org/3/${endpoint}`, options);
        const data = await response.json();

        if (data.genres) {
          setGenreData(data.genres);
        } else {
          console.error("Invalid data structure:", data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchGenreData();
  }, [endpoint]);

  return genreData;
};
