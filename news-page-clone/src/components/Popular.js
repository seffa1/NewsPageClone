import React from "react";
import Summary from "./Summary";

// Shows the top three most popular articles overall

function Popular() {
  return (
    <section className="Popular">
      <Summary />
      <Summary />
      <Summary />
    </section>
  );
}

export default Popular;
