import React, { useState } from "react";
import { Field, ErrorMessage } from "formik";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { IconContext } from "react-icons";

function InputPassword(props) {
  const [showPass, setshowPass] = useState(true);

  const changeTypeInput = (e) => {
    e.preventDefault();
    setshowPass(!showPass);
  };

  return (
    <div className="input-password">
      <Field
        name={props.name}
        type={showPass ? "password" : "text"}
        placeholder="Digite a sua senha"
      />
      <IconContext.Provider value>
        <button
          aria-label="ver senha"
          className="input__password--change"
          onClick={changeTypeInput}
        >
          {showPass ? <FiEye /> : <FiEyeOff />}
        </button>
      </IconContext.Provider>
      <span className="msg__alert">
        <ErrorMessage name={props.name} />
      </span>
    </div>
  );
}

export default InputPassword;
