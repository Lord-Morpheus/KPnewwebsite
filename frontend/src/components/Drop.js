import React, { useState } from "react";

function Drop() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <button
        id="dropdownDefaultButton"
        data-dropdown-toggle="dropdown"
        type="button"
        onClick={handleDropdownToggle}
        className=" w-[100%] flex justify-end"
      >
      {"< SUBCLUBS/>"}
      </button>
      <div
        id="dropdown"
        className={`z-10 ${isDropdownOpen ? "" : "hidden"} mt-[1.4rem] bg-white divide-y  divide-gray-100 rounded-lg shadow  w-40 dark:bg-gray-700`}
      >
        <ul
          className="py-2 text-sm bg-white rounded-lg shadow-xl outline outline-1 "
          aria-labelledby="dropdownDefaultButton"
        >
          <li>
            <a href="/"
              className="block px-4 py-2 hover:cursor-pointer border-b border-black border-dashed "
              
            >
             {"< HEURISTICS />"}
            </a>
            <a href="/"
              className="block px-4 py-2 hover:cursor-pointer border-b border-black border-dashed"
              
            >
             {"< COMPETETIVE CODING CLUB />"}
            </a>
            <a href="/"
              className="block px-4 py-2 hover:cursor-pointer border-b border-black border-dashed"
              
            >
             {"< DEVPROMPT />"}
            </a>
            <a href="/"
              className="block px-4 py-2 hover:cursor-pointer"
              
            >
             {"< SAIC />"}
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Drop;
