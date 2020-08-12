import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchStreams } from "../../actions";
const StreamsDelete = (props) => {
  useEffect(() => {
    props.fetchStreams();
  }, []);

  return <div>StreamsDelete</div>;
};

export default connect(null, { fetchStreams })(StreamsDelete);
