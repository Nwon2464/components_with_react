import React, { useState, useEffect } from "react";
import axios from "axios";
import youtube from "../../apis/youtube";
import "./SearchBar.css";

const SearchBar = (props) => {
  const [term, setTerm] = useState("");
  const onChangeInput = (event) => {
    setTerm(event.target.value);
  };

  //   const onSubmitForm = async (event) => {
  //     event.preventDefault();
  //     const response = await youtube.get("/search", {
  //       params: {
  //         part: "snippet",
  //         type: "video",
  //         maxResults: 5,
  //         key: KEY,
  //         q: term,
  //       },
  //     });
  //     setVideos(response.data.items);
  //   };
  const onFormSubmit = (event) => {
    event.preventDefault();
    props.onSubmitForm(term);
  };
  return (
    <>
      <form onSubmit={onFormSubmit} className="search__form">
        <input
          className="search__input"
          onChange={onChangeInput}
          placeholder="search"
          type="text"
          value={term}
        />
      </form>
    </>
  );
};

export default SearchBar;
