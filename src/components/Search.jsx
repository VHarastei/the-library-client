import searchIcon from 'assets/search.svg';
import starIcon from 'assets/star.svg';
import trendingIcon from 'assets/trending.svg';
import closeIcon from 'assets/close.svg';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import coverIcon from 'assets/cover.png';
import { useSearch } from 'hooks/useSearch';

export const Search = ({ books }) => {
  const [isActive, setIsActive] = useState(false);
  const { searchValue, foundBooks, hadleSearch } = useSearch(books);

  return (
    <div className="relative flex  bg-white bg-opacity-20 rounded-lg w-1/3 p-2">
      <img src={searchIcon} alt="search icon" className="opacity-80" />
      <input
        id="searchField"
        type="text"
        placeholder="Search book"
        className="mx-2 w-full bg-transparent text-white placeholder-white placeholder-opacity-80 focus:outline-none"
        onChange={hadleSearch}
        value={searchValue}
        onFocus={() => setIsActive(true)}
        autoComplete="off"
      />
      {isActive && (
        <div className="w-full absolute left-0 top-12 bg-white text-black p-2 rounded-lg">
          <div className="flex justify-between">
            <div className="flex mb-2">
              {searchValue ? (
                <span className="text-sm font-semibold mr-1">Results</span>
              ) : (
                <>
                  <span className="text-sm font-semibold mr-1">Trending</span>
                  <img src={trendingIcon} alt="trending icon" />
                </>
              )}
            </div>
            <button onClick={() => setIsActive(false)} className="hover:bg-gray-200 rounded-full">
              <img src={closeIcon} alt="close icon" />
            </button>
          </div>
          {searchValue && foundBooks.length ? (
            foundBooks.map((book) => (
              <SearchItem key={book.id} {...book} onClose={() => setIsActive(false)} />
            ))
          ) : searchValue && !foundBooks.length ? (
            <h3 className="p-2 text-xl font-semibold">No search results!</h3>
          ) : (
            <>
              <SearchItem {...books[0]} onClose={() => setIsActive(false)} />
              <SearchItem {...books[1]} onClose={() => setIsActive(false)} />
              <SearchItem {...books[2]} onClose={() => setIsActive(false)} />
            </>
          )}
        </div>
      )}
    </div>
  );
};

const SearchItem = ({ id, name, author, img, rating, onClose }) => {
  return (
    <Link to={`/books/${id}`}>
      <div
        className="flex justify-between hover:bg-gray-100 rounded-lg p-2 cursor-pointer"
        onClick={onClose}
      >
        <div className="flex">
          <img width={48} src={img || coverIcon} alt={name} />
          <div className="ml-2">
            <h3 className="text-xl font-semibold">{name}</h3>
            <h5 className="text-lg text-gray-500">{author}</h5>
          </div>
        </div>
        <div className="flex items-start my-1">
          <span className="text-gray-500 font-medium">{rating}</span>
          <img width={24} src={starIcon} alt={name} />
        </div>
      </div>
    </Link>
  );
};
