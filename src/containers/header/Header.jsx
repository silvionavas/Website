import React from 'react'
import "./header.css"
import people from "../../assets/people.png"
import ai from "../../assets/imagem-header.jpg"

const Header = () => {
  return (
    <div className="gpt3__header section_padding" id='home'>
      <div className="gpt3__header-content">
        <h1 className="gradient__text">TechTune: Onde Tecnologia e Música Se Unem para Inspirar.</h1>
        <p>TechTune é um espaço de exploração na intersecção entre tecnologia e música, onde mergulhamos em temas como inteligência artificial na composição, instrumentos digitais e produção musical. Junte-se a nós nessa jornada fascinante para descobrir como a fusão da tecnologia e da música pode gerar harmonia e criatividade ilimitadas.</p>

        {/* <div className="gpt3__header-content__input">
          <input type="email" placeholder="Your Email Address" />
          <button type="button">Get Started</button>
        </div>

        <div className="gpt3__header-content__people">
          <img src={people} alt="people" />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div> */}

      </div>
      <div className="gpt3__header-image">
        <img src={ai} alt="AI" />
      </div>
    </div>
  )
}

export default Header