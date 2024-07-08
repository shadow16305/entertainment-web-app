import Props from "@/models/props";
import { useState, useEffect } from "react";

const useGetTrendingData = () => {
  const [trendingTitle, setTrendingTitle] = useState<Props[]>([]);

  useEffect(() => {
    const fetchTrendingData = async () => {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
        },
      };

      try {
        const response = await fetch("https://api.themoviedb.org/3/trending/all/week?language=en-US", options);
        const data = await response.json();
        setTrendingTitle(data.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchTrendingData();
  }, []);

  return trendingTitle;
};

export default useGetTrendingData;
