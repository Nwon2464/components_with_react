import React from "react";
import { Field, reduxForm } from "redux-form";
import FieldData from "./createStreams/FieldData";
import _ from "lodash";
import StreamField from "./createStreams/StreamField";
import { createStream } from "../../actions/index";
import { connect } from "react-redux";
import moment from "moment";

const StreamsCreate = (props) => {
  const renderFields = () => {
    return _.map(FieldData, ({ label, name }) => {
      return (
        <Field
          key={name}
          type="text"
          label={label}
          name={name}
          component={StreamField}
        />
      );
    });
  };
  const onSubmit = (formValues) => {
    props.createStream(formValues);
  };
  return (
    <div className="ui container">
      <form onSubmit={props.handleSubmit(onSubmit)}>
        {renderFields()}
        <button className="ui primary button">Submit</button>
      </form>
    </div>
  );
};

const validate = (formValues) => {
  const error = {};

  _.each(FieldData, ({ name }) => {
    if (!formValues[name]) {
      error[name] = `You must provide a ${name}😒`;
    }
  });

  return error;
};
const formWrapped = reduxForm({
  validate,
  form: "CreateStreams",
})(StreamsCreate);

export default connect(null, { createStream })(formWrapped);
