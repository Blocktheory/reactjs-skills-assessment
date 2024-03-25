import React from "react";
import "./Dropdown.css";

const Dropdown = ({ handleSelect}) => {
  const options = [
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing",
  ];
  const handleClick = (option) => {
    handleSelect(option);
  };
  return (
    <div className="d-menu">
      {options.map((option) => (
        <li key={option} onClick={() => handleClick(option)}>{option.charAt(0).toUpperCase() + option.slice(1)}
        </li>
      ))}
    </div>
  );
};

export default Dropdown;
