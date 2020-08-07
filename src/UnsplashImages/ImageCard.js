import React, { useState, useEffect, useRef } from "react";

const ImageCard = (props) => {
  const {
    id,
    description,
    urls: { regular },
  } = props.eachImage;
  const [spans, setSpans] = useState(0);
  const imageRef = useRef();
  
  
  useEffect(() => {
    imageRef.current.addEventListener("load", loadImage);
  }, []);
  const loadImage = () => {
    const heights = imageRef.current.clientHeight;
    const spans = Math.ceil(heights / 10);
    setSpans(spans);
  };

  return (
    <div style={{ gridRowEnd: `span ${spans}` }}>
      <img ref={imageRef} src={regular} alt={description} />
    </div>
  );
};

export default ImageCard;





// --------------------this is class based Component ----------------------
// import React, { Component } from "react";

// export default class ImageCard extends Component {
//   constructor(props) {
//     super(props);
//     this.imageRef = React.createRef();

//     this.state = {
//       spans: 0,
//     };
//   }
//   componentDidMount() {
//     this.imageRef.current.addEventListener("load", this.loadImage);
//   }
//   loadImage = () => {
//     const heights = this.imageRef.current.clientHeight;
//     const spans = Math.ceil(heights / 10);
//     this.setState({
//       spans,
//     });
//   };

//   render() {
//     console.log(this.state.spans);
//     const {
//       description,
//       urls: { regular },
//     } = this.props.image;
//     return (
//       <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
//         <img ref={this.imageRef} alt={description} src={regular} />
//       </div>
//     );
//   }
// }
