import React from 'react'
import Header from '../Layout/Header'
import Footer from '../Layout/Footer'
import Body from '../Layout/Body'
function Home() {
  return (
    <>
    <Header />
    <Body />
    <Footer />
    </>
  )
}

window.onscroll = function(){sticky()};

let navbar = document.getElementById("navbar");
function sticky(){
  if(window.pageYOffset >= 15)
  {
      navbar.classList.add('sticky');
  }
  else
  {
      navbar.classList.remove('sticky');
  }
}
export default Home