import { ChangeEvent } from "react";
import { IoSearch } from "react-icons/io5";

const SearchBox: React.FC<{
  value: { searchValue: string; setSearchValue: React.Dispatch<React.SetStateAction<string>> };
}> = ({ value }) => {
  const inputSearchhandler = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const { setSearchValue } = value;

  return (
    <div className="flex mt-16 mb-5 gap-x-3">
      <IoSearch className="w-6 h-6 text-white" />
      <input
        type="text"
        onChange={inputSearchhandler}
        placeholder="Search for movies or TV series"
        className="w-full border-b border-extra-dark-blue hover:border-grey-blue transition-all duration-300 bg-transparent focus:outline-none pb-[14px] text-white"
      />
    </div>
  );
};

export default SearchBox;
