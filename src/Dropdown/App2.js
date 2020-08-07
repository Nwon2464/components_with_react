import React, { useState } from "react";
import Dropdown from "./Dropdown";

const App2 = () => {
  const [selected, setSelected] = useState(options[0]);
  console.log(selected);
  return (
    <div>
      <Dropdown
        selected={selected}
        onSelectedChange={setSelected}
        options={options}
      />
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
