import React from "react";
import Particles from "react-particles-js";
import particlesConfig from "../config/particleConfig";

function ParticleBg() {
  return <Particles className="particleBg" params={particlesConfig}></Particles>;
}

export default ParticleBg;
