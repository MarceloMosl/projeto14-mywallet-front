import styled from "styled-components";
import { useNavigate, Link } from "react-router-dom";
import React from "react";
import axios from "axios";

export default function Signup() {
  const [user, setUser] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confPassword, setConfPassword] = React.useState("");
  const navigate = useNavigate();

  async function newUser(a) {
    a.preventDefault();

    try {
      await axios.post(
        "https://projeto14-mywallet-back-wj2e.onrender.com/cadastro",
        {
          user,
          email,
          password,
          confPassword,
        }
      );
      navigate("/");
    } catch (error) {
      console.log(error);
      return alert(error.response.data);
    }
  }

  return (
    <Log>
      <form onSubmit={(event) => newUser(event)}>
        <h1>MyWallet</h1>

        <input
          type={"text"}
          onChange={(event) => setUser(event.target.value)}
          placeholder="Nome"
          required={true}
        ></input>
        <input
          type={"email"}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="E-mail"
          required={true}
        ></input>
        <input
          type={"password"}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="Senha"
          required={true}
        ></input>
        <input
          type={"password"}
          onChange={(event) => setConfPassword(event.target.value)}
          placeholder="Confirme a Senha"
          required={true}
        ></input>
        <button type={"submit"}>Cadastrar</button>
        <Link data-test="signup-link" to="/">
          Já tem uma conta? Entre agora!
        </Link>
      </form>
    </Log>
  );
}
const Log = styled.div`
  background-color: rgb(140, 16, 190);
  display: flex;

  height: 100vh;
  form {
    display: flex;
    flex-direction: column;
    margin: auto;
    text-align: center;
    color: white;
    gap: 10px;
    h1 {
      margin-bottom: 20px;
      font-size: 34px;
    }
    input {
      border: none;
      width: 326px;
      height: 58px;
      border-radius: 5px;
    }
    button {
      border: none;
      width: 327px;
      height: 58px;
      margin: auto;
      background-color: #a328d6;
      color: white;
      border-radius: 5px;
    }
    a {
      margin-top: 30px;
      text-decoration: none;
      color: white;
    }
  }
`;
