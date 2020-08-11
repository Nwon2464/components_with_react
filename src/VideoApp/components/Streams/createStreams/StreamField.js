import React from "react";

export default ({ input, label, meta: { touched, error } }) => {
  console.log(touched);
  return (
    <div className="field">
      <label>{label}</label>
      <input {...input} />
      <div>{touched && error}</div>
    </div>
  );
};

//<div className={touched && error ? "ui pointing red basic label" : null}>
