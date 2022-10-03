import React from "react";
import * as S from "./components/styles";

export default function Props({ nome, idade, texto, children }) {
  return (
    <>
      <p>Oi, meu nome é {nome}</p>
      <p>Eu tenho {idade} anos</p>
      {children}
      <p>{texto}</p>
    </>
  );
}
