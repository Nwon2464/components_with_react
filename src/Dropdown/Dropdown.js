import React, { useState, useEffect, useRef } from "react";

const Dropdown = ({ options, selected, onSelectedChange }) => {
  const [open, setOpen] = useState(false);
  const openRef = useRef();
  useEffect(() => {
    //user clicks on any element besides the ones created by the Dropdown (outside dropdown)
    //if a user clicks on any of these elements, we do not want the body event listener to close the dropdown

    //user clicks on an element that is created by the dropdown componet (inside dropdown)
    // if a user clicks on one of these elements, then we dont want the body event listener to do anything

    document.body.addEventListener("click", (e) => {
      if (openRef.current.contains(e.target)) {
        return;
      }
      setOpen(false);
    });
  }, []);
  const renderOptions = options.map((option) => {
    if (option.value === selected.value) {
      console.log("A");
      return null;
    }
    return (
      <div
        key={option.value}
        className="item"
        onClick={() => onSelectedChange(option)}
      >
        {option.label}
      </div>
    );
  });
  console.log(openRef);
  return (
    <div className="ui form">
      <div className="field">
        <label className="label">Select a Color</label>
        <div
          ref={openRef}
          onClick={() => setOpen(!open)}
          className={`ui selection dropdown ${open ? "visible active" : ""}`}
        >
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className={`menu ${open ? "visible transition" : ""}`}>
            {renderOptions}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;






