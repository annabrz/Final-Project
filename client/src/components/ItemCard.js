import React from "react";
import ItemDetails from "./ItemDetails"
import {Link, Route, Routes, useNavigate } from 'react-router-dom';

function ItemCard({item, id, setItemId}) {



  return (
    <li className="card">
      <img className="card-image" src={item.image} alt={item.name} />
      <h4>{item.name}</h4>
      <p>Price: ${item.price}</p>
      {/* <p>id={item.id}</p> */}
      <Link onClick={() => setItemId(item.id)} to={`/items/${item.id}`}>Buy</Link>
        {/* <button onClick={`/items/${id}`}>Buy</button> */}

 </li>
  );
  }

export default ItemCard;
