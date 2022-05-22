import React from "react";
import { Formik, Form } from "formik";
import { Link, useHistory } from "react-router-dom";
import InputPassword from "../InputPassword/InputPassword";
import schemaRegister from "./schemaRegister";
import Input from "../Input/input";
import { TailSpin } from "react-loader-spinner";
import useUserContext from "../../hooks/useUserContext";

export default function FormRegister() {
  const history = useHistory();
  const { Create, createLoading } = useUserContext();

  async function handleRegister(values, actions) {
    actions.resetForm();
    await Create(values);
  }

  return (
    <div className="form-register">
      <Formik
        validationSchema={schemaRegister}
        initialValues={{
          name: "",
          email: "",
          password: "",
        }}
        onSubmit={handleRegister}
      >
        <Form>
          <Input name="name" title="nome" />
          <Input name="email" title="email" />
          <InputPassword name="password" />
          {createLoading ? (
            <button className="form-register__button" type="submit">
              <TailSpin color="#fff" height={30} width={30} />
            </button>
          ) : (
            <button className="form-register__button" type="submit">
              Entrar
            </button>
          )}
          <span>
            Já possui conta? <Link to="/login">Login</Link>
          </span>
        </Form>
      </Formik>
    </div>
  );
}
