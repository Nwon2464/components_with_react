import React from "react";
import { connect } from "react-redux";
const StreamsEdit = (props) => {
  console.log(props.streams);
  return <div>StreamsEdit</div>;
};

const mapStateToProps = (state, ownProps) => {
  console.log(ownProps);
  return {
    streams: state.streams[ownProps.match.params.id],
  };
};
export default connect(mapStateToProps)(StreamsEdit);
