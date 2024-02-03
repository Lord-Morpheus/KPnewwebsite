import React from "react";
import projects from "./projects.json";
import { AiOutlineGithub } from "react-icons/ai";

const ProjectBox = ({ project }) => {
  return (
    <div className="lg:w-1/2 md:w-1/2 sm:w-full p-4">
      <div className="bg-white p-6 shadow-md rounded-lg hover:shadow-lg justify-center  border border-dotted border-gray-300 hover:border-solid transition-transform transform hover:scale-105">
        <h1 className="w-[100%] flex justify-center text-4xl text-[#575757] font-bold mb-2">
          {project.title}
        </h1>
        <hr className="w-[100%] flex justify-center border-t border-gray-300 my-2" />
        <p className="w-[100%]  flex justify-center text-center text-gray-700 mb-2">
          {project.description}
        </p>
        <div className="w-[100%] flex justify-end">
          <a
            href={project.Link}
            className="w-[max-content] bg-[#575757] hover:bg-[#303030] text-white font-semibold rounded-lg py-2 px-4 text-center transition my-1 duration-300 "
          >
            <div className="flex justify-center items-center gap-2">
              {isGitHubLink(project.Link) && (
                <span className="text-2xl">
                  <AiOutlineGithub />
                </span>
              )}
              <span>{project.buttonText}</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

function isGitHubLink(link) {
  return link.includes("github.com");
}
function Projects() {
  const data = projects;
  return (
    <>
      <div className=" flex justify-center items-end pb-3 h-[100%] w-[100%] ">
        <div className="flex flex-col  mx-auto w-[80%] mt-[7rem] items-center gap-5">
          <div className="text-5xl font-semibold pb-2">Projects</div>
          <div className="flex flex-wrap">
            {data.map((project, index) => (
              <ProjectBox key={index} project={project} />
            ))}
          </div>
        </div>
      </div>
      ;
    </>
  );
}

export default Projects;
