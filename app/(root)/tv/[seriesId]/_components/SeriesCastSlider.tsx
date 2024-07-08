import Image from "next/image";
import { RxAvatar } from "react-icons/rx";
import Carousel from "react-multi-carousel";

const responsive = {
  Desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6,
  },
  tablet: {
    breakpoint: { max: 1023, min: 640 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 900, min: 0 },
    items: 2,
  },
};

const SeriesCastSlider: React.FC<{ seriesCast: CastInfo[] }> = ({ seriesCast }) => {
  return (
    <Carousel responsive={responsive} className="mx-auto w-full">
      {seriesCast.map(item => (
        <div key={item.id} className="flex flex-col items-center justify-end min-h-[320px] md:min-h-0">
          {item.profile_path ? (
            <Image
              src={`https://image.tmdb.org/t/p/w500/${item.profile_path}`}
              alt={item.name}
              width={140}
              height={0}
              className="h-auto rounded-3xl md:w-[180px]"
            />
          ) : (
            <RxAvatar className="w-[120px] h-full" />
          )}
          <p className="text-sm md:text-lg text-center">{item.character}</p>
          <p className="text-xs md:text-sm">{item.name}</p>
        </div>
      ))}
    </Carousel>
  );
};

export default SeriesCastSlider;
