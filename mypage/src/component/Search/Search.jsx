import React, { useState } from 'react';
import './search.css';
import { IoSearchSharp } from "react-icons/io5";

const Search = () => {
  const [active, setActive] = useState(false);

  const checkState = () => {
    active ? setActive(false) : setActive(true)
  }

  return (
    <div id='Search'>
      <button className='search-btn' type='button' onClick={checkState}>Finder</button>
      <div className={active ? "search active" : "search"}>
        <div>
          <IoSearchSharp size="1.2rem" fill='#000' />
        </div>
        <input type="text" placeholder=" "></input>
      </div>
    </div>
  );
};

export default Search;