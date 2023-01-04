import React from 'react';
import ItemPage from './ItemPage'

function ItemDetails({item}) {
  return (

    <div>
      <h1>Item Details</h1>

      <img src={item.image} alt={item.name} />
      <h4>{item.name}</h4>
      <p>Price: {item.price}</p>



    </div>
  );
}

export default ItemDetails;
