import React from "react";

function Search({searchInput,setSearchInput}) {




  return (
    <div className="searchbar">
      <label htmlFor="search">Search Items:</label>
      <input
      onChange={e =>{setSearchInput(e.target.value)}}
      value={searchInput}
        type="text"
        id="search"
        placeholder="Search for item..."

      />
    </div>
  );
}

export default Search;
