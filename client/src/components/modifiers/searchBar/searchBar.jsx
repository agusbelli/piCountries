import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { getByName } from "../../../redux/actions";
import style from "./searchBar.module.css"

const SearchBar = () => {

  const [search, setSearch] = useState('');

  const dispatch = useDispatch();

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const handleButton = () => {
    dispatch(getByName(search));
  };


  return (
    <div>
      <input className={style.inputStyle} type="text" placeholder="Search Countrie..." value={search} onChange={handleSearch}/>
      <button className={style.buttonStyle} onClick={handleButton}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;