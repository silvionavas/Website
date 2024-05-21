import React from 'react';
import { Blog, Features, Footer, Header, Possibility, WhatGPT3 } from "./containers";
import { CTA, Brand, Navbar } from "./components";

const NotFound = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
      </div>
      <WhatGPT3 />
      <Footer />
    </div>
  );
};

export default NotFound;
