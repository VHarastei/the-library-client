import { BookCard } from 'components/BookCard';
import React from 'react';
import { Link } from 'react-router-dom';

export const Home = ({ state }) => {
  const books = state.books;

  return (
    <div className="my-4">
      <div className="text-center mt-4">
        <h1 className="text-5xl text-blue-500 font-semibold mb-2">Explore and increase library</h1>
        <h2 className="text-2xl text-gray-500 font-medium">
          Here you can find new and interesting books, as well as find out where you can buy them
        </h2>
      </div>
      <h3 className="text-3xl text-blue-500 font-semibold my-2">
        Add your favourite book to our library:
      </h3>
      <div className="flex justify-center">
        <Link to="/create">
          <button className="auto mt-2 mb-6 py-3 text-2xl font-medium bg-blue-500 text-white rounded-lg hover:bg-blue-600 w-72">
            Add book
          </button>
        </Link>
      </div>
      <h3 className="text-3xl text-blue-500 font-semibold my-2">The best books for our taste:</h3>
      <div className="flex gap-4 flex-wrap justify-center">
        <BookCard {...books[0]} />
        <BookCard {...books[1]} />
        <BookCard {...books[2]} />
        <BookCard {...books[3]} />
      </div>
    </div>
  );
};
