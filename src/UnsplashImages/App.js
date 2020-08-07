import React, { useState } from "react";
import axios from "axios";
import ImageList from "./ImageList";
import SearchBar from "./SearchBar";

const App = () => {
  const [data, setData] = useState([]);
  const onSubmit = async (term) => {
    const {
      data: { results },
    } = await axios.get("https://api.unsplash.com/search/photos", {
      headers: {
        Authorization: `Client-ID f0yuum2U04b2gt0z5nj5KZ4K3WPwEw1ywSBGi26uiIE`,
      },
      params: { query: term },
    });
    setData(results);
  };
  return (
    <div>
      <SearchBar onSubmit={onSubmit} />
      <ImageList data={data} />
    </div>
  );
};

export default App;




// ------------------------------------------this is Class based Component -----
// class App extends React.Component {
//   state = {
//     images: [],
//   };
//   submitForm = async (term) => {
//     const {
//       data: { results },
//     } = await unsplash.get("/search/photos", {
//       params: { query: term },
//     });
//     console.log(results);
//     this.setState({ images: results });
//   };
//   render() {
//     return (
//       <div>
//         <SearchBar submitForm={this.submitForm} />
//         <ImageList images={this.state.images} />
//       </div>
//     );
//   }
// }

// export default App;
