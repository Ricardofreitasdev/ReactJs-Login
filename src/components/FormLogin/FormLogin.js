import React from "react";
import { Formik, Form } from "formik";
import { Link } from "react-router-dom";
import InputPassword from "../InputPassword/InputPassword";
import schemaLogin from "./schemaLogin";
import Input from "../Input/input";
import { TailSpin } from "react-loader-spinner";
import useUserContext from "../../hooks/useUserContext";

export default function FormLogin() {
  const { Login, loginLoading } = useUserContext();

  async function handleLogin(values, actions) {
    actions.resetForm();
    await Login(values);
  }

  return (
    <div className="form-login">
      <Formik
        validationSchema={schemaLogin}
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={handleLogin}
      >
        <Form>
          <Input name="email" title="e-mail" />
          <InputPassword name="password" />
          {loginLoading ? (
            <button className="form-login__button" type="submit">
              <TailSpin color="#fff" height={30} width={30} />
            </button>
          ) : (
            <button className="form-login__button" type="submit">
              Entrar
            </button>
          )}
          <span>
            Não tem conta? <Link to="/register">Registre-se</Link>
          </span>
        </Form>
      </Formik>
    </div>
  );
}
