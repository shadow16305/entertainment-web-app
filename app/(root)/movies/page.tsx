"use client";

import SearchBox from "@/components/shared/SearchBox";
import Card from "@/components/ui/Card";
import data from "../../../json/data.json";
import { useState } from "react";

const MoviePage = () => {
  const [searchValue, setSearchValue] = useState("");

  const filteredData = data
    .filter(item => item.category === "Movie")
    .filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase()));

  return (
    <>
      <SearchBox value={{ setSearchValue, searchValue }} />
      <div className="flex flex-col text-white">
        <h1 className="text-[32px] font-light tracking-[-0.5px]">Movies</h1>
        <div className="flex flex-wrap gap-x-4 md:gap-x-[30px] lg:gap-x-10">
          {filteredData.map(item => (
            <Card key={item.title} {...item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default MoviePage;
