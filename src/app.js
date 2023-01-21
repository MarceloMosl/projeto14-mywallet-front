import { createGlobalStyle } from "styled-components";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/singup";
import Extract from "./components/extract";
import NovaEntrada from "./components/novaEntrada";
import NovaSaida from "./components/novaSaida";

function App() {
  const [token, setToken] = React.useState("");
  const [name, setName] = React.useState("");
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route
          path="/"
          element={<Login setToken={setToken} setName={setName} />}
        />
        <Route path="/cadastro" element={<Signup />} />
        <Route path="/home" element={<Extract token={token} name={name} />} />
        <Route path="/nova-entrada" element={<NovaEntrada token={token} />} />
        <Route path="/nova-saida" element={<NovaSaida token={token} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

const GlobalStyle = createGlobalStyle` 

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}


`;
