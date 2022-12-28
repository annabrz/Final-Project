import React from "react";
import ItemCard from "./ItemCard";

function ItemList({items}) {


  const itemCards = items.map(item => {
    return <ItemCard  key= {item.id} item={item} />
  })
  return (
    <ul className="cards">
      {itemCards}
    </ul>
  );
}

export default ItemList;
