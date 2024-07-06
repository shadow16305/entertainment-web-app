"use client";

import Card from "@/components/ui/Card";
import TrendingCarousel from "@/components/shared/TrendingCarousel";
import useGetTrendingData from "@/hooks/useGetTrendingData";
import Link from "next/link";
import { useContext } from "react";
import { SearchContext } from "@/store/SearchContext";
import { useGetPopularMovieData, useGetPopularSeriesData } from "@/hooks/useGetPopularTitles";
import useGetSearchData from "@/hooks/useGetSearchData";

const HomePage = () => {
  const searchCtx = useContext(SearchContext);
  if (!searchCtx) {
    throw new Error("error");
  }

  const searchValue = searchCtx.searchValue;

  const trendingData = useGetTrendingData();
  const popularMovieData = useGetPopularMovieData();
  const popularSeriesData = useGetPopularSeriesData();
  const searchData = useGetSearchData();

  return (
    <div className="mt-28 text-white">
      {searchValue === "" ? (
        <div className="flex flex-col">
          <h1 className="text-[32px] font-light tracking-[-0.5px] text-center">Trending</h1>
          <TrendingCarousel data={trendingData} />
          <div className="lg:container lg:mx-auto flex flex-col items-center mt-16">
            <div className="flex justify-between items-end gap-x-4 w-full">
              <h2 className="mt-10 text-[32px] font-light tracking-[-0.5px]">Popular Movies</h2>
              <Link href="/movies" className="relative group">
                <span>See all movies</span>
                <span className="w-0 absolute left-0 bottom-0 bg-red group-hover:w-full h-0.5 rounded-3xl transition-all duration-300" />
              </Link>
            </div>
            <div className="flex flex-wrap justify-center lg:justify-start gap-x-4 md:gap-x-[30px] lg:gap-x-8">
              {popularMovieData &&
                popularMovieData
                  .slice(0, 10)
                  .map((item) => <Card key={item.id} {...item} link={`/movies/${item.id}`} />)}
            </div>
            <div className="flex justify-between items-end gap-x-4 w-full mt-10">
              <h2 className="mt-10 text-2xl md:text-[32px] font-light tracking-[-0.5px]">Popular TV Series</h2>
              <Link href="/tv" className="relative group">
                <span>See all tv series</span>
                <span className="w-0 absolute left-0 bottom-0 bg-red group-hover:w-full h-0.5 rounded-3xl transition-all duration-300" />
              </Link>
            </div>
            <div className="flex flex-wrap justify-center lg:justify-start gap-x-4 md:gap-x-[30px] lg:gap-x-8">
              {popularSeriesData
                .slice(0, 11)
                .map((item) => item.poster_path && <Card key={item.id} {...item} link={`/tv/${item.id}`} />)}
            </div>
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

export default HomePage;
