import React from "react";
import { Button } from "./Button";
import "./section.css";

function Section() {
  return (
    <>
      <h1>What Is Medico-call?</h1>
      <p className="center-text">
        Medico-call is a telephone assistance service which is based on call
        reception by offering support to anyone who suffers from psychological
        disorders, loneliness or even depression can contact our specialists who
        will accompany them in order to overcome their problems. The management
        of the service is done through a web platform that allows the customer
        to access his credit and pay to activate his call, either 30 minutes at
        100 MAD or 1 hour at 150 MAD, a price four times cheaper than the normal
        consultation with a psychologist. In addition, we grant our customers
        the generosity to choose the right moment and the right time to be
        listened to. Medico-call offers the best quality services provided by a
        team of top specialists in the field.
      </p>
      <div className="center">
        <Button>Browse through diagnostic</Button>
      </div>
    </>
  );
}

export default Section;
