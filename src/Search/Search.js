import React, { useState, useEffect } from "react";
import axios from "axios";
const Search = () => {
  const [term, setTerm] = useState("programming");
  const [results, setResults] = useState([]);
  //   useEffect(() => {
  //     const fetchData = async () => {
  //       const {
  //         data: {
  //           query: { search },
  //         },
  //       } = await axios.get(
  //         `https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch=${term}&origin=*`
  //       );
  //       setResults(search);
  //     };

  //     if (term && !results.length) {
  //       fetchData();
  //     } else {
  //       const timeoutId = setTimeout(() => {
  //         if (term) {
  //           fetchData();
  //         }
  //       }, 1000);

  //       return () => {
  //         clearTimeout(timeoutId);
  //       };
  //     }
  //   }, [term]);
  const [debounceTerm, setDebounceTerm] = useState(term);
  useEffect(() => {
    const timeID = setTimeout(() => {
      console.log("1");
      setDebounceTerm(term);
    }, 2000);
    return () => {
      console.log("clean up");
      clearTimeout(timeID);
    };
  }, [term]);
  useEffect(() => {
    const fetchData = async () => {
      const {
        data: {
          query: { search },
        },
      } = await axios.get(
        `https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch=${debounceTerm}&origin=*`
      );
      if (term) {
        setResults(search);
      }
    };
    fetchData();
  }, [debounceTerm]);

  console.log(debounceTerm);
  console.log(term);
  const onInputChange = (e) => {
    setTerm(e.target.value);
  };

  const renderResults = results.map((result) => {
    return (
      <div key={result.pageid} className="item">
        <div className="right floated content">
          <a
            className="ui button"
            href={`https://en.wikipedia.org?curid=${result.pageid}`}
          >
            Go
          </a>
        </div>
        <div className="content">
          <div className="header">{result.title}</div>

          <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
        </div>
      </div>
    );
  });
  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label htmlFor="search">Enter Search Term</label>
          <input
            className="input"
            id="search"
            value={term}
            onChange={onInputChange}
            type="text"
          />
        </div>
      </div>
      <div className="ui celled list">{renderResults}</div>
    </div>
  );
};

export default Search;
