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

window.onscroll = function () {
  sticky();
};

let navbar = document.getElementById("navbar");
function sticky() {
  if (window.pageYOffset >= 0) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}
export default Home;
