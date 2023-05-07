import React from "react";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import { Body, Discription, Partner, Testimonial } from "../Layout/Body";

function Home() {
  return (
    <>
      <Header />
      <Body />
      <Discription />
      <Partner />
      <Testimonial />
      <Footer />
    </>
  );
}

export default Home;
