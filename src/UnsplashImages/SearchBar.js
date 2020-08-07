import React, { useState } from "react";

const SearchBar = (props) => {
  const [term, setTerm] = useState("");
  const onChangeInput = (e) => {
    setTerm(e.target.value);
  };
  const onSubmitForm = (e) => {
    e.preventDefault();
    props.onSubmit(term);
  };
  return (
    <div>
      <form onSubmit={onSubmitForm}>
        <label htmlFor="search">Search Images:</label>
        <input type="text" id="search" value={term} onChange={onChangeInput} />
      </form>
    </div>
  );
};

export default SearchBar;
