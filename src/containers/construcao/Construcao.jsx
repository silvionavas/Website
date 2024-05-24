import React from 'react'

import "./construcao.css";
import Imagem from "../../assets/Pedreiro.png";


const Construcao = () => {
  return (
    <div className="work">
      <h2 className=" center gpt3__header-content gradient__text"><h1 className="gradient__text">Em construção</h1>
        <img className='center' src={Imagem} alt="Obras" />
        <p className='center'>Estamos fazendo o melhor para produzir um conteudo relevante para nosso publico. </p></h2>
    </div>
  )
}

export default Construcao;