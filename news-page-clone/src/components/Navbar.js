import React, { useState, useRef } from "react";

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
      <i class="fa-solid fa-newspaper Navbar__logo__mobile"></i>
      <i
        class="fa-solid fa-bars Navbar__lines"
        ref={lines_ref}
        onClick={handleClick}
      ></i>
      <i class="fa-solid fa-magnifying-glass Navbar__search"></i>
      <ul className="Navbar__ul" ref={ul_ref}>
        <li className="Navbar__ul__li">Investigations</li>
        <li className="Navbar__ul__li">Geopolitics & Finance</li>
        <li className="Navbar__ul__li">Health</li>
        {!mobile && (
          <li className="Navbar__ul__li">
            <i class="fa-solid fa-newspaper Navbar__logo"></i>
          </li>
        )}
        <li className="Navbar__ul__li">Technology</li>
        <li className="Navbar__ul__li">National Security</li>
        <li className="Navbar__ul__li">OP/Analysis</li>
      </ul>
    </nav>
  );
}

export default Navbar;
