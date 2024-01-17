import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import TrendingCard from "../ui/TrendingCard";
import Props from "../../models/props";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  largeDesktop: {
    breakpoint: { max: 3000, min: 1440 },
    items: 3,
  },
  Desktop: {
    breakpoint: { max: 1440, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

interface TrendingCarouselProps {
  data: Props[];
}

const TrendingCarousel: React.FC<TrendingCarouselProps> = ({ data }) => {
  return (
    <Carousel responsive={responsive} centerMode={true} infinite>
      {data.map(item => (
        <TrendingCard key={item.id} {...item} />
      ))}
    </Carousel>
  );
};

export default TrendingCarousel;
