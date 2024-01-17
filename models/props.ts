interface Props {
  id: number;
  title: string;
  original_title: string;
  name: string;
  first_air_date: string;
  media_type: string;
  poster_path: string;
  genres: Array<{
    name: string;
    id: string;
  }>;
  language: string;
  release_date: string;
  runtime: string;
  rating: string;
  overview: string;
  link: number | string;
  videos: { results: Array<{ type: string; key: string }> };
}

export default Props;
