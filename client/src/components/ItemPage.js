import React,{useState, useEffect} from "react";
import ItemList from "./ItemList";
import Search from "./Search";
import NewItemForm from "./NewItemForm"



function ItemPage({setItemId}) {
  // const[items, setItems]= useState([])
  const[searchInput, setSearchInput]= useState('')
  const[items, setItems]= useState([])

  const addItem = (item) => {
    setItems((items)=>[...items, item])
  }
  useEffect(()=>{
    fetch("http://127.0.0.1:3000/items")
    .then (r => r.json())
    .then ((data)=>{
      // console.log(data)
    setItems(data)})
    },[])
const filterItems = items.filter((item)=>{
    return item.name.toLowerCase().includes(searchInput.toLowerCase())
  })

  return (
    <div>
    <main>
      <NewItemForm addItem={addItem} />
      <Search searchInput={searchInput} setSearchInput={setSearchInput} />
      <ItemList items={filterItems} setItemId={setItemId} />

    </main>

</div>
  );
}

export default ItemPage;
