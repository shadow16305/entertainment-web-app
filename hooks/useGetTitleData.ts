import Props from "@/models/props";
import { useState, useEffect } from "react";

interface useGetDataProps {
  data: Props[];
  nextPage: () => void;
  prevPage: () => void;
  currentPage: number;
}

const useGetData = (endpoint: string): useGetDataProps => {
  const [data, setData] = useState<Props[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const minPage = 1;

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `${process.env.NEXT_PUBLIC_API_KEY}`,
        },
      };

      try {
        const response = await fetch(`https://api.themoviedb.org/3/discover/${endpoint}?page=${currentPage}`, options);
        const result = await response.json();
        setData(result.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [currentPage, endpoint]);

  const nextPage = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

  const prevPage = () => {
    setCurrentPage(prevPage => Math.max(prevPage - 1, minPage));
  };

  return { data, nextPage, prevPage, currentPage };
};

export const useGetSeriesData = (): useGetDataProps => useGetData("tv");
export const useGetMovieData = (): useGetDataProps => useGetData("movie");
