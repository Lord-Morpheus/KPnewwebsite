import React from "react";
import { HashLink } from "react-router-hash-link";
import Drop from "./Drop";
import { useState,useEffect } from "react";
import Hamburger from 'hamburger-react'

function Nav({toggle,links}) {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [isOpen, setOpen] = useState(false)

  const handleResize = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <>
      <div className="z-40 fixed top-0 left-0 right-0 bg-white bg-opacity-0 md:bg-opacity-20 font-nav text-lg">
        <div
          style={{ boxShadow: "0 0 10px 0.5px #000" }}
          className="bg-white flex items-center justify-between p-1 px-4 relative"
        >
          <div>
            <img width={"196px"} src="./img/kamandpromptlogo.png" alt="" />
          </div>
          {screenWidth > 940 ? (
            <div className="flex gap-3 text-base overflow-visible flex-grow justify-end max-[1200px]:text-sm max-[1200px]:mt-2 h-[30px]">
              <div className="mx-3 max-[1110px]:mx-0">
                <Drop />
              </div>
              <div className="flex gap-3">
                {links.map(({ text, link }) => (
                  <HashLink
                    smooth={true}
                    className="mx-3 max-[1110px]:mx-0"
                    key={text}
                    to={link}
                  >
                    {"< " + text + " />"}
                  </HashLink>
                ))}
              </div>
            </div>
          ) : (
            <Hamburger toggled={isOpen} toggle={setOpen} onToggle={toggle} />
          )}
        </div>
      </div>
    </>
  );
}

export default Nav;
