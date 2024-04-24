import React from 'react'
import "./possibility.css"

import  possibilityImage  from '../../assets/musica-tecnologia.svg'

const Possibility = () => {
  return (
    <div className="gpt3__possibility section__padding" id='possibility'>
        <div className="gpt3__possibility-image">
          <img src={possibilityImage} alt="possibility" />
        </div>
        <div className="gpt3__possibility-container">
        <p><a href="/">Solicite Acesso Antecipado para Começar</a></p>
        <h1>As possibilidades são ilimitadas.</h1>
        <p>Descubra novos horizontes musicais e tecnológicos conosco. A harmonia entre inovação e criatividade redefine a maneira como experimentamos e criamos música.</p>
        </div>
    </div>
  )
}

export default Possibility