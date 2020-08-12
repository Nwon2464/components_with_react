import React from "react";
import { Field, reduxForm } from "redux-form";
import FieldData from "./createStreams/FieldData";
import _ from "lodash";
import StreamField from "./createStreams/StreamField";
import { createStream } from "../../actions/index";
import { connect } from "react-redux";
import moment from "moment";

const StreamsCreate = (props) => {
  const renderField = ({ input, label, type, meta: { touched, error } }) => (
    <div>
      <label>{label}</label>

      <div>
        <input {...input} type={type} />
      </div>
    </div>
  );

  const renderFields = () => {
    return _.map(FieldData, ({ label, name, initial }) => {
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
  console.log(props);
  return (
    <div className="ui container">
      <form onSubmit={props.handleSubmit(onSubmit)}>
        {/* <Field
          name="snippet.title"
          type="text"
          component={renderField}
          label="Stream Title"
        />
        <Field
          name="snippet.description"
          type="text"
          component={renderField}
          label="Stream Description"
        />
        <Field
          name="snippet.channelTitle"
          type="text"
          component={renderField}
          label="Channel Title"
        /> */}
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
