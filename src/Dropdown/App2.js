import React, { useState } from "react";
import Dropdown from "./Dropdown";

const App2 = () => {
  const [selected, setSelected] = useState(options[0]);
  const [toggle, setToggle] = useState(true);
  console.log(selected);
  return (
    <div>
      <button onClick={() => setToggle(!toggle)}>Toggle Dropdown</button>
      {toggle ? (
        <Dropdown
          selected={selected}
          onSelectedChange={setSelected}
          options={options}
        />
      ) : null}
    </div>
  );
};

const options = [
  {
    label: "The Color Red",
    value: "red",
  },
  {
    label: "The Color Green",
    value: "green",
  },
  {
    label: "A Shad of Blue",
    value: "blue",
  },
];

export default App2;
