import React from "react";
import earald from "../images/partners/Earald.jpg";
import nibret from "../images/partners/nibret.jpg";
import erq from "../images/partners/erq.png";
import creativ from "../images/partners/creativehub.jpeg";
import "../Styles/style.css";

function Body() {
  return (
    <section className="body">
      <div className="front">
        <div className="Enter-site">
          <h1>Welcome to Tracker</h1>
          <button>Let's Start Tracking</button>
        </div>
        <div class="backimg"></div>
      </div>
    </section>
  );
}

function Discription() {
  return (
    <section className="Tracker-disc">
      <div className="why-tracker">
        <div className="box">
          <h2>Sample Text</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,
          </p>
        </div>
        <div className="box">
          <h2>Sample Text</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
        </div>
        <div className="box">
          <h2>Sample Text</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
        </div>
        <div className="box">
          <h2>Sample Text</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
        </div>
        <div className="box">
          <h2>Sample Text</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
        </div>
        <div className="box">
          <h2>Sample Text</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
        </div>
      </div>
    </section>
  );
}

function Partner() {
  return (
    <section>
      <div className="partners">
        <div className="partner-cont">
          <div className="box">
            <img src={earald} alt="Earald Ict " />
          </div>
          <div className="box">
            <img src={nibret} alt="Nibret" />
          </div>
          <div className="box">
            <img src={erq} alt="erq maed" />
          </div>
          <div className="box">
            <img src={creativ} alt="creative hub" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonial() {
  return (
    <section>
      <div className="testimonial_header">
        <h1>Testimonials of our customers</h1>
        <figure class="customer_tetsimonial">
          <figcaption>
            <blockquote>
              <p>
                Tracker is the best tool for tracking web traffic, it helped me
                a lot with my site.
              </p>
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
            <h4>Classic Music Streaming</h4>
          </figcaption>
        </figure>
        <figure class="customer_tetsimonial">
          <figcaption>
            <blockquote>
              <p>
                It's great to have this kind of tool at my disposal, its great.{" "}
              </p>
            </blockquote>
            <h3>Ingredia Nutrisha</h3>
            <h4>Classic Music Streaming</h4>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

export { Body, Discription, Partner, Testimonial };
