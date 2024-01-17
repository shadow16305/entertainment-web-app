"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import MovieProps from "@/models/movieProps";
import { RxAvatar } from "react-icons/rx";
import CastSlider from "@/components/shared/CastSlider";

const MovieDetails = () => {
  const [movieData, setMovieData] = useState<MovieProps | null>(null);
  const [movieReviews, setMovieReviews] = useState<Reviews[]>([]);
  const [movieCast, setMovieCast] = useState<CastInfo[]>([]);

  const id = useParams();

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NTcxMGRiYTQ2MDU4MzJiNTYxMjYxY2U3MmU3ZDdhMSIsInN1YiI6IjY1YTY3OGQwOTg4YWZkMDEyMjg5OWNiMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4Gh3tY_miA_PU2F7_XS1UT3PkHBfIljWO5N5M_vhL3M",
      },
    };

    const fetchMovieData = async () => {
      try {
        const res = await fetch(`https://api.themoviedb.org/3/movie/${id.movieId}?language=en-US`, options);
        const data = await res.json();

        setMovieData(data);
      } catch (error) {
        console.error("Error fetching movie data:", error);
      }
    };

    const fetchMovieReviews = async () => {
      try {
        const res = await fetch(`https://api.themoviedb.org/3/movie/${id.movieId}/reviews`, options);
        const data = await res.json();

        setMovieReviews(data.results);
      } catch (error) {
        console.error("Error fetching movie review data:", error);
      }
    };

    const fetchMovieCast = async () => {
      try {
        const res = await fetch(`https://api.themoviedb.org/3/movie/${id.movieId}/credits`, options);
        const data = await res.json();

        setMovieCast(data.cast);
      } catch (error) {
        console.error("Error fetching movie review data:", error);
      }
    };

    fetchMovieData();
    fetchMovieReviews();
    fetchMovieCast();
  }, [id]);

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
      <div className="container mx-auto flex flex-col justify-center mt-28 relative z-10">
        {movieData && (
          <div className="flex flex-col items-center md:flex-row gap-x-20 text-white">
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
                {movieData.genres.map(genre => (
                  <span key={genre.id} className="border rounded-3xl px-4">
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
        <div className="flex flex-col mt-20 lg:gap-y-10 text-white">
          <h2 className="text-3xl">Cast</h2>
          <CastSlider movieCast={movieCast} />
        </div>
        <div className="flex flex-col gap-y-20 text-white font-light mt-20">
          <h2 className="text-3xl">Reviews</h2>
          {movieReviews &&
            movieReviews.slice(0, 3).map((review, index) => (
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
