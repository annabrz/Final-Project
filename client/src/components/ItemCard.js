import React from "react";
import ItemDetails from "./ItemDetails";
import { Link, Route, Routes, useNavigate } from "react-router-dom";

function ItemCard({ item, id, setItemId, setItems }) {
  
  const handleDelete = (id) => {
    fetch(`http://127.0.0.1:3000/items/${id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then((data) => setItems(data));
      window.location.reload();
  };

  return (
    <li className="card">
      <img className="card-image" src={item.image} alt={item.name} />
      <h4>{item.name}</h4>
      <p>Price: ${item.price}</p>
      {/* <p>id={item.id}</p> */}
      <button onClick={() => handleDelete(item.id)}>DELETE</button>
      <Link onClick={() => setItemId(item.id)} to={`/items/${item.id}`}>
        Buy
      </Link>
      
    </li>
  );
}

export default ItemCard;
