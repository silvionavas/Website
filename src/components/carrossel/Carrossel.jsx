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

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % teamMembers.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? teamMembers.length - 1 : prevIndex - 1
    );
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
      <h2>Equipe</h2>
      <div className="work--lockup">
        <div className="slider">
          {visibleItems.map((member, index) => (
            <div
              key={index}
              className={`slider--item ${index === 1 ? "slider--item-center" : ""
                }`}
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
            <img className="back-forward"
              width="50"
              height="50"
              src="https://img.icons8.com/ios/50/back--v1.png"
              alt="back--v1"
            />
          </button>
          <button onClick={handleNext} className="slider--next">
            <img className="back-forward"
              width="50"
              height="50"
              src="https://img.icons8.com/ios/50/forward--v1.png"
              alt="forward--v1"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carrossel;
