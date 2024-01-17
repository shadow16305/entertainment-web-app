"use client";

import React, { useContext, useState } from "react";
import Card from "@/components/ui/Card";
import TrendingCarousel from "@/components/shared/TrendingCarousel";
// import { BookmarkContext } from "@/store/bookmark-context";
import useGetTrendingData from "@/hooks/useGetTrendingData";
import useGetPopularMovieData from "@/hooks/useGetPopularMovieData";
import useGetPopularSeriesData from "@/hooks/useGetPopularSeriesData";
import Link from "next/link";

const HomePage = () => {
  const trendingData = useGetTrendingData();
  const popularMovieData = useGetPopularMovieData();
  const popularSeriesData = useGetPopularSeriesData();

  return (
    <div className="flex flex-col text-white mt-28">
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
          {popularMovieData.slice(0, 10).map(item => (
            <Card key={item.title} {...item} link={`/movies/${item.id}`} />
          ))}
        </div>
        <div className="flex justify-between items-end gap-x-4 w-full mt-10">
          <h2 className="mt-10 text-2xl md:text-[32px] font-light tracking-[-0.5px]">Popular TV Series</h2>
          <Link href="/tv" className="relative group">
            <span>See all tv series</span>
            <span className="w-0 absolute left-0 bottom-0 bg-red group-hover:w-full h-0.5 rounded-3xl transition-all duration-300" />
          </Link>
        </div>
        <div className="flex flex-wrap justify-center lg:justify-start gap-x-4 md:gap-x-[30px] lg:gap-x-8">
          {popularSeriesData.slice(0, 10).map(item => (
            <Card key={item.title} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
