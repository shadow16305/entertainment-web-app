import Props from "@/models/props";
import { SearchContext } from "@/store/SearchContext";
import { useState, useEffect, useContext } from "react";

const useGetSearchData = () => {
  const [searchTitle, setSearchTitle] = useState<Props[]>([]);
  const searchCtx = useContext(SearchContext);
  const searchValue = searchCtx?.searchValue;

  useEffect(() => {
    const fetchSearchData = async () => {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `${process.env.NEXT_PUBLIC_API_KEY}`,
        },
      };

      try {
        const response = await fetch(`https://api.themoviedb.org/3/search/multi?query=${searchValue}`, options);
        const data = await response.json();

        setSearchTitle(data.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if (searchValue) {
      fetchSearchData();
    }
  }, [searchValue]);

  return searchTitle;
};

export default useGetSearchData;
