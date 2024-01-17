interface MovieProps {
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
  release_date: string;
  revenue: number;
  runtime: number;
  tagline: string;
  title: string;
}

export default MovieProps;
