import styled from "styled-components";
import axios from "axios";
import React from "react";

export default function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  async function logar(a) {
    a.preventDefault();
    console.log(email, password);

    try {
      const promise = await axios.post("http://localhost:5000/login", {
        email,
        password,
      });
      console.log(promise);
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
        <p onClick={() => alert("Calma ai po")}>Primeira vez? Cadastre-se</p>
      </form>
    </Log>
  );
}
const Log = styled.div`
  background-color: purple;
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
    p {
      margin-top: 30px;
    }
  }
`;
