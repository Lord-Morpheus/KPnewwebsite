import React from "react";
import { HiChatAlt2 } from "react-icons/hi";
import { IoIosPeople } from "react-icons/io";
import { FaLocationPin } from "react-icons/fa6";
import { BsFillEnvelopeFill } from "react-icons/bs";
import { AiOutlineFacebook, AiOutlineGithub } from "react-icons/ai";

function Footer() {
  return (
    <>
      <div className="h-[100%] w-[100%] bg-black flex flex-col justify-center items-center text-white text-lg">
        <div className="flex flex-col w-[80%] mt-3 ">
          <div className="flex justify-between w-[100%] max-sm:flex-col max-sm:gap-4">
            <div className="flex flex-col gap-3 max-sm:items-start ">
              <span className="text-3xl font-semibold">External Links</span>
              <a href="https://kamandprompt.zulipchat.com/" target="_blank" rel="noreferrer" className="flex gap-2 hover:text-[#1E88E5] hover:translate-x-2 ease-in-out duration-500  items-center justify-center">
                <span>
                  <HiChatAlt2 />
                </span>
                <span>Join us on ZulipChat</span>
              </a>
              <a href="https://www.facebook.com/groups/KamandPrompt/" target="_blank" rel="noreferrer"  className="flex hover:text-[#1E88E5] hover:translate-x-2 ease-in-out duration-500  gap-2 items-center justify-center">
                <span>
                  <IoIosPeople />
                </span>
                <span>Join us on Facebook</span>
              </a>
            </div>
            <div className="w-[30%] max-sm:w-[100%]   flex flex-col justify-center items-start gap-3">
              <span className="text-3xl font-semibold">Contact Us</span>
              <div  className="flex gap-2 items-center hover:text-[#1E88E5] hover:translate-x-2 ease-in-out duration-500  justify-center">
                <span>
                  <FaLocationPin />
                </span>
                <span>
                  Indian Institute of Technology Mandi, Kamand (H.P.) - 175005
                </span>
              </div>
              <a href="mailto:pc@iitmandi.ac.in"  className="flex gap-2 items-center hover:text-[#1E88E5] hover:translate-x-2 ease-in-out duration-500  justify-center">
                <span>
                  <BsFillEnvelopeFill />
                </span>
                <span>pc@iitmandi.ac.in</span>
              </a>
            </div>
          </div>
          <div className="w-[100%] max-sm:w-[100%]  flex flex-col justify-center items-center my-5 gap-3">
            <div className="flex gap-3 text-4xl">
              <a href="https://www.facebook.com/groups/KamandPrompt/" target="_blank" rel="noreferrer" className="hover:-translate-y-1 hover:text-[#1E88E5] ease-in-out duration-200">
                <AiOutlineFacebook />
              </a>
              <a href="https://github.com/KamandPrompt/" target="_blank" rel="noreferrer">
                <AiOutlineGithub className="hover:-translate-y-1 hover:text-[#1E88E5] ease-in-out duration-200"/>
              </a>
            </div>
            <div className="flex gap-1 max-sm:flex-col items-center"><span className="flex gap-1 items-center max-sm:flex-col">© 2023 KamandPrompt <span>- IIT Mandi.</span></span> <span>All Rights Reserved.</span></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
