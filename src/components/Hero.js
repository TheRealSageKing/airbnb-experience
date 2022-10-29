import React from "react";
import heroBanner from "../images/hero-banner.png";
import Header from "./Header";

export default function Hero() {
  return (
    <section>
      <div className="hero">
        <img src={heroBanner} alt="" className="hero-banner" />
      </div>
      <Header />
    </section>
  );
}
