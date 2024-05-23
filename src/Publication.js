import React, { useEffect } from 'react';
import { Blog, Features, Footer, Header, Possibility, WhatGPT3 } from "./containers";
import { CTA, Brand, Navbar, Carrossel } from "./components";

const Publication = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        {/* <Header /> */}
        <WhatGPT3 />
      </div>
      {/* <Features /> */}
      {/* <CTA /> */}
      <Carrossel />
      <Blog />
      <Footer />
    </div>
  );
}


export default Publication;
