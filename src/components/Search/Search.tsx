import React from "react";
import './Search.scss'

const Search = ({setSearch}: any) => {

  return (
    <form className="search d-flex flex-sm-row flex-column align-items-center justify-content-center gap-4 mb-5">
      <input
        type="text"
        placeholder="Search for characters"
        className="input"
        onChange={e => setSearch(e.target.value)}
      />
    </form>
  );
};

export default Search;
