import Props from "@/models/props";
import { useState, useEffect } from "react";

const useGetSeriesData = () => {
  const [seriesTitle, setSeriesTitle] = useState<Props[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const minPage = 1;

  useEffect(() => {
    const fetchSeriesData = async () => {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NTcxMGRiYTQ2MDU4MzJiNTYxMjYxY2U3MmU3ZDdhMSIsInN1YiI6IjY1YTY3OGQwOTg4YWZkMDEyMjg5OWNiMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4Gh3tY_miA_PU2F7_XS1UT3PkHBfIljWO5N5M_vhL3M",
        },
      };

      try {
        const response = await fetch(`https://api.themoviedb.org/3/discover/tv?page=${currentPage}`, options);
        const data = await response.json();
        setSeriesTitle(data.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchSeriesData();
  }, [currentPage]);

  const nextPage = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

  const prevPage = () => {
    setCurrentPage(prevPage => Math.max(prevPage - 1, minPage));
  };

  return { seriesTitle, nextPage, prevPage, currentPage };
};

export default useGetSeriesData;
