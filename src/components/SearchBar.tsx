'use client'
import React, { useState } from 'react';
import { IoMdSearch } from "react-icons/io";


function SearchBar() {
  const [searchValue, setSearchValue] = useState('');

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
    // Effectuez une action appropriée ici, comme la mise à jour de la liste des résultats
  };

  return (
    <div className='w-full flex flex-row gap-2 shadow drop-shadow-lg  text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 '> 
      <IoMdSearch size={20} className="text-grayTone2" />
      <input
        type="text"
        className='block p-2'
        value={searchValue}
        onChange={handleSearchChange}
        placeholder= "Search..."
      />
    </div>
  );
}

export default SearchBar;