import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import "./carrossel.css"
import logo from "../../assets/logo.svg"
import { RiMenu3Line, RiCloseLine } from "react-icons/ri"
import imageRicardo from "../../assets/Ricardo.jpg"
import imageIgor from "../../assets/Igor.PNG"
import imageThomas from "../../assets/Thomas.PNG"
import imageDennis from "../../assets/Dennis.PNG"
import imageSilvio from "../../assets/Silvio.PNG"

const Carrossel = () => {
  return (
    <div class="work">
      <h2>Equipe</h2>
      <div class="work--lockup">
        <ul class="slider">
          <li class="slider--item slider--item-left">
            <div class="slider--item-image">
              <img class="img" src={imageSilvio} alt="Silvio" />
            </div>
            <p class="slider--item-title">Silvio</p>
          </li>
          <li class="slider--item slider--item-left">
            <div class="slider--item-image">
              <img class="img" src={imageRicardo} alt="Ricardo" />
            </div>
            <p class="slider--item-title">Ricardo</p>
          </li>
          <li class="slider--item slider--item-center">
            <div class="slider--item-image">
              <img class="img" src={imageIgor} alt="Igor" />
            </div>
            <p class="slider--item-title">Igor</p>
          </li>
          <li class="slider--item slider--item-right">
            <div class="slider--item-image">
              <img class="img" src={imageThomas} alt="Thomas" />
            </div>
            <p class="slider--item-title">Thomas</p>
          </li>
          <li class="slider--item slider--item-right1">
            <div class="slider--item-image">
              <img class="img" src={imageDennis} alt="Dennis" />
            </div>
            <p class="slider--item-title">Dennis</p>
          </li>
        </ul>
        <div class="slider--prev">
        </div>
        <div class="slider--next">
        </div>
      </div>
    </div>
  )
}

export default Carrossel