import React from "react";
import ItemCard from "./ItemCard";
import { Link } from "react-router-dom"

function ItemList({items, id, setItemId}) {
console.log(items)

  const itemCards = items.map((item) => {
    return <ItemCard  key= {item.id} item={item} setItemId={setItemId}/>
  })
  return (
    <div>
    <ul className="cards">
      {itemCards}

    </ul>

    </div>
  );
}

export default ItemList;
