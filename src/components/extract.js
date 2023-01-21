import styled from "styled-components";
import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Extract({ token, name }) {
  const [balance, setBalance] = React.useState(0);
  const [movs, setMovs] = React.useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    try {
      const promise = axios.get("http://localhost:5000/extract", {
        headers: { Authorization: `Bearer ${token}` },
      });
      promise.then((res) => {
        setMovs(res.data.movements);
        setBalance(res.data.balance);
      });
    } catch (error) {
      return error;
    }
  }, []);

  return (
    <Main>
      <Top>
        <h1>Ola, {name}</h1>
        <ion-icon onClick={() => navigate("/")} name="exit-outline"></ion-icon>
      </Top>

      <Moves>
        {movs.length === 0 ? (
          <None>
            Não há registros de <br /> entrada ou saíd
          </None>
        ) : (
          movs.map((a) => (
            <Line>
              <p>
                <span>{a.date}</span> {a.desc}
              </p>
              {a.type === "saida" ? (
                <span style={{ color: "red" }}>{a.value.toFixed(2)}</span>
              ) : (
                <span style={{ color: "green" }}>{a.value.toFixed(2)}</span>
              )}
            </Line>
          ))
        )}

        <Balance>
          <p>Saldo</p>
          <span>
            {balance < 0 ? (
              <p style={{ color: "red" }}>{balance}</p>
            ) : (
              <p style={{ color: "green" }}>{balance}</p>
            )}
          </span>
        </Balance>
      </Moves>

      <footer>
        <Movement>
          <ion-icon name="add-circle-outline"></ion-icon>
          <p>
            Nova <br />
            entrada
          </p>
        </Movement>
        <Movement>
          <ion-icon name="remove-circle-outline"></ion-icon>

          <p>
            Nova <br />
            saida
          </p>
        </Movement>
      </footer>
    </Main>
  );
}

const Main = styled.div`
  background-color: rgb(140, 16, 190);
  footer {
    display: flex;
    width: 80%;
    margin: auto;
    margin-top: 20px;
    gap: 20px;
    padding-bottom: 30px;
  }
`;
const Top = styled.div`
  margin: auto;
  width: 80vw;
  color: white;
  display: flex;
  font-size: 6vw;
  justify-content: space-between;
  box-sizing: border-box;
  padding-top: 20px;
`;
const Moves = styled.div`
  position: relative;
  height: 75vh;
  width: 80vw;
  background-color: white;
  margin: auto;
  border-radius: 5px;
  margin-top: 30px;
`;
const Movement = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #a328d6;
  margin: auto;
  width: 155px;
  height: 114px;
  padding: 8px;
  font-size: 23px;
  color: white;
  font-weight: bold;
  border-radius: 5px;
  box-sizing: border-box;
`;
const None = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  height: 100%;
  color: #868686;
  font-size: 25px;
`;
const Line = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;

  p {
    color: black;
    span {
      color: #c6c6c6;
    }
  }
  span {
    color: red;
  }
`;
const Balance = styled.div`
  position: absolute;
  bottom: 5px;
  left: 1px;
  display: flex;
  justify-content: space-between;
  width: 75vw;
  font-size: 25px;
  color: black;
  p {
    font-weight: bold;
  }
`;
