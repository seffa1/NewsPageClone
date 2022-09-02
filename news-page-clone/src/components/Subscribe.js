import React from "react";

function Subscribe() {
  return (
    <section className="Subscribe">
      <h2>Subscribe to The Bureau</h2>
      <h3>
        Engaging copy for member subscription with the CTA to enter email and
        subscribe
      </h3>

      <div className="Subscribe__email-container">
        <i class="fa-regular fa-envelope Subscribe__envelope"></i>
        <input
          type="email"
          placeholder="Your email"
          className="Subscribe__input"
        />
        <button className="Subscribe__button">Subscribe</button>
      </div>
    </section>
  );
}

export default Subscribe;
