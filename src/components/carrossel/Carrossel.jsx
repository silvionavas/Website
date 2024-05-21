import React, { useState } from 'react';
import imageRicardo from "../../assets/Ricardo.jpg";
import imageIgor from "../../assets/Igor.PNG";
import imageThomas from "../../assets/Thomas.PNG";
import imageDennis from "../../assets/Dennis.PNG";
import imageSilvio from "../../assets/Silvio.PNG";
import imageLucas from "../../assets/Lucas.PNG";
import "./carrossel.css";

const Carrossel = () => {
  const teamMembers = [
    { name: "Silvio", image: imageSilvio },
    { name: "Ricardo", image: imageRicardo },
    { name: "Igor", image: imageIgor },
    { name: "Thomas", image: imageThomas },
    { name: "Dennis", image: imageDennis },
    { name: "Lucas", image: imageLucas },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const handleNext = () => {
    setAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % teamMembers.length);
      setAnimating(false);
    }, 500); // tempo da animação em milissegundos
  };

  const handlePrev = () => {
    setAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? teamMembers.length - 1 : prevIndex - 1
      );
      setAnimating(false);
    }, 500); // tempo da animação em milissegundos
  };

  const getVisibleItems = () => {
    const visibleItems = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % teamMembers.length;
      visibleItems.push(teamMembers[index]);
    }
    return visibleItems;
  };

  const visibleItems = getVisibleItems();

  return (
    <div className="work">
      <h2 className="gpt3__header-content gradient__text"><h1 className="gradient__text">TechTune: Onde Tecnologia e Música Se Unem para Inspirar.</h1>
        <p>TechTune é um espaço de exploração na intersecção entre tecnologia e música, onde mergulhamos em temas como inteligência artificial na composição, instrumentos digitais e produção musical. Junte-se a nós nessa jornada fascinante para descobrir como a fusão da tecnologia e da música pode gerar harmonia e criatividade ilimitadas.</p><h1 className="gpt3__header-content gradient__text integrantes">Integrantes</h1></h2>
      <div className="work--lockup">
        <div className={`slider ${animating ? 'animating' : ''}`}>
          {visibleItems.map((member, index) => (
            <div
              key={index}
              className={`slider--item ${index === 1 ? "slider--item-center" : ""}`}
            >
              <div className="slider--item-image">
                <img className="img" src={member.image} alt={member.name} />
              </div>
              <p className="slider--item-title">{member.name}</p>
            </div>
          ))}
        </div>
        <div className="slider--controls">
          <button onClick={handlePrev} className="slider--prev">
            <img width="24" height="24" src="https://img.icons8.com/material-outlined/24/back--v1.png" alt="back--v1" />
          </button>
          <button onClick={handleNext} className="slider--next">
            <img width="24" height="24" src="https://img.icons8.com/material-outlined/24/forward.png" alt="forward" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carrossel;
