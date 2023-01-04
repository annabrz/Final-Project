import React from "react";
import { Route, Routes} from 'react-router-dom';
import ItemDetails from "./ItemDetails"
import Home from "./Home"


function App() {
  return (

    <div className="App">

      <Routes>
          <Route path="/ItemDetails" element= {<ItemDetails />} />
          <Route
          path="/"
          element= {<Home />}
          />
        </Routes>
    </div>
  );
}

export default App;
