import { Dispatch, SetStateAction } from "react";

interface GenreDropdownProps {
  genres: GenreProps[];
  setGenre: Dispatch<SetStateAction<number | null>>;
  selectedGenre: number | null;
}

const GenreDropdown: React.FC<GenreDropdownProps> = ({ genres, setGenre, selectedGenre }) => {
  return (
    <div className="bg-white bg-opacity-5 backdrop-blur-2xl px-4 py-6 absolute z-10 -left-full rounded-xl flex flex-col items-start">
      {genres.map((genre) => (
        <button
          key={genre.id}
          onClick={() => setGenre(genre.id)}
          className={`${genre.id === selectedGenre ? "text-red" : "text-white"}`}>
          {genre.name}
        </button>
      ))}
    </div>
  );
};

export default GenreDropdown;
