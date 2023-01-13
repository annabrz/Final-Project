import React,{useState} from "react";
import ItemList from "./ItemList";
import Search from "./Search";




function ItemPage({setItems,items,setItemId}) {
  // const[items, setItems]= useState([])
  const[searchInput, setSearchInput]= useState('')



const filterItems = items.filter((item)=>{
    return item.name.toLowerCase().includes(searchInput.toLowerCase())
  })

  return (
    <div>
    <main>

      <Search searchInput={searchInput} setSearchInput={setSearchInput} />
      <ItemList items={filterItems} setItemId={setItemId} />

    </main>

</div>
  );
}

export default ItemPage;
