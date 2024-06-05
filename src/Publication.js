import React, { useEffect } from 'react';
import { Blog, Features, Footer, Header, Possibility, WhatGPT3, Midias, Content } from "./containers";
import { CTA, Brand, Navbar, Carrossel, Publi } from "./components";

const Publication = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Publi />
      </div>
      <Blog />
      <Footer />
    </div>
  );
}


export default Publication;
