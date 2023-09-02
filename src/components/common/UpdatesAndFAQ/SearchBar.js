import React, { useRef } from 'react';
import "./SearchBar.scss"

const SearchBar = ({ placeHolderText, onSearch }) => {
  const searchRef = useRef();
  return (
    <div className="primary-container p-1 search-container">
      <input
        type="search"
        placeholder={placeHolderText}
        onChange={(event) => onSearch(event.target.value)}
        className="p-1 surface"
      />
    </div>
  );
};

export default SearchBar;
