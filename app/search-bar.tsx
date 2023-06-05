"use client";

const SearchBar = () => {
  return (
    <div className="flex gap-1 items-center">
      <img
        src="/search-magnifying-glass-svgrepo-com.svg"
        alt="search icon"
        width={20}
        height={20}
      />
      <input
        type="text"
        name="search-country"
        placeholder="Search for a country..."
        className="url"
      />
    </div>
  );
};

export default SearchBar;
