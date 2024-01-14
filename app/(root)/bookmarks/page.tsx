"use client";

import SearchBox from "@/components/shared/SearchBox";
import data from "../../../json/data.json";
import Card from "@/components/ui/Card";
import { useContext, useState } from "react";

import { BookmarkContext, useBookmark } from "@/store/bookmark-context";

const BookmarksPage = () => {
  const [searchValue, setSearchValue] = useState("");
  const { isBookmarked, removeBookmark } = useBookmark();

  const filteredMovieData = isBookmarked
    .filter(item => item.category === "Movie")
    .filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase()));

  const filteredTvseriesData = isBookmarked
    .filter(item => item.category === "TV Series")
    .filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase()));

  return (
    <>
      <SearchBox value={{ setSearchValue, searchValue }} />
      <div className="flex flex-col text-white">
        <h1 className="text-[32px] font-light tracking-[-0.5px]">Bookmarked Movies</h1>
        <div className="flex flex-wrap gap-x-4 md:gap-x-[30px] lg:gap-x-10">
          {filteredMovieData.map(item => (
            <Card key={item.title} {...item} onRemoveBookmark={() => removeBookmark(item.title)} />
          ))}
        </div>
        <h2 className="mt-10 text-[32px] font-light tracking-[-0.5px]">Bookmarked TV Series</h2>
        <div className="flex flex-wrap gap-x-4 md:gap-x-[30px] lg:gap-x-10">
          {filteredTvseriesData.map(item => (
            <Card key={item.title} {...item} onRemoveBookmark={() => removeBookmark(item.title)} />
          ))}
        </div>
      </div>
    </>
  );
};

export default BookmarksPage;
