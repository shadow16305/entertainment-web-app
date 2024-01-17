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
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NTcxMGRiYTQ2MDU4MzJiNTYxMjYxY2U3MmU3ZDdhMSIsInN1YiI6IjY1YTY3OGQwOTg4YWZkMDEyMjg5OWNiMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4Gh3tY_miA_PU2F7_XS1UT3PkHBfIljWO5N5M_vhL3M",
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
