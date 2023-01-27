import React from "react";
import Header from "./Header";
import ItemPage from "./ItemPage";

function Home() {
  return (
    <div>
      <Header />
      <h1 className="intro">
        {" "}
        Welcome to FlatMarket, a marketplace without fees! Feel free to shop or
        post your own items for sale. Make a free account with us today!{" "}
      </h1>
    </div>
  );
}

export default Home;
