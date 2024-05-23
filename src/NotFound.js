import React from 'react';
import { Blog, Features, Footer, Header, Possibility, WhatGPT3 } from "./containers";
import { CTA, Brand, Navbar, Carrossel } from "./components";

const NotFound = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
      </div>
      {/* <WhatGPT3 /> */}
      <h1>Hello</h1>
      <Carrossel />
      <Blog />
      <Footer />
    </div>
  );
};

export default NotFound;
