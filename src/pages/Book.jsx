import React from 'react';
import { useParams } from 'react-router';
import starIcon from 'assets/star.svg';
import amazonIcon from 'assets/amazon.png';
import coverIcon from 'assets/cover.png';

export const Book = ({ state }) => {
  const { bookId } = useParams();
  const book = state.books.find((book) => book.id === bookId);

  return (
    <div className="my-8 flex gap-4 justify-center items-center">
      <img width={300} src={book.img || coverIcon} alt="" />
      <div className="bg-white rounded-lg p-4 flex flex-col justify-center h-full">
        <h2 className="text-4xl text-blue-500 font-semibold mb-4">{book.name}</h2>
        <div>
          <span className="text-2xl text-gray-500 font-medium">Author: </span>
          <span className="text-2xl font-medium">{book.author}</span>
        </div>
        <div>
          <span className="text-2xl text-gray-500 font-medium">Date of writing: </span>
          <span className="text-2xl font-medium">{book.date}</span>
        </div>
        <div className="flex">
          <span className="text-2xl text-gray-500 font-medium mr-1">Rating: </span>
          <span className="text-2xl font-medium">{book.rating}</span>
          <img width={32} src={starIcon} alt="" />
        </div>
        <div>
          <span className="text-2xl text-gray-500 font-medium">Views: </span>
          <span className="text-2xl font-medium">{book.views}</span>
        </div>
        <a href={book.buyLink} target="_blank" rel="noopener noreferrer">
          <button className="mt-4 bg-amazon p-4 text-2xl font-medium text-white flex rounded-lg items-center hover:bg-opacity-80">
            <img width={32} src={amazonIcon} alt="" className="mr-2 mt-1" />
            Buy on Amazon
          </button>
        </a>
      </div>
    </div>
  );
};
