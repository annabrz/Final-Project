import React from "react"
import ItemPurchase from "./ItemPurchase"

function ItemDetails({items, itemId}) {
// console.log(items)
//   const itemDet = items.map((item) => {
//     return <ItemPurchase  item = {item}/>
//   })

// if (!items) return <h2>Could not load Items</h2>


  return (

    <section>
    <div className="project-item">
        <h1>{items[itemId-1].name}</h1>
        <p>{items[itemId-1].image}</p>
        <p>{items[itemId-1].price}</p>
        <p>{items[itemId-1].condition}</p>
        <p>{items[itemId-1].details}</p>

    </div>
</section>
  );
}

export default ItemDetails;
