import "./Input.css";
import Button from "../Button/Button";
import React, { useState } from 'react';

const Input = (props) => {
const [InputValue, setInputValue] = useState("");

const handleInputValue = (event) => {
  setInputValue(event.target.value)
  console.log(event.target.value);
  setInputValue("")

};

  return (
    <>
      <div className="add-task-container"> 
        <input type="text" 
        placeholder="What is your task for today?" 
        onChange={handleInputValue} 
        value={InputValue}/>
        <Button btnText={props.btnText}/>
      </div>
    </>
    );
};

export default Input;