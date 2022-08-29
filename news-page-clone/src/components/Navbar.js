import React from "react";

function Navbar() {
  return (
    <nav className="Navbar">
      <i class="fa-solid fa-magnifying-glass Navbar__search"></i>
      <ul className="Navbar__ul">
        <li className="Navbar__ul__li">Investigations</li>
        <li className="Navbar__ul__li">Geopolitics & Finance</li>
        <li className="Navbar__ul__li">Health</li>
        <li className="Navbar__ul__li">
          <i class="fa-solid fa-newspaper Navbar__logo"></i>
        </li>
        <li className="Navbar__ul__li">Technology</li>
        <li className="Navbar__ul__li">National Security</li>
        <li className="Navbar__ul__li">OP/Analysis</li>
      </ul>
      <i class="fa-solid fa-bars Navbar__lines"></i>
    </nav>
  );
}

export default Navbar;
