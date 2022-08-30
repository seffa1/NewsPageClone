import React from "react";
import Summary from "./Summary";

// Shows the top three most popular articles overall

function Popular() {
  return (
    <section className="Popular">
      <Summary
        tag={"TECHNOLOGY"}
        title={
          "Why is the World Health Organization accused of mishandling the coronavirus"
        }
        summary={
          "Teresa Tam is hopeful Canada's advance order deals from leading American COVID-19 vaccine candidates will meet Canada's vaccine supply..."
        }
        link={"1"}
      />
      <Summary
        tag={"TECHNOLOGY"}
        title={
          "Why is the World Health Organization accused of mishandling the coronavirus"
        }
        summary={
          "Teresa Tam is hopeful Canada's advance order deals from leading American COVID-19 vaccine candidates will meet Canada's vaccine supply..."
        }
        link={"1"}
      />
      <Summary
        tag={"TECHNOLOGY"}
        title={
          "Why is the World Health Organization accused of mishandling the coronavirus"
        }
        summary={
          "Teresa Tam is hopeful Canada's advance order deals from leading American COVID-19 vaccine candidates will meet Canada's vaccine supply..."
        }
        link={"1"}
      />
    </section>
  );
}

export default Popular;
