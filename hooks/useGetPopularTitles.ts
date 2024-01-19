import Props from "@/models/props";
import { useState, useEffect } from "react";

const useGetPopularData = (endpoint: string): Props[] => {
  const [popularData, setPopularData] = useState<Props[]>([]);

  useEffect(() => {
    const fetchPopularData = async () => {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `${process.env.NEXT_PUBLIC_API_KEY}`,
        },
      };

      try {
        const response = await fetch(`https://api.themoviedb.org/3/${endpoint}`, options);
        const data = await response.json();
        setPopularData(data.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchPopularData();
  }, [endpoint]);

  return popularData;
};

export const useGetPopularMovieData = () => useGetPopularData("movie/popular");
export const useGetPopularSeriesData = () => useGetPopularData("tv/popular");
