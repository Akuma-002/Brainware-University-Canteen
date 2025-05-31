import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const List = () => {
  const options = ['veg', 'non-veg', 'both'];

  return (
    <div className="flex justify-center mt-10">
      <div className="flex space-x-2 bg-white p-1 border border-gray-500/50 rounded-full text-sm">
        {options.map((option) => (
          <NavLink
            key={option}
            to={`/home/${option.toLowerCase()}`}
            className={({ isActive }) =>
              `cursor-pointer rounded-full py-2 px-6 capitalize transition-colors duration-200 ${
                isActive
                  ? 'bg-amber-600 text-white'
                  : 'text-gray-500 hover:bg-amber-200'
              }`
            }
          >
            {option}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default List;
