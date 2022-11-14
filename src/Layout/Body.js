import React from "react";
import earald from "../images/partners/Earald.jpg";
import nibret from "../images/partners/nibret.jpg";
import erq from "../images/partners/erq.png";
import creativ from "../images/partners/creativehub.jpeg";

function Body() {
  return (
    <section className="body">
      <div class="backimg">
        <div className="front">
          <div className="Enter-site-home">
            <h1>Welcome to Tracker</h1>
            <button>Let's Start Tracking</button>
          </div>
        </div>
        <div className="bottom"> </div>
      </div>
    </section>
  );
}

function Discription() {
  return (
    <section className="Tracker-disc">
      <div className="why-tracker">
        <div className="box">
          <h2>Easy to use</h2>
          <p>
            Easily navigate through a user-friendly interface to get the data you need, faster.
          </p>
        </div>
        <div className="box">
          <h2>Analytics</h2>
          <p>
            Contextualize data and test results with replays, visualizations, and feedback. Find and solve the costliest website frustrations quickly.
          </p>
        </div>
        <div className="box">
          <h2>Uncover web traffic journeys with real user data</h2>
          <p>
            Explore user journeys and pinpoint platforms that drive the most website traffic.
            Discover the most promising platforms for ad placement and marketing partnerships.
          </p>
        </div>
        <div className="box">
          <h2>Product</h2>
          <p>
            See what users actually do so you can optimize functionality with confidence. Catch bugs before they spread and prioritize feature updates.
          </p>
        </div>
        <div className="box">
          <h2>Monitor all your website’s changes 24/7</h2>
          <p>
            The more profitable your project is, the more expensive each error costs. Monitor website changes to keep your business running.
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
