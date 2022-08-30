import React from "react";
import Summary from "./Summary";
import map from "../images/map.jpeg";

function Topic(props) {
  return (
    <section className="Topic">
      <div className="Topic__title-container">
        <h1 className="Topic__title">{props.title}</h1>
        <div className="Topic__link-container">
          <a href={props.link} className="Topic__link">
            SEE ALL
          </a>
          <i class="Topic__link__arrow fa-solid fa-arrow-down"></i>
        </div>
      </div>
      <section className="Topic__information">
        <Summary
          title={
            "Why is the World Health Organization accused of mishandling the coronavirus"
          }
          summary={
            "Teresa Tam is hopeful Canada's advance order deals from leading American COVID-19 vaccine candidates will meet Canada's vaccine supply..."
          }
          link={"1"}
        />
        <img className="Topic__img" src={map} />
      </section>
    </section>
  );
}

export default Topic;
