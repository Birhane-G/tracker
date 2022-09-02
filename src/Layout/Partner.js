import React from "react";
import earald from "../images/partners/Earald.jpg";

function Partner() {
  return (
    <section>
      <div className="partners">
        <div className="partner-cont">
            <div className="box">
                <img src={earald} alt="" />
            </div>
        </div>
      </div>
    </section>
  );
}

export default Partner;
