import React, { useState, useEffect } from 'react';

function Filter({ onCategoryChange, onSearchChange, search }) {
  // Initialize searchText state with an empty string if search prop is undefined
  const [searchText, setSearchText] = useState(search || '');

  useEffect(() => {
    setSearchText(search || ''); // Update searchText when search prop changes
  }, [search]);

  const handleSearchChange = (event) => {
    const { value } = event.target;
    setSearchText(value);
    onSearchChange(value);
  };

  return (
    <div className="Filter">
      <input
        type="text"
        name="search"
        placeholder="Search..."
        value={searchText}
        onChange={handleSearchChange}
      />
      <select name="filter" onChange={onCategoryChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
