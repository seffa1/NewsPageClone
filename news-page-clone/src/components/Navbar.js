import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const lines_ref = useRef(null);
  const ul_ref = useRef(null);

  const [mobile, setMobile] = useState(false);

  function handleClick() {
    // expanded the navbar
    if (ul_ref.current.style.display === "none") {
      ul_ref.current.style.display = "flex";
      ul_ref.current.style.flexDirection = "column";
      setMobile(true);

      // turn lines sideways
      lines_ref.current.style.transform = "rotate(90deg)";
    } else {
      ul_ref.current.style.display = "none";
      lines_ref.current.style.transform = "rotate(0deg)";
      setMobile(false);
    }
  }

  return (
    <nav className="Navbar">
      <Link to="/" className="Navbar__ul__li">
        <i class="fa-solid fa-newspaper Navbar__logo__mobile"></i>
      </Link>
      <i
        class="fa-solid fa-bars Navbar__lines"
        ref={lines_ref}
        onClick={handleClick}
      ></i>
      <i class="fa-solid fa-magnifying-glass Navbar__search"></i>
      <ul className="Navbar__ul" ref={ul_ref}>
        <Link to="/technology" className="Navbar__ul__li">
          Technology
        </Link>

        <Link to="/science" className="Navbar__ul__li">
          Science
        </Link>
        <Link to="/health" className="Navbar__ul__li">
          Health
        </Link>
        {!mobile && (
          <Link to="/" className="Navbar__ul__li">
            <i class="fa-solid fa-newspaper Navbar__logo"></i>
          </Link>
        )}
        <Link to="/business" className="Navbar__ul__li">
          Business
        </Link>
        <Link to="/entertainment" className="Navbar__ul__li">
          Entertainment
        </Link>
        <Link to="/sports" className="Navbar__ul__li">
          Sports
        </Link>
      </ul>
    </nav>
  );
}

export default Navbar;
