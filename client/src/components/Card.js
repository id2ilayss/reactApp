import React from "react";
import CardItem from "./CardItem";
import "./Card.css";
import { Button } from "./Button";

function Card() {
  return (
    <section className="ss">
      <div className="cards">
        <h1>Medico-call Departments</h1>
        <p>
          Our service is provided by highly qualified psychologists from
          different specialties
        </p>
        <div className="cards__container">
          <div className="cards__wrapper">
            <ul className="cards__items">
              <CardItem
                src="https://medico-call.com/wp-content/uploads/2020/05/Pro-1-500x500.png"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                label="Professional"
                path="/services"
              />
              <CardItem
                src="https://medico-call.com/wp-content/uploads/2020/05/INdi-500x500.png"
                text="Sed ut perspiciatis unde omnis iste natus error sit voluptatem"
                label="Individual"
                path="/services"
              />
              <CardItem
                src="https://medico-call.com/wp-content/uploads/2020/05/Students-ico-e1634132936895-500x500.png"
                text="At vero eos et accusamus et iusto odio dignissimos "
                label="Student"
                path="/services"
              />
            </ul>
            <ul className="cards__items">
              <CardItem
                src="https://medico-call.com/wp-content/uploads/2020/05/Parents-500x500.png"
                text="...."
                label="Parent"
                path="/"
              />
              <CardItem
                src="https://medico-call.com/wp-content/uploads/2020/05/fam-500x500.png"
                text="...."
                label="Family"
                path="/"
              />
              <CardItem
                src="https://medico-call.com/wp-content/uploads/2020/05/MasterClass-500x500.png"
                text="...."
                label="Master Class"
                path="/"
              />
            </ul>
          </div>
        </div>
      </div>
      <div class="vertical-center">
        <Button id="btn">View Departement Details</Button>
      </div>
    </section>
  );
}

export default Card;
