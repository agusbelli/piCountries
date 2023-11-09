import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { getByName } from "../../../redux/actions";
import style from "./resetButton.module.css"
const ResetButton = () => {

  const dispatch = useDispatch();

  const handleButton = () => {
    dispatch(getByName(""));
  };


  return (
      <button className={style.buttonStyle} onClick={handleButton}>
        Reset
      </button>
  );
};

export default ResetButton;