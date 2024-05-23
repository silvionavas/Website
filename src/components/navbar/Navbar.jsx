import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import "./navbar.css"
import logo from "../../assets/logo.svg"
import logoTechtune from "../../assets/tecjTune.jpg"
import { RiMenu3Line, RiCloseLine } from "react-icons/ri"

const Menu = () => (
  <>
    <Link className="navbar-link" to="/">Home</Link>
    <Link className="navbar-link" to="/*">About</Link>
    <Link className="navbar-link" to="/Publication">Publication</Link>
    <Link className="navbar-link" to="/*">Projetos</Link>
    <Link className="navbar-link" to="/*">Contato</Link>
    <p><a href="https://sites.google.com/view/techtunepodcast/in%C3%ADcio" target='_blank'>Podcast</a></p>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  return (
    <div className="gpt3__navbar">
      <Link to="/Publication">
        <img className='logo-techtune' src={logoTechtune} alt="GPT3 Logo" />
      </Link>
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          {/* <img src={logo} alt="GPT3 Logo" /> */}
        </div>
        <div className="gpt3__navbar-links_container">
          <Menu />
        </div>
        <div className="gpt3__navbar-wrapper">

          <div className="gpt3__navbar-sign">
            <p>Entrar</p>
            <button type='button'>Registrar-se</button>
          </div>
          {/* Responsive part for mobiles devices */}
          {/* hamburger menu */}
          <div className="gpt3__navbar-menu">
            {toggleMenu
              ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
              : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
            }
            {toggleMenu &&
              <div className="gpt3__navbar-menu_container scale-up-center">
                <div className="gpt3__navbar-menu_container-links">
                  <Menu />
                </div>
                <div className="gpt3__navbar-menu_container-links-sign">
                  <p>Sign in</p>
                  <button type='button'>Sign up</button>
                </div>
              </div>
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar