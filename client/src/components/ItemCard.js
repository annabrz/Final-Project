import React from "react";
import ItemDetails from "./ItemDetails"
import { Route, Routes, useNavigate } from 'react-router-dom';

function ItemCard({item}) {
const navigate = useNavigate()

const navigateToItemDetails = () => {

  navigate('/ItemDetails')
}


  return (
    <li className="card">
      <img src={item.image} alt={item.name} />
      <h4>{item.name}</h4>
      <p>Price: {item.price}</p>

        <button onClick={navigateToItemDetails}>Buy</button>

 </li>
  );
  }

export default ItemCard;
