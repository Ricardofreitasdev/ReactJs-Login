import React from "react";
import { Field, ErrorMessage } from "formik";

function Input(props) {
  const placeholder = `Digite o seu ${props.title}`;

  return (
    <div>
      <Field name={props.name} type={props.name} placeholder={placeholder} />
      <span>
        <ErrorMessage name={props.name} />
      </span>
    </div>
  );
}

export default Input;
