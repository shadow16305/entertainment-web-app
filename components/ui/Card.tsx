import Image from "next/image";
import Props from "../../models/props";
import { FaPlayCircle } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Card: React.FC<Props & { onAddBookmark?: (title: string) => void }> = ({ onAddBookmark, ...props }) => {
  const [isAdded, setIsAdded] = useState(false);

  const pathname = usePathname();

  const handleAddBookmark = () => {
    if (onAddBookmark && !isAdded) {
      onAddBookmark(props.title);
      setIsAdded(true);
    }
  };

  const thumbnailSrc = props.thumbnail && props.thumbnail.regular && props.thumbnail.regular.large;

  return (
    <div className="flex flex-col mt-6 gap-y-2 hover:cursor-pointer">
      <div className="w-[164px] h-auto md:w-[220px] lg:w-[200px] xl:w-[250px] 2xl:w-[340px] rounded-lg relative">
        {thumbnailSrc && (
          <Image src={thumbnailSrc} alt={props.title} width={280} height={0} className="w-full rounded-lg" />
        )}
        {pathname === "/bookmarks" && (
          <button
            onClick={() => props.onRemoveBookmark && props.onRemoveBookmark(props.title)}
            className="rounded-3xl bg-black bg-opacity-25 p-[10px] absolute top-4 right-4 hover:bg-white group trnasition-all duration-300 z-10">
            <Image
              src="/images/active-bookmark.svg"
              alt="bookmark"
              width={12}
              height={14}
              className="group-hover:invert"
            />
          </button>
        )}
        {pathname !== "/bookmarks" && (
          <button
            onClick={handleAddBookmark}
            className="rounded-3xl bg-black bg-opacity-25 p-[10px] absolute top-4 right-4 hover:bg-white group trnasition-all duration-300 z-10">
            <Image
              src={`${isAdded ? "/images/active-bookmark.svg" : "/images/bookmark_btn.svg"}`}
              alt="bookmark"
              width={12}
              height={14}
              className="group-hover:invert"
            />
          </button>
        )}
        <div className="absolute top-0 left-0 w-full h-full transition-all duration-300 bg-black bg-opacity-50 opacity-0 hover:opacity-100">
          <span className="rounded-3xl bg-white bg-opacity-25 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 flex items-center gap-x-5 py-[9px]">
            <FaPlayCircle className="w-[30px] h-[30px] ps-[9px]" />
            <p className="text-lg font-medium pe-6">Play</p>
          </span>
        </div>
      </div>
      <div className="flex items-center gap-x-[6px] text-[13px] font-light leading-normal">
        <span className="opacity-75">{props.year}</span>
        <span className="w-[3px] h-[3px] bg-white rounded-full opacity-50"></span>
        <span className="opacity-75">{props.category}</span>
        <span className="w-[3px] h-[3px] bg-white rounded-full opacity-50"></span>
        <span className="opacity-75">{props.rating}</span>
      </div>
      <h2>{props.title}</h2>
    </div>
  );
};

export default Card;
