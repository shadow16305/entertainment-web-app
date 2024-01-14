"use client";

import React, { useContext, useState } from "react";
import SearchBox from "@/components/shared/SearchBox";
import data from "../../json/data.json";
import Card from "@/components/ui/Card";
import TrendingCarousel from "@/components/shared/TrendingCarousel";
import { BookmarkContext } from "@/store/bookmark-context";

const HomePage = () => {
  const [searchValue, setSearchValue] = useState("");

  const bookmarkCtx = useContext(BookmarkContext);

  const addBookmarkHandler = (title: string) => {
    bookmarkCtx.addBookmark(title);
  };

  const filteredData = data.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase()));

  const trendingData = data.filter(item => item.isTrending);

  return (
    <>
      <SearchBox value={{ setSearchValue, searchValue }} />
      <div className="flex flex-col text-white">
        <h1 className="text-[32px] font-light tracking-[-0.5px]">Trending</h1>
        <TrendingCarousel data={trendingData} />
        <h2 className="mt-10 text-[32px] font-light tracking-[-0.5px]">Recommended for you</h2>
        <div className="flex flex-wrap gap-x-4 md:gap-x-[30px] lg:gap-x-10">
          {filteredData.map(item => (
            <Card key={item.title} {...item} onAddBookmark={() => addBookmarkHandler(item.title)} />
          ))}
        </div>
      </div>
    </>
  );
};

export default HomePage;
