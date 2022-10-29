import React from "react";
import Card from "./components/Card";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import data from './data';

export default function App() {
  const cards = data.map((exp, idx) => (
    <Card
    key={exp.id}
    img={exp.coverImg}
    title={exp.title}
    price={exp.price}
    location={exp.location}
    rating={exp.stats.rating}
    reviewCount={exp.stats.reviewCount}
    openSpot={exp.openSpots}
    />
  ));
  return (
    //Navbar
    //Hero
    //Card Slide
    

    <div className="app">
      <Navbar />
      <Hero />
      <section className="cards-list">
      {cards}
      </section>
    </div>
  );
}
