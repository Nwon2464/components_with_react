import React, { useState } from "react";

const Count = (props) => {
  const [visible, setVisible] = useState(4);
  const showClick = () => {
    setVisible(visible + 4);
  };
  return <div>{props.render(visible, showClick)}</div>;
};
export default Count;
