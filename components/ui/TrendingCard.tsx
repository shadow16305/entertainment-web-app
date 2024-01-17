import Props from "../../models/props";
import Image from "next/image";
import Link from "next/link";
import { FaPlayCircle } from "react-icons/fa";

const TrendingCard: React.FC<Props> = ({ ...props }) => {
  return (
    <Link
      href={`${props.link}`}
      className="flex flex-col gap-y-2 mt-6 hover:cursor-pointer lg:w-[340px] xl:w-[360px] 2xl:w-[380px] h-auto">
      <div className="relative w-full h-full">
        <Image
          src={`https://image.tmdb.org/t/p/w500/${props.poster_path}`}
          alt="title"
          width={470}
          height={0}
          className="w-full h-full rounded-3xl"
        />
        <div className="absolute top-0 left-0 w-full h-full transition-all duration-300 bg-black bg-opacity-50 opacity-0 hover:opacity-100">
          <span className="rounded-3xl bg-white bg-opacity-25 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 flex items-center gap-x-5 py-[9px]">
            <FaPlayCircle className="w-[30px] h-[30px] ps-[9px]" />
            <p className="text-lg font-medium pe-6">Play</p>
          </span>{" "}
          <div className="absolute bottom-2 left-2">
            <div className="flex items-center gap-x-[6px] text-[13px] font-light leading-normal">
              <span className="opacity-75">{props.release_date || props.first_air_date}</span>
              <span className="w-1 h-1 rounded-full bg-white opacity-50" />
              <span className="opacity-75">{props.media_type}</span>
            </div>
            <h2>{props.title || props.name}</h2>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default TrendingCard;
