import React, { useState } from "react";


function NewItemForm({ addItem}) {
  const [newName, setName] = useState("");
  const [newCategory, setCategory] = useState("");
  const [newPrice, setPrice] = useState("");
  const [newDetails, setDetails] = useState("");
  const [newCondition, setCondition] = useState("")
  const [newImage, setImage] = useState("")
  // const [items, setItems] = useState([]);


  const handleSubmit = (e) => {
    const newItem = {
      name: newName,
      category: newCategory,
      price: newPrice,
      details: newDetails,
      condition: newCondition,
      image: newImage
    };
    // const addItem = (item) => {
    //     setItems([...items, item]);
    //   }


      fetch("http://127.0.0.1:3000/items", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({newItem}),
      })
        .then((r) => r.json())
        .then((createdItem) => {
          addItem(createdItem);
        })



    e.preventDefault();
    setName('')
    setCategory('')
    setPrice('')
    setDetails('')
    setCondition('')
    setImage('')

  };
  return (
    <div className="new-Item-form">
      <h2>New Item</h2>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setName(e.target.value)}
          value={newName}
          type="text"
          name="name"
          placeholder="Item name"
        />
        <input
          onChange={(e) => setCategory(e.target.value)}
          value={newCategory}
          type="text"
          name="category"
          placeholder="Category"
        />
        <input
          onChange={(e) => setPrice(e.target.value)}
          value={newPrice}
          type="number"
          name="price"
          step="0.01"
          placeholder="Price"
        />
          <input
          onChange={(e) => setDetails(e.target.value)}
          value={newDetails}
          type="text"
          name="details"
          placeholder="Details"
        />
          <input
          onChange={(e) => setCondition(e.target.value)}
          value={newCondition}
          type="text"
          name="condition"
          placeholder="Condition"
        />
          <input
          onChange={(e) => setImage(e.target.value)}
          value={newImage}
          type="text"
          name="image"
          placeholder="Image URL"
        />

        <button type="submit">
          List item for sale
        </button>
      </form>
    </div>
  );
}

export default NewItemForm;
