import React from "react";
import {useState} from "react"

function Item({ name, category }) {

  const [isAdded, setAdded] = useState(false)
  const addedToggle = isAdded === false?  "add" : "remove"


  return (
    <li className={isAdded === true? "in-cart":""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={addedToggle} onClick={()=> setAdded(!isAdded)}>{addedToggle} to Cart</button>
    </li>
  );
}

export default Item;
