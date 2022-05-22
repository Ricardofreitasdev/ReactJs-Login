import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { GET_USER } from "../../GraphQL/Queries";
import { useLazyQuery } from "@apollo/client";
import useUserContext from "../../hooks/useUserContext";

export default function Dashboard() {
  const { token, remove } = useUserContext();

  const [getUser, { loading }] = useLazyQuery(GET_USER);
  const [loggedUser, setloggedUser] = useState([]);
  const history = useHistory();

  const logout = () => {
    remove();
    history.push("/login");
  };

  async function User() {
    try {
      const response = await getUser({
        variables: {
          token,
        },
      });
      setloggedUser(response.data.user);
    } catch (error) {
      history.push("/login");
    }
  }

  useEffect(() => {
    User();
  }, [token]);

  return (
    <div>
      {loading ? (
        "carregando....."
      ) : (
        <div>{loggedUser.name}, seja bem vindo</div>
      )}
      <button onClick={() => logout()}>deslogar</button>
    </div>
  );
}
