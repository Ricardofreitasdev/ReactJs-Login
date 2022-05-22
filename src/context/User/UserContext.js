import { useMutation } from "@apollo/client";
import React, { createContext } from "react";
import { toast } from "react-toastify";
import { CREATE_USER, VALID_USER_MUTATION } from "../../GraphQL/Mutations";
import useStorage from "../../hooks/useStorage";
import { useHistory } from "react-router-dom";

const initialValues = {
  token: null,
  Login: () => {},
  Create: () => {},
  IsLogged: () => {},
};

export const UserContext = createContext(initialValues);

export function UserProvider({ children }) {
  const [token, setToken, remove] = useStorage("@token");
  const [valid, { loading: loginLoading }] = useMutation(VALID_USER_MUTATION);
  const [createUser, { loading: createLoading }] = useMutation(CREATE_USER);

  const history = useHistory();

  async function Login(values) {
    const { email, password } = values;

    try {
      const response = await valid({
        variables: {
          email,
          password,
        },
      });

      if (response.data) {
        toast.success("Logado com sucesso");
        setToken(response.data.valid.token);

        setTimeout(() => {
          history.push("/admin");
        }, 1000);
      }
    } catch (error) {
      if (error.message === "Failed to fetch") {
        toast.error("algo deu errado, tente novamente mais tarde");
        return;
      }

      toast.error(error.message);
    }
  }

  async function Create(values) {
    const { email, password, name } = values;

    try {
      const response = await createUser({
        variables: {
          email,
          password,
          name,
        },
      });

      if (response.data) {
        toast.success("Usuário criado com sucesso");
        setToken(response.data.createUser.token);

        setTimeout(() => {
          history.push("/admin");
        }, 1000);
      }
    } catch (error) {
      if (error.message === "Failed to fetch") {
        toast.error("algo deu errado, tente novamente mais tarde");
        return;
      }

      toast.error(error.message);
    }
  }

  function IsLogged() {
    if (token) {
      toast.success("você esta já esta logado, redirecinando...");
      setTimeout(() => {
        return history.push("/admin");
      }, 2000);
    }
  }

  return (
    <UserContext.Provider
      value={{
        Login,
        IsLogged,
        token,
        remove,
        Create,
        createLoading,
        loginLoading,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
