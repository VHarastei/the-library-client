import React from 'react';
import qs from 'query-string';
import { useLocation } from 'react-router';
import { BookCard } from 'components/BookCard';

export const Books = ({ state }) => {
  const location = useLocation();
  const { sortBy } = qs.parse(location.search);
  const books = state.books;

  return (
    <div className="my-4">
      <h1 className="text-4xl font-semibold text-blue-500 text-center my-4">
        {sortBy === 'popularity' ? 'Most Popular' : sortBy === 'rating' ? 'Top Rated' : 'Latest'}
        {` Books`}
      </h1>
      <div className="flex gap-4 flex-wrap justify-center">
        {books
          .slice()
          .sort((a, b) => (a[sortBy] > b[sortBy] ? -1 : 1))
          .map((book) => (
            <BookCard {...book} key={book.id} />
          ))}
      </div>
    </div>
  );
};
