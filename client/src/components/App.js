import React from "react";
import Header from "./Header";
import ItemPage from "./ItemPage"
import { Route, Routes, Link } from 'react-router-dom';
import ItemDetails from "./ItemDetails"


function App() {
  return (

    <div className="App">
      <Header />
      <ItemPage />
      <Link to="/ItemDetails">View Item Details</Link>
      <Routes>
          <Route path="/ItemDetails" element= {<ItemDetails />} />
        </Routes>
    </div>
  );
}

export default App;
