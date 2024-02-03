import React from "react";
import "./NavMenu.css"; 
import { HashLink } from "react-router-hash-link";

const NavMenu = ({ nav,links }) => {
  return (
    <div className="z-40 fixed top-[3.95rem] shadow-xl left-0 right-0 bg-white font-nav text-lg">
      <div className={`nav-menu ${nav ? "active" : ""}`}>
        {nav && (
          <div className={`menu-items ${nav ? "active" : ""}`}>
          {links.map(({ text, link }) => (
                  <HashLink
                    smooth={true}
                    className="menu-item mx-3 max-[1110px]:mx-0"
                    key={text}
                    to={link}
                  >
                    {"< " + text + " />"}
                  </HashLink>
                ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default NavMenu;
