import { BsSearch } from "react-icons/bs";

const SearchBar = ({ onChange }) => {
  return (
    <div className="p-4 h-14 w-full flex items-center bg-white text-[#111517] border-none rounded-md md:w-3/5 lg:w-2/5 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] dark:bg-[#2B3945]">
      <BsSearch className="mx-2 text-xl text-gray-500 dark:text-[#F5F5FA]" />
      <input
        type="text"
        placeholder="Search for a country..."
        onChange={onChange}
        className="w-full p-2 bg-white text-[#111517] dark:bg-[#2B3945] dark:text-[#F5F5FA]"
      />
    </div>
  );
};

export default SearchBar;
