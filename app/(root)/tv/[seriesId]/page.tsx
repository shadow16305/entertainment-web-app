"use client";

import Image from "next/image";
import { RxAvatar } from "react-icons/rx";
import useGetSeriesDetails from "@/hooks/useGetSeriesDetails";
import SeriesCastSlider from "@/app/(root)/tv/[seriesId]/_components/SeriesCastSlider";
import VideoPlayer from "@/components/ui/VideoPlayer";
import useGetSeriesTrailerData from "@/hooks/useGetSeriesTrailerData";

const SeriesDetails = () => {
  const { seriesData, seriesCast, seriesReviews } = useGetSeriesDetails();
  const trailer = useGetSeriesTrailerData();

  return (
    <>
      <div className="h-3/4 w-screen absolute z-0 overflow-x-hidden top-0 blur-2xl opacity-50">
        <Image
          src={`https://image.tmdb.org/t/p/w500/${seriesData?.backdrop_path}`}
          alt="background"
          width={300}
          height={0}
          className="w-full h-auto"
        />
      </div>
      <div className="container mx-auto flex flex-col justify-center mt-28 relative z-10 px-2">
        {seriesData && (
          <div className="flex flex-col items-center md:flex-row gap-x-20 text-white">
            <Image
              src={`https://image.tmdb.org/t/p/w500/${seriesData.poster_path}`}
              alt="Poster"
              width={300}
              height={0}
              className="h-auto rounded-3xl w-2/3 lg:w-1/4"
            />
            <div className="flex flex-col items-center md:items-start font-light">
              <div className="flex flex-col items-center lg:flex-row lg:items-end gap-x-3">
                <h1 className="text-2xl md:text-4xl font-light">{seriesData.name}</h1>
                <div>
                  <span className="opacity-50 text-sm">{seriesData.first_air_date}</span>
                  {seriesData.last_air_date && (
                    <span className="opacity-50 text-sm"> - {seriesData.last_air_date}</span>
                  )}
                </div>
              </div>
              <span className="opacity-50 mt-4 text-center lg:text-start">
                "{seriesData.tagline ? seriesData.tagline : "No tagline"}"
              </span>
              <div className="flex gap-x-2 mt-4">
                {seriesData.genres.map((genre) => (
                  <span
                    key={genre.id}
                    className="text-xs lg:text-base border rounded-3xl px-4 py-2 bg-white text-black">
                    {genre.name}
                  </span>
                ))}
              </div>
              <p className="lg:max-w-[450px] mt-12 text-center lg:text-start">{seriesData.overview}</p>
              <div className="flex gap-x-12 mt-12">
                <span>
                  Average rating: <span className="font-bold">{seriesData.vote_average}</span>
                </span>
                <span>
                  Vote count: <span className="font-bold">{seriesData.vote_count}</span>
                </span>
              </div>
            </div>
          </div>
        )}
        {trailer.length > 0 && (
          <div className="mt-20 flex flex-col items-center lg:items-start gap-y-8 lg:gap-y-10 text-white">
            <h2 className="text-3xl">Videos</h2>
            <div className="flex flex-col lg:flex-row gap-x-4 gap-y-4">
              {trailer.map((item) => item.type === "Trailer" && <VideoPlayer key={item.id} videoKey={item.key} />)}
            </div>
          </div>
        )}
        <div className="flex flex-col mt-20 lg:gap-y-10 text-white">
          <h2 className="text-3xl">Cast</h2>
          <SeriesCastSlider seriesCast={seriesCast} />
        </div>
        {seriesReviews.length > 0 && (
          <div className="flex flex-col gap-y-20 text-white font-light mt-20">
            <h2 className="text-3xl">Reviews</h2>
            {seriesReviews &&
              seriesReviews.map((review, index) => (
                <div key={index} className="flex flex-col gap-y-4">
                  <div className="flex items-center gap-x-4">
                    {review.author_details.avatar_path !== null ? (
                      <Image
                        src={`https://image.tmdb.org/t/p/w500/${review.author_details.avatar_path}`}
                        alt="author"
                        width={32}
                        height={0}
                        className="rounded-full h-auto w-[32px]"
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
        )}
      </div>
    </>
  );
};

export default SeriesDetails;
