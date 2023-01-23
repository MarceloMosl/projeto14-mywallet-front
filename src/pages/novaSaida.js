import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function NovaSaida({ token }) {
  const navigate = useNavigate();
  const [value, setValue] = React.useState(0);
  const [desc, setDesc] = React.useState("");

  function newMov(event) {
    event.preventDefault();
    const promise = axios.post(
      "https://projeto14-mywallet-back-wj2e.onrender.com/extract",
      { type: "saida", value, desc },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );

    promise.then(() => navigate("/home"));
    promise.catch((err) => alert(err.response.data));
  }

  return (
    <Main>
      <h1>Nova saida</h1>
      <form onSubmit={(event) => newMov(event)}>
        <input
          type={"number"}
          onChange={(event) => setValue(Number(event.target.value))}
          placeholder="Valor"
          required={true}
        ></input>
        <input
          type="text"
          onChange={(event) => setDesc(event.target.value)}
          placeholder="Descrição"
          required={true}
        ></input>
        <button type="submit">Salvar saida</button>
      </form>
    </Main>
  );
}
const Main = styled.div`
  background-color: rgb(140, 16, 190);
  height: 100vh;
  color: #000000;

  h1 {
    font-size: 26px;
    color: white;
    padding: 15px;
    font-weight: 700;
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 20px;
    padding-top: 0;

    input {
      box-sizing: border-box;
      height: 58px;
      font-size: 20px;
      border-radius: 5px;
      border: none;
    }
    button {
      border: none;
      height: 46px;
      background-color: #a328d6;
      color: white;
      font-size: 20px;
      border-radius: 5px;
    }
  }
`;
