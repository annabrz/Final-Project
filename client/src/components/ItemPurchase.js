import React from "react";

const ItemPurchase = ({ item }) => {
  const { name, image, price, condition, details, id } = item;
  return (
    <section>
      <div className="project-item">
        <h1>{name}</h1>
        <p>{image}</p>
        <p>Price: ${price}</p>
        <p>condition: {condition}</p>
        <p>description: {details}</p>
      </div>
    </section>
  );
};

export default ItemPurchase;
