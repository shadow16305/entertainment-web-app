"use client";

import Card from "@/components/ui/Card";
import useGetMovieData from "@/hooks/useGetMovieData";

const MoviePage = () => {
  const movieHook = useGetMovieData();

  const movieData = movieHook.movieTitle;

  return (
    <div className="lg:container lg:mx-auto flex flex-col items-center mt-16 text-white">
      <h2 className="mt-10 text-[32px] font-light tracking-[-0.5px]">Movies</h2>
      <div className="flex flex-wrap justify-center lg:justify-start gap-x-4 md:gap-x-[30px] lg:gap-x-8">
        {movieData.map(item => (
          <Card key={item.title} {...item} link={`/movies/${item.id}`} />
        ))}
      </div>
      <div className="flex gap-x-6 fixed z-50 bottom-14 lg:py-4 px-8 text-white bg-white bg-opacity-5 backdrop-blur-2xl lg:rounded-[50px]">
        <button onClick={() => movieHook.prevPage()}>PREV</button>
        <span>{movieHook.currentPage}</span>
        <button onClick={() => movieHook.nextPage()}>NEXT</button>
      </div>
    </div>
  );
};

export default MoviePage;
