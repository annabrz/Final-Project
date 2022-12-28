import React, {useState}from "react";

function ItemCard({item}) {
  const [inStock, setStock] = useState(true)

  const handleStockClick=()=>(setStock(!inStock))


  return (
    <li className="card">
      <img src={item.image} alt={item.name} />
      <h4>{item.name}</h4>
      <p>Price: {item.price}</p>
      {inStock ? (
        <button onClick={handleStockClick}className="primary">For Sale</button>
      ) : (
        <button onClick={handleStockClick}>Sold</button>
      )}
    </li>
  );
}

export default ItemCard;
