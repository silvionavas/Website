// Blog.js
import React from 'react';
import { Article } from '../../components';
import './blog.css';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import { Link } from 'react-router-dom';

const Blog = () => {
  const articles = [
    { id: '1', imgUrl: blog01, date: 'Jul 05, 2022', title: 'Suno: A IA que gera músicas e suas possibilidades para a composição' },
    { id: '2', imgUrl: blog02, date: 'Jul 05, 2022', title: 'Inovações Sonoras: A Fusão Criativa entre Tecnologia e Música' },
    { id: '3', imgUrl: blog03, date: 'Jul 05, 2022', title: 'Revolução Digital na Música: IA e Novos Horizontes Sonoros' },
    { id: '4', imgUrl: blog04, date: 'Jul 05, 2022', title: 'Música do Futuro: Como a Tecnologia Está Transformando a Criação Musical' },
    { id: '5', imgUrl: blog05, date: 'Jul 05, 2022', title: 'Harmonizando Bits e Batidas: A Evolução da Música com Tecnologia Avançada' },
  ];

  return (
    <div className="gpt3__blog section__paddingBlog" id="blog">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">Muitas novidades no ar! Confira tudo em nosso blog.</h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupA">
          <Link to={`/publication/1`}>
            <Article {...articles[0]} />
          </Link>
        </div>
        <div className="gpt3__blog-container_groupB">
          {articles.slice(1).map(article => (
            <Link key={article.id} to={`/publication/${article.id}`}>
              <Article {...article} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blog;
