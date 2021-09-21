import React, { useEffect } from "react";

import ParticleBg from "./ParticleBg";
import Header from "./Header";
import Footer from "./Footer";
import Mint from "./Mint";

export default function App() {
  return (
    <>
      <ParticleBg />
      <div className="wrapper">
          <div className="subWrapper">
            <Header />
            <Mint />
            <Footer />
          </div>
      </div>
    </>
  );
}
