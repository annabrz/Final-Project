import React from "react"


function ItemDetails({items, itemId}) {


  return (
//     <li >
//     <img  src={itemId.image} alt={itemId.name} />
//     <h4>{itemId.name}</h4>
//     <p>Price: ${itemId.price}</p>


// </li>
    <section>
    <div className="project-item">
        <h1>{items[itemId-1].name}</h1>
        <img src={items[itemId-1].image} alt={items[itemId-1].name} />
        <p>Price: {items[itemId-1].price}</p>
        <p>Condition: {items[itemId-1].condition}</p>
        <p>Details: {items[itemId-1].details}</p>

    </div>
</section>
  );
}

export default ItemDetails;
