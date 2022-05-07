import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./Hero.css";

function Hero() {
  return (
    <div className="hero-container">
      <video src="/videos/video-1.mp4" autoPlay loop muted />
      <h1>
        Therapy For <span id="cc">Everyone</span>
      </h1>
      <p>
        With Medico-call’s phone therapy, everybody can have therapy sessions
        anywhere and any time.
      </p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET STARTED
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
          onClick={console.log("hey")}
        >
          Book Now
        </Button>
      </div>
    </div>
  );
}

export default Hero;
