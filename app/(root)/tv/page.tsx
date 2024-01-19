"use client";

import Card from "@/components/ui/Card";
import useGetSearchData from "@/hooks/useGetSearchData";
import { useGetSeriesData } from "@/hooks/useGetTitleData";
import { SearchContext } from "@/store/SearchContext";
import { useContext } from "react";

const TvSeriesPage = () => {
  const seriesHook = useGetSeriesData();
  const searchCtx = useContext(SearchContext);

  const seriesData = seriesHook.data;

  if (!searchCtx) {
    throw new Error("error");
  }

  const searchValue = searchCtx.searchValue;
  const searchData = useGetSearchData();

  return (
    <div className="lg:container lg:mx-auto flex flex-col items-center mt-16 text-white">
      {searchValue === "" ? (
        <div>
          <h2 className="mt-10 text-[32px] font-light tracking-[-0.5px]">TV Series</h2>
          <div className="flex flex-wrap justify-center lg:justify-start gap-x-4 md:gap-x-[30px] lg:gap-x-8">
            {seriesData.map((item) => item.poster_path && <Card key={item.id} {...item} link={`/tv/${item.id}`} />)}
          </div>
          <div className="flex gap-x-6 fixed z-50 bottom-14 left-1/2 -translate-x-1/2 lg:py-4 px-8 text-white bg-white bg-opacity-5 backdrop-blur-2xl lg:rounded-[50px]">
            <button onClick={() => seriesHook.prevPage()}>PREV</button>
            <span>{seriesHook.currentPage}</span>
            <button onClick={() => seriesHook.nextPage()}>NEXT</button>
          </div>
        </div>
      ) : (
        <div className="lg:container lg:mx-auto">
          <div className="flex flex-wrap justify-center lg:justify-start gap-x-4 md:gap-x-[30px] lg:gap-x-8">
            {searchData.map(
              (item) =>
                item.poster_path && (
                  <Card
                    key={item.id}
                    {...item}
                    link={`${item.media_type === "tv" ? `/tv/${item.id}` : `/movies/${item.id}`}`}
                  />
                )
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default TvSeriesPage;
