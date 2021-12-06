import searchIcon from 'assets/search.svg';
import starIcon from 'assets/star.svg';
import trendingIcon from 'assets/trending.svg';
import closeIcon from 'assets/close.svg';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const Search = () => {
  const [isActive, setIsActive] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [foundBooks, setFoundBooks] = useState([]);

  const hadleSeach = (e) => {
    const val = e.target.value;
    const newFoundBooks = val
      ? books.filter((b, i) => i <= 5 && b.name.toLowerCase().includes(val.toLowerCase()))
      : [];
    setFoundBooks(newFoundBooks);
    setSearchValue(val);
  };

  return (
    <div className="relative flex  bg-white bg-opacity-20 rounded-lg w-1/3 p-2">
      <img src={searchIcon} alt="search icon" className="opacity-80" />
      <input
        id="searchField"
        type="text"
        placeholder="Search book"
        className="mx-2 w-full bg-transparent text-white placeholder-white placeholder-opacity-80 focus:outline-none"
        onChange={hadleSeach}
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
              <SearchItem
                id="1"
                name="The Lord of the Rings"
                author="J.R.R Tolkien"
                img="https://www.listchallenges.com/f/items/90ededf0-3a2f-42ab-a822-7561f51cf353.jpg"
                rating={4.8}
                onClose={() => setIsActive(false)}
              />
              <SearchItem
                id="2"
                name="1984"
                author="George Orwell"
                img="https://www.listchallenges.com/f/items/d6373938-9f8c-45ca-85d6-2b9105814a03.jpg"
                rating={4.5}
                onClose={() => setIsActive(false)}
              />
              <SearchItem
                id="3"
                name="The Count of Monte Cristo"
                author="Alexandre Dumas"
                rating={4.5}
                img="https://www.listchallenges.com/f/items/9d9f0770-0029-43f2-a808-056c534def13.jpg"
                onClose={() => setIsActive(false)}
              />
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
          <img width={48} src={img} alt={name} />
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

export const books = [
  {
    id: 'moby',
    name: 'Moby Duck',
    author: 'Herman Melville',
    rating: 3.2,
    date: 1984,
    views: 2556,
    img: 'https://www.listchallenges.com/f/items/b5983a3d-6055-4a47-8b0d-c53b100d3fae.jpg',
    buyLink: 'http://www.listchallenges.com/',
  },
  {
    id: 'heart',
    name: 'Heart of Darkness',
    author: 'Joseph Conrad',
    rating: 3.4,
    date: 1945,
    views: 2216,
    img: 'https://www.listchallenges.com/f/items/adf3338f-4ad1-4241-b1f6-1f40a7c3a236.jpg',
    buyLink: 'http://www.listchallenges.com/',
  },
  {
    id: 'frank',
    name: 'Frankestein',
    author: 'Mary Shelley',
    rating: 4,
    date: 2021,
    views: 1356,
    img: 'https://www.listchallenges.com/f/items2020/9e2c5597-e8da-4f6a-9b8e-f83e733faeb0.jpg',
    buyLink: 'http://www.listchallenges.com/',
  },
  {
    id: 'dune',
    name: 'Dune',
    author: 'Frank Herbert',
    rating: 4.6,
    date: 1967,
    views: 9923,
    img: 'https://www.listchallenges.com/f/items/cf499f35-65c4-4cca-8a18-b3a332000e93.jpg',
    buyLink: 'http://www.listchallenges.com/',
  },
];
