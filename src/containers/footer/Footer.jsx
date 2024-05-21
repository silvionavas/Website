import React from 'react'
import "./footer.css"
import { Link } from 'react-router-dom';
import logoUrl from "../../assets/logo.svg"

const Footer = () => {
  return (
    <div className="gpt3__footer section__padding">

      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links_logo">
          <div className="gpt3__footer-heading">
            <h5 className="gradient__text">
              Duvidas? Fale Conosco!
            </h5>
          </div>
          <div className="gpt3__footer-button">
            <Link to="/*">
              <h4>Justos pela educação</h4>
            </Link>
          </div>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Links</h4>
          <p>Sobre nós</p>
          <p>Mídias sociais</p>
          <p>Contadores</p>
          <p>Contato</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Empresa</h4>
          <p>Termos e Condições</p>
          <p>Política de Privacidade</p>
          <p>Contato</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Entre em contato</h4>
          <p>Endereço: Av. Senador Feijó, 350 - Vila Matias, Santos - SP, 11015-502</p>
          <p>Telefone: (13) 3227-6003</p>
          <p>Email: TechTune@gmail.com</p>
        </div>

      </div>
      <div className="gpt3__footer-copyrights">
        &copy; 2024 TechTune. Todos os direitos reservados.
      </div>
    </div>
  )
}

export default Footer