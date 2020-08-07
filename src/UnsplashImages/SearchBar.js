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

//---------this is class based component -----------
// import React, { Component } from "react";

// class SearchBar extends Component {
//   state = {
//     term: "",
//   };
//   onSubmitForm = (event) => {
//     event.preventDefault();
//     this.props.submitForm(this.state.term);
//   };
//   onChangeTerm = (event) => {
//     this.setState({
//       term: event.target.value,
//     });
//   };
//   render() {
//     return (
//       <div>
//         <form onSubmit={this.onSubmitForm}>
//           <label htmlFor="search">Search:</label>
//           <input
//             type="text"
//             id="search"
//             value={this.state.term}
//             onChange={this.onChangeTerm}
//           />
//         </form>
//       </div>
//     );
//   }
// }

// export default SearchBar;
