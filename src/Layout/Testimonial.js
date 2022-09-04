import React from "react";
import "../Styles/testimonial_style.css";


function Testimonial() {
  return (
    <section>
      <div className="testimonial_header">
    <h1>Testimonials of our customers</h1>
    <figure class="customer_tetsimonial">
  <figcaption>
    <blockquote>
      <p>Tracker is the best tool for tracking web traffic, it helped me a lot with my site.</p>
    </blockquote>
    <h3>Surafel Melese</h3>
    <h4>G2B Inc.</h4>
  </figcaption>
</figure>
<figure class="customer_tetsimonial">
  <figcaption>
    <blockquote>
      <p>I was not expecting it to be this good but it actually is.</p>
    </blockquote>
    <h3>Sprit Yoga</h3>
    <h4></h4>
  </figcaption>
</figure>
<figure class="customer_tetsimonial">
  <figcaption>
    <blockquote>
      <p>It's great to have this kind of tool at my disposal, its great. </p>
    </blockquote>
    <h3>Ingredia Nutrisha</h3>
    <h4>Classic Music Streaming</h4>
  </figcaption>
</figure>
  </div>
    </section>
    
  );
}
export default Testimonial;