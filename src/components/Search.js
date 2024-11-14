// Search.js
import React, { useState } from 'react';

const Search = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Type a name to search..."  // Updated placeholder text
        value={searchTerm}
        onChange={handleSearchChange}
      />
    </div>
  );
};

export default Search;
