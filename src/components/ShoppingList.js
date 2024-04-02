import React, { useState } from "react";
import Item from "./Item";
import Filter from "./Filter";

function ShoppingList({ items, onCategoryChange }) {
  const [searchText, setSearchText] = useState('');

  const handleSearchChange = (text) => {
    setSearchText(text.toLowerCase());
  };

  const filteredItems = items.filter(item => 
    item.name.toLowerCase().includes(searchText)
  );

  return (
    <div className="ShoppingList">
      <Filter
        onCategoryChange={onCategoryChange}
        onSearchChange={handleSearchChange}
      />
      <ul className="Items">
        {filteredItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
