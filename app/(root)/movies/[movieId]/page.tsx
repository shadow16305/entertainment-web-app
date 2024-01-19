"use client";

import Image from "next/image";
import { RxAvatar } from "react-icons/rx";
import MovieCastSlider from "@/components/shared/MovieCastSlider";
import useGetMovieDetails from "@/hooks/useGetMovieDetails";
import VideoPlayer from "@/components/ui/VideoPlayer";
import useGetMovieTrailerData from "@/hooks/useGetMovieTrailerData";

const MovieDetails = () => {
  const { movieData, movieCast, movieReviews } = useGetMovieDetails();
  const trailer = useGetMovieTrailerData();

  return (
    <>
      <div className="h-3/4 w-[90vw] lg:w-screen absolute z-0 overflow-x-hidden top-0 blur-2xl opacity-50">
        <Image
          src={`https://image.tmdb.org/t/p/w500/${movieData?.backdrop_path}`}
          alt="background"
          width={300}
          height={0}
          className="w-full h-full"
        />
      </div>
      <div className="container mx-auto flex flex-col justify-center mt-28 relative z-10 px-2">
        {movieData && (
          <div className="flex flex-col items-center md:flex-row gap-x-20 text-white relative">
            <Image
              src={`https://image.tmdb.org/t/p/w500/${movieData.poster_path}`}
              alt="Poster"
              width={300}
              height={0}
              className="h-auto rounded-3xl w-2/3 lg:w-1/4"
            />
            <div className="flex flex-col items-center md:items-start font-light">
              <div className="flex flex-col items-center lg:flex-row lg:items-end gap-x-3">
                <h1 className="text-2xl md:text-4xl font-light">{movieData.title}</h1>
                <span className="opacity-50 text-sm">({movieData.release_date})</span>
              </div>
              <span className="opacity-50 mt-4 text-center lg:text-start">"{movieData.tagline}"</span>
              <div className="flex gap-x-2 mt-4">
                {movieData.genres.map((genre) => (
                  <span key={genre.id} className="border rounded-3xl px-4 bg-white text-black">
                    {genre.name}
                  </span>
                ))}
              </div>
              <p className="lg:max-w-[450px] mt-12 text-center lg:text-start">{movieData.overview}</p>
              <div className="flex gap-x-12 mt-12">
                <span>
                  Average rating: <span className="font-bold">{movieData.vote_average}</span>
                </span>
                <span>
                  Vote count: <span className="font-bold">{movieData.vote_count}</span>
                </span>
              </div>
            </div>
          </div>
        )}
        <div className="mt-20 flex flex-col lg:gap-y-10 text-white">
          <h2 className="text-3xl">Videos</h2>
          <div className="flex flex-col lg:flex-row gap-x-4">
            {trailer.map((item) => item.type === "Trailer" && <VideoPlayer key={item.id} videoKey={item.key} />)}
          </div>
        </div>
        <div className="flex flex-col mt-20 lg:gap-y-10 text-white">
          <h2 className="text-3xl">Cast</h2>
          <MovieCastSlider movieCast={movieCast} />
        </div>
        <div className="flex flex-col gap-y-20 text-white font-light mt-20">
          <h2 className="text-3xl">Reviews</h2>
          {movieReviews &&
            movieReviews.map((review, index) => (
              <div key={index} className="flex flex-col gap-y-4">
                <div className="flex items-center gap-x-4">
                  {review.author_details.avatar_path !== null ? (
                    <Image
                      src={`https://image.tmdb.org/t/p/w500/${review.author_details.avatar_path}`}
                      alt={review.author}
                      width={32}
                      height={0}
                      className="rounded-full h-[32px] w-[32px]"
                    />
                  ) : (
                    <RxAvatar className="w-[32px] h-[32px]" />
                  )}
                  <h3 className="text-2xl">{review.author}</h3>
                </div>
                <p>{review.content}</p>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default MovieDetails;
