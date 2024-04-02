import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import Header from "./Header";
import Filter from "./Filter"; 
import ItemForm from "./ItemForm"; // Import the ItemForm component
import itemData from "../data/items";
import { v4 as uuid } from "uuid"; // Import uuid for generating unique IDs

function App() {
  const [items, setItems] = useState(itemData);
  const [isDarkMode, setIsDarkMode] = useState(false);

  function handleDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleSearchChange = (searchText) => {
    setSearchText(searchText);
  };

  const handleItemFormSubmit = (newItem) => {
    setItems([...items, { ...newItem, id: uuid() }]);
  };

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchText, setSearchText] = useState('');

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory !== "All" && item.category !== selectedCategory) return false;
    if (searchText && !item.name.toLowerCase().includes(searchText.toLowerCase())) return false;
    return true;
  });

  return (
    <div className={`App ${isDarkMode ? "dark" : "light"}`}>
      <Header isDarkMode={isDarkMode} onDarkModeClick={handleDarkModeClick} />
      <ItemForm onItemFormSubmit={handleItemFormSubmit} />
      <ShoppingList items={itemsToDisplay} onCategoryChange={handleCategoryChange} />
    </div>
  );
}

export default App;
