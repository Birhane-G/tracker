import React from "react";
import "./style/location.css";
import { Continent } from "./Components/Continent";
import { Country } from "./Components/Country";
import { Region } from "./Components/Region";
import { City } from "./Components/City";
export const Location = () => {
  return (
    <div className="location-container">
      <div className="one">
        <Continent />
      </div>
      <div className="one">
        <Country />
      </div>
      <div className="one">
        <Region />
      </div>
      <div className="one">
        <City />
      </div>
    </div>
  );
};
