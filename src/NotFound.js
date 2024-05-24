import React from 'react';
import { Blog, Features, Footer, Header, Possibility, WhatGPT3, Construcao } from "./containers";
import { CTA, Brand, Navbar, Carrossel } from "./components";

const NotFound = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Construcao />
      </div>
      {/* <WhatGPT3 /> */}
      <h1>Hello</h1>
      <Blog />
      <Footer />
    </div>
  );
};

export default NotFound;
