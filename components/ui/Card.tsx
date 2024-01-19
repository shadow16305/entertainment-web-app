import Image from "next/image";
import Props from "../../models/props";
import { FaPlayCircle } from "react-icons/fa";
import Link from "next/link";

const Card: React.FC<Props> = ({ ...props }) => {
  return (
    <Link href={`${props.link}`} className="flex flex-col mt-6 gap-y-2 hover:cursor-pointer rounded-3xl">
      <div className="h-auto relative max-w-[160px] lg:max-w-[230px] 2xl:max-w-none w-full group overflow-hidden rounded-3xl">
        <Image
          src={`https://image.tmdb.org/t/p/w500/${props.poster_path}`}
          alt="poster"
          width={280}
          height={0}
          className="h-auto rounded-3xl group-hover:scale-105 object-cover transform transition-transform hover:scale-105"
        />
        <div className="absolute top-0 left-0 w-full h-full transition-all duration-300 bg-black bg-opacity-50 backdrop-blur-sm opacity-0 hover:opacity-100 rounded-3xl">
          <span className="rounded-3xl bg-white bg-opacity-25 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 flex justify-center items-center gap-x-5 py-2 px-4">
            <p className="text-lg font-medium">View</p>
          </span>{" "}
          <div className="absolute bottom-2 left-2">
            <span className="opacity-75 text-sm">{props.release_date || props.first_air_date}</span>
            <h2>{props.title || props.name}</h2>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
