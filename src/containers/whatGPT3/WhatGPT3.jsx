import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="O que é TechTune?" text="TechTune é um projeto que explora a interseção emocionante entre tecnologia e    música, criando experiências inovadoras e inspiradoras. É um portal para descobrir e explorar o futuro emocionante da   criação musical e da inovação tecnológica." />
    </div>

    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">As possibilidades estão além da sua imaginação.</h1>
       <p>Explore o Portal</p>
    </div>
    
    <div className="gpt3__whatgpt3-container">
      <Feature title="Inteligência Artificial na Música" text="Descubra como a inteligência artificial está revolucionando a    criação musical e expandindo os horizontes da expressão sonora." />
      <Feature title="Instrumentos Digitais" text="Conheça os instrumentos musicais digitais que estão moldando o futuro da     produção musical e da performance." />
      <Feature title="Educação Musical" text="TechTune acredita no poder da música para transformar vidas e está comprometido em    promover a educação musical de forma inovadora e acessível." />
    </div>
  </div>
);

export default WhatGPT3;