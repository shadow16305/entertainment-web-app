interface Props {
  title: string;
  year: number;
  category: string;
  rating: string;
  isTrending: boolean;
  thumbnail: {
    trending?: {
      small: string;
      large: string;
    };
    regular: {
      small: string;
      medium: string;
      large: string;
    };
  };

  onAddBookmark?: (title: string) => void;
  onRemoveBookmark?: (title: string) => void;
}

export default Props;
