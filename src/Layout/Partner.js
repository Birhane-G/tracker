import React from "react";
import earald from "../images/partners/Earald.jpg";
import nibret from "../images/partners/nibret.jpg";
import erq from "../images/partners/erq.png";
import creativ from "../images/partners/creativehub.jpeg";
import "../Styles/partner_style.css";
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

export default Partner;
