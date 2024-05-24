import React from 'react'
import { Article } from '../../components'
import "./blog.css"
import { blog01, blog02, blog03, blog04, blog05 } from "./imports.js"
import { Link } from 'react-router-dom';


const Blog = () => {
  return (
    <div className="gpt3__blog section__padding" id='blog'>
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">
          Muitas novidades no ar! Confira tudo em nosso blog.
        </h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupA">
          <Link to="/Publication">
            <Article imgUrl={blog01} date="Jul 05,2022" title="Suno: A Ia que gera músicas e suas possibilidades para a composição" />
          </Link>
        </div>
        <div className="gpt3__blog-container_groupB">
          <Link to="/*">
            <Article imgUrl={blog02} date="Jul 05,2022" title="Inovações  Sonoras: A Fusão Criativa entre Tecnologia e Música" />
          </Link>
          <Link to="/*">
            <Article imgUrl={blog03} date="Jul 05,2022" title="Revolução  Digital na Música: IA e Novos Horizontes Sonoros" />
          </Link>
          <Link to="/*">
            <Article imgUrl={blog04} date="Jul 05,2022" title="Música do  Futuro: Como a Tecnologia Está Transformando a Criação   Musical" />
          </Link>
          <Link to="/*">
            <Article imgUrl={blog05} date="Jul 05,2022" title="Harmonizando   Bits e Batidas: A Evolução da Música com Tecnologia Avançada" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Blog