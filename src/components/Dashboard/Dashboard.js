import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { GET_USER } from "../../GraphQL/Queries";
import { useLazyQuery } from "@apollo/client";
import useUserContext from "../../hooks/useUserContext";
import { TailSpin } from "react-loader-spinner";

export default function Dashboard() {
  const { token, Logout } = useUserContext();

  const [getUser, { loading }] = useLazyQuery(GET_USER);
  const [loggedUser, setloggedUser] = useState([]);
  const history = useHistory();

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
    <div className="dashboard">
      {loading ? (
        <TailSpin color="#fff" height={30} width={30} />
      ) : (
        <h2>Olá, {loggedUser.name}, curte Queen? </h2>
      )}
      <div className="dashboard__video">
        <iframe
          src="//www.youtube.com/embed/KXw8CRapg7k?autoplay=1&mute=1"
          width="560"
          height="315"
          name="youtube embed"
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="vídeo queen"
          frameBorder="0"
        ></iframe>
      </div>
      <button onClick={() => Logout()}>Deseja sair?</button>
    </div>
  );
}
