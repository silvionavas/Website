import React from 'react'
import "./header.css"
import people from "../../assets/people.png"
import ai from "../../assets/ai.png"
import possibilityImage from '../../assets/musica-tecnologia.svg'
import Banner from '../../assets/TechTuneBanner.jpg'

const Header = () => {
  return (
    <div className="gpt3__header section_padding" id='home'>
      <div className="gpt3__header-content">
        <h1 className="gradient__text">TechTune: Compromisso com a Informação e Tecnologia para Inspirar.</h1>
        <p>TechTune é um espaço de exploração de tecnologias e inovações, como inteligência artificial, ferramentas modernas e digitais e novidades do mercado de trabalho. Junte-se a nós nessa jornada fascinante .</p>
      </div>
      <div className="gpt3__header-image">
        <img src={Banner} alt="AI" />
      </div>
    </div>
  )
}

export default Header