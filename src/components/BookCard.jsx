import React from 'react';
import { Link } from 'react-router-dom';

export const BookCard = ({ id, name, author, img }) => {
  return (
    <div className="bg-white rounded-lg p-4">
      <img width={250} src={img} alt="" />
      <div className="text-center">
        <h3 className="text-2xl text-blue-500 font-semibold">{name}</h3>
        <h4 className="text-lg text-gray-500 font-medium">{author}</h4>
      </div>
      <Link to={`/books/${id}`}>
        <button className="mt-2 py-2 text-lg font-medium w-full bg-blue-500 text-white rounded-lg hover:bg-blue-600">
          Explore More
        </button>
      </Link>
    </div>
  );
};
