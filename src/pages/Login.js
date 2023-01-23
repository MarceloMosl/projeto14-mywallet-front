import styled from "styled-components";
import axios from "axios";
import React from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Login({ setToken, setName }) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigate = useNavigate();

  async function logar(a) {
    a.preventDefault();

    try {
      const promise = await axios.post(
        "https://projeto14-mywallet-back-wj2e.onrender.com/login",
        {
          email,
          password,
        }
      );
      setToken(promise.data.token);
      setName(promise.data.name);
      navigate("/home");
    } catch (error) {
      return console.log(error);
    }
  }
  return (
    <Log>
      <form onSubmit={(event) => logar(event)}>
        <h1>MyWallet</h1>

        <input
          onChange={(event) => setEmail(event.target.value)}
          type="email"
          placeholder="E-mail"
          required={true}
        ></input>
        <input
          onChange={(event) => {
            setPassword(event.target.value);
          }}
          type="password"
          placeholder="Senha"
          required={true}
        ></input>

        <button type={"submit"}>Entrar</button>
        <Link data-test="signup-link" to="/cadastro/">
          Não tem cadastro ainda? Cadastre-se!
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
      font-family: "Saira Stencil One", cursive;
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
