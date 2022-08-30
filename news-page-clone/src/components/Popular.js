import React from "react";
import Summary from "./Summary";

// Shows the top three most popular articles overall

function Popular(props) {
  return (
    <section className="Popular">
      {props.article1 && (
        <Summary
          title={props.article1.title}
          summary={props.article1.description}
          link={props.article1.url}
        />
      )}
      {props.article2 && (
        <Summary
          title={props.article2.title}
          summary={props.article2.description}
          link={props.article2.url}
        />
      )}
      {props.article3 && (
        <Summary
          title={props.article3.title}
          summary={props.article3.description}
          link={props.article3.url}
        />
      )}
    </section>
  );
}

export default Popular;
