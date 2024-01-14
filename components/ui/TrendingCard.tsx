import Props from "../../models/props";
import React, { useState } from "react";
import Image from "next/image";
import { FaPlayCircle } from "react-icons/fa";

const TrendingCard: React.FC<Props & { onAddBookmark?: (title: string) => void }> = ({ onAddBookmark, ...props }) => {
  const [isAdded, setIsAdded] = useState(false);

  const handleAddBookmark = () => {
    if (onAddBookmark && !isAdded) {
      onAddBookmark(props.title);
      setIsAdded(true);
    }
  };

  const thumbnailSrc = props.thumbnail && props.thumbnail.trending && props.thumbnail.trending.large;

  return (
    <div className="flex flex-col gap-y-2 mt-6 hover:cursor-pointer lg:w-[340px] xl:w-[360px] 2xl:w-[470px] h-auto">
      <div className="relative w-full h-full rounded-lg">
        {thumbnailSrc && (
          <Image src={thumbnailSrc} alt={props.title} width={470} height={0} className="w-full h-full rounded-lg" />
        )}
        <button
          onClick={handleAddBookmark}
          className="rounded-3xl bg-white bg-opacity-25 p-[10px] absolute top-4 right-4 hover:bg-white group trnasition-all duration-300 z-10">
          <Image
            src={`${isAdded ? "/images/active-bookmark.svg" : "/images/bookmark_btn.svg"}`}
            alt="bookmark"
            width={12}
            height={14}
            className="group-hover:invert"
          />
        </button>
        <div className="absolute top-0 left-0 w-full h-full transition-all duration-300 bg-black bg-opacity-50 opacity-0 hover:opacity-100">
          <span className="rounded-3xl bg-white bg-opacity-25 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 flex items-center gap-x-5 py-[9px]">
            <FaPlayCircle className="w-[30px] h-[30px] ps-[9px]" />
            <p className="text-lg font-medium pe-6">Play</p>
          </span>
        </div>
        <div className="flex flex-col text-[13px] font-light leading-normal absolute z-10 left-6 bottom-6">
          <div className="flex items-center gap-x-[6px]">
            <span className="opacity-75">{props.year}</span>
            <span className="w-[3px] h-[3px] bg-white rounded-full opacity-50"></span>
            <span className="opacity-75">{props.category}</span>
            <span className="w-[3px] h-[3px] bg-white rounded-full opacity-50"></span>
            <span className="opacity-75">{props.rating}</span>
          </div>
          <h2 className="text-2xl font-medium">{props.title}</h2>
        </div>
      </div>
    </div>
  );
};

export default TrendingCard;
