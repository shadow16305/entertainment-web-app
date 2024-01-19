interface SeriesProps {
  budget: number;
  genres: Array<{
    id: number;
    name: string;
  }>;
  overview: string;
  vote_average: number;
  vote_count: number;
  poster_path: string;
  backdrop_path: string;
  first_air_date: string;
  last_air_date: string;
  revenue: number;
  runtime: number;
  tagline: string;
  name: string;
}

export default SeriesProps;
