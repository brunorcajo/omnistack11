import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./styles.css";
import { FiLogIn } from "react-icons/fi";
import heroesImg from "../../assets/heroes.png";
import LogoImg from "../../assets/logo.svg";

import api from "../../services/api";

const Logon = () => {
  const [id, setId] = useState("");

  const history = useHistory();

  const handleLogin = async e => {
    e.preventDefault();

    try {
      const response = await api.post("sessions", { id });

      localStorage.setItem("ongId", id);
      localStorage.setItem("ongName", response.data.name);

      history.push("/profile");
    } catch (error) {
      alert("Falha no login, tente novamente");
    }
  };

  return (
    <div className="logon-container">
      <section className="form">
        <img src={LogoImg} alt="Be the Hero" />

        <form onSubmit={handleLogin}>
          <h1>Faça seu logon</h1>

          <input
            type="text"
            placeholder="Sua ID"
            value={id}
            onChange={e => {
              setId(e.target.value);
            }}
          />
          <button type="submit" className="button">
            Entrar
          </button>

          <Link to="/register" className="back-link">
            <FiLogIn size={16} color="#e02041" />
            Não tenho cadastro
          </Link>
        </form>
      </section>
      <img src={heroesImg} alt="Be the Hero" />
    </div>
  );
};

export default Logon;
