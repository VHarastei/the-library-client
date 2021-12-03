import React, { useState } from 'react';
import searchIcon from 'assets/search.svg';
import trendingIcon from 'assets/trending.svg';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export const Search = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState(false);
  console.log(document.activeElement.id);

  return (
    <div className="relative flex  bg-white bg-opacity-20 rounded-lg w-1/3 p-2">
      <img src={searchIcon} alt="search icon" className="opacity-80" />
      <input
        id="searchField"
        type="text"
        placeholder="Search book"
        className="mx-2 w-full bg-transparent text-white placeholder-white placeholder-opacity-80 focus:outline-none"
        onFocus={() => setIsActive(true)}
        onBlur={() => setIsActive(false)}
      />
      {document.activeElement.id === 'searchField' && (
        <div className="w-full absolute left-0 top-12 bg-white text-black p-4 rounded-lg">
          <div className="flex">
            <span className="text-sm font-semibold mr-1">Trending</span>
            <img src={trendingIcon} alt="trending icon" />
          </div>
          bibas
        </div>
      )}
    </div>
  );
};

const SearchItem = ({ book }) => {
  return <div className="">{book.name}</div>;
};
