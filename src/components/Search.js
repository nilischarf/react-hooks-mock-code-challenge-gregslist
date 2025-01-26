import React from "react";

function Search({ onSearch }) {
  function handleChange(event) {
    onSearch(event.target.value);
  }


  return (
    <form className="searchbar">
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        onChange={handleChange}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
