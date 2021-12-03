import React from 'react';
import { Header } from './Header';

export const Layout = ({ children }) => {
  return (
    <div className="h-full min-h-screen bg-gray-200 leading-normal tracking-normal flex flex-col">
      <Header />
      <div className="max-w-7xl mx-auto mt-20 px-4 mb-auto w-full">{children}</div>
    </div>
  );
};
