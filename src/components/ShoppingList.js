import React from "react";
import Item from "./Item";
import {useState} from "react"

function ShoppingList({ items }) {

  let [selectedCategory, setSelectedCategory] = useState("All")

  const itemsToDisplay = items.filter(item => {

    if(selectedCategory === "All"){
      return true
    } else{ 
      return item.category === selectedCategory}
  })

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange={(event)=> setSelectedCategory(selectedCategory = event.target.value)} name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
