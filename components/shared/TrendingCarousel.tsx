import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import TrendingCard from "../ui/TrendingCard";
import Props from "../../models/props";
import { useContext } from "react";
import { BookmarkContext } from "@/store/bookmark-context";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
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

const TrendingCarousel: React.FC<{ data: Props[] }> = ({ data }) => {
  const bookmarkCtx = useContext(BookmarkContext);

  const addBookmarkHandler = (title: string) => {
    bookmarkCtx.addBookmark(title);
  };

  return (
    <Carousel responsive={responsive}>
      {data.map(item => (
        <TrendingCard key={item.title} {...item} onAddBookmark={() => addBookmarkHandler(item.title)} />
      ))}
    </Carousel>
  );
};

export default TrendingCarousel;
