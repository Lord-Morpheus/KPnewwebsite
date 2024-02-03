import React from "react";
import "./mainarea.css";
import Typewriter from "typewriter-effect";
import { AiOutlineDown } from "react-icons/ai";
import { HashLink } from "react-router-hash-link";

function Home() {
  return (
    <>
      {/* Inserting Bg Image */}
      <div id="dark">
        <div id="image"></div>
      </div>
      {/* Content */}
      <div className="absolute h-[100%] top-0 w-[100%] flex justify-center items-end">
        <div className="text-white mx-auto h-[80vh] flex flex-col justify-around items-center ">
          <div className="flex flex-col justify-center items-center gap-5 font-semibold">
            <div className="text-5xl max-[420px]:text-3xl ">KamandPrompt</div>
            <div className="text-2xl max-[420px]:text-xl">The Programming Club Of IIT Mandi</div>
          </div>
          <div className="text-4xl max-[420px]:text-3xl">
            <Typewriter
              options={{
                strings: ["Eat.Code.Sleep.Repeat"],
                autoStart: true,
                loop: true,
                cursor: "_",
              }}
            />
          </div>
          <HashLink
          to={"/#about"}
          smooth={true}
            id="here"
            className="group flex flex-col justify-center items-center gap-2 text-2xl cursor-pointer"
          >
            <div className="group-hover:text-white group-hover:font-semibold ease-in-out duration-200  ">
              Scroll down to learn more
            </div>
            <div className="group-hover:translate-y-3 ease-in-out duration-200 ">
              <AiOutlineDown />
            </div>
          </HashLink>
        </div>
      </div>
    </>
  );
}

export default Home;
