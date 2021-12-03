import React from 'react';
import { Link } from 'react-router-dom';
import { Search } from './Search';

export const Header = () => {
  return (
    <header className="fixed w-full z-10 top-0 py-4 bg-blue-500 shadow-sm text-white px-4">
      <nav className="max-w-7xl mx-auto flex justify-between">
        <h2 className="text-3xl font-bold">The LIBRARY</h2>
        <div className="flex items-center">
          <Link to="/books?sortBy=popularity">
            <button className="opacity-80 text-lg font-semibold hover:opacity-100 mx-2">
              Most Popular
            </button>
          </Link>
          <Link to="/books?sortBy=rating">
            <button className="opacity-80 text-lg font-semibold hover:opacity-100 mx-2">
              Top Rated
            </button>
          </Link>
          <Link to="/books?sortBy=latest">
            <button className="opacity-80 text-lg font-semibold hover:opacity-100 mx-2">
              Latest
            </button>
          </Link>
        </div>
        <Search />
      </nav>
    </header>
  );
};
