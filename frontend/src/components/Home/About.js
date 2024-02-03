import React from "react";
import { FaRegLightbulb } from "react-icons/fa";
import { HiTrophy } from "react-icons/hi2";
import { SiOpensourceinitiative } from "react-icons/si";
function About() {
  const data = [
    {
      icon: <FaRegLightbulb />,
      title: "Innovate",
      desc: "We try innovate and foster technical activities and create an engaging coding culture in the fields like Competitive Programming and Development.",
    },
    {
      icon: <HiTrophy />,
      title: "Events",
      desc: "We organise Programming Contests, Hackathons and Coding Classes to prepare students for events like ACM ICPC and GSoC and bring out the best in them.",
    },
    {
      icon: <SiOpensourceinitiative />,
      title: "Open Source",
      desc: "We develop cool stuff that benefits everyone in the campus and encourage Open Source Development among the students in the campus.",
    },
  ];
  return (
    <div className=" flex justify-center items-end pb-3 h-[100%] w-[100%] ">
      <div className="flex flex-col  mx-auto w-[80%] h-[80%] items-center gap-5 max-[620px]:mt-[6rem]">
        <div className="text-5xl font-semibold pb-2  max-[620px]:pb-[2rem]">About Us</div>
        <div className="flex max-[620px]:flex-col  max-[620px]:gap-5">
          {data.map((value, index) => {
            return (
              <div key={index} className="flex flex-col px-3 justify-center items-center text-center gap-3">
                <div className="text-[10em] text-gray-700">{value.icon}</div>
                <div className="text-2xl text-gray-700 font-medium">{value.title}</div>
                <div className="text-base text-gray-700">{value.desc}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default About;
