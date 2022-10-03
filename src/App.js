import React, { Component } from "react";
import Props from "./Props";
import * as S from "./components/styles";

export default class App extends Component {
  render() {
    return (
      <>
        <S.GlobalStyle />
        <h1>Desafio Props</h1>

        <Props
          nome="Rafael Navarro"
          idade="27"
          texto="No momento estou estudando React e suas tecnologias"
        >
          <h1>Aprendendo sobre Props</h1>
        </Props>
      </>
    );
  }
}
