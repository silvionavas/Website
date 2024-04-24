import React from 'react'
import { Feature } from '../../components'
import "./features.css"

const featuresData = [
  {
    "title": "Explorando a Harmonia Digital",
    "text": "Exploramos a emocionante convergência entre música e tecnologia, mostrando como a harmonia digital está revolucionando nossa experiência musical."
  },
  {
    "title": "Inovação Sonora",
    "text": "Inovação sonora, tendências em instrumentos musicais digitais, produção de áudio e tecnologias da música."
  },
  {
    "title": "Compondo o Futuro",
    "text": "Como a tecnologia está revolucionando a composição musical, desde IA na criação de melodias até novas ferramentas de produção."
  },
  {
    "title": "A Fusão entre Arte e Digital",
    "text": "Encontro entre a arte da música e o mundo digital. Explore conosco como a tecnologia está ampliando os limites da expressão musical e criando novas formas de interação com o som."
  }
]


const Features = () => {
  return (
    <div className="gpt3__features section__padding" id="features">
      <div className="gpt3__features-heading">
      <h1 className="gradient__text">Música e Tecnologia: Harmonia Inovadora ao seu Alcance. Explore o Futuro Sonoro com TechTune.</h1>
      <p>Seja um dos Primeiros a se Conectar à Revolução Musical Digital.</p>
      </div>
      <div className="gpt3__features-container">
        <div>
        {featuresData.map((item, index) =>
          <Feature title={item.title} text={item.text} key={item.title + index}/>
        )}
        </div>
      </div>
    </div>
  )
}

export default Features