import React, { useEffect } from 'react';
import { Blog, Features, Footer, Header, Possibility, WhatGPT3, Midias, Content } from "./containers";
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
        {/* <WhatGPT3 /> */}
        {/* <Midias /> */}
        <Content />

      </div>
      {/* <Features /> */}
      {/* <CTA /> */}
      {/* <Carrossel /> */}
      <Blog />
      <Footer />
    </div>
  );
}


export default Publication;
