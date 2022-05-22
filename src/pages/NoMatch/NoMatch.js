import React from "react";
import { Link } from "react-router-dom";
import img from "../../assets/img/404.gif";

export default function NoMatch() {
  return (
    <div className="page-404">
      <Link to="/login">Voltar</Link>
      <h1>404</h1>
      <img src={img} alt="404"></img>
    </div>
  );
}
