import React, { useEffect, useMemo, useState } from "react";

const ContentProjects = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const toggleIndex = () => {
    setActiveIndex((prev) => (prev == 0 ? 1 : 0));
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-row">
        <div
          className={`flex flex-col rounded-2xl overflow-hidden w-[20rem] h-[25rem] mt-10 ml-10 mr-10
        ${activeIndex == 0 ? "" : "hidden md:visible"} md:flex`}
        >
          <div className="flex flex-1 overflow-hidden items-end  relative">
            <img
              className="w-full h-full object-cover"
              src="src\assets\tetris.png"
              alt="tetris"
            ></img>
            <a
              target="_blank"
              href="https://github.com/CryoSolace/Tetris"
              className="absolute w-full bg-black/60 text-right text-white font-mono overflow-hidden p-2 hover:underline hover:text-blue-300"
            >
              tetris in python [2022]
            </a>
          </div>
          <div className="flex flex-1 overflow-hidden items-end relative">
            <img
              className="w-full h-full object-cover"
              src="src\assets\upsilonBOT.png"
              alt="upsilonBOT"
            ></img>
            <a
              target="_blank"
              href="https://github.com/CryoSolace/upsilonBOT"
              className="absolute w-full bg-black/60 text-right text-white font-mono overflow-hidden p-2 hover:underline hover:text-blue-300"
            >
              upsilonBOT for discord [2022]
            </a>
          </div>
          <div className="flex flex-1 overflow-hidden items-end relative">
            <img
              className="w-full h-full object-cover"
              src="src\assets\proteomics.png"
              alt="proteomics"
            ></img>
            <a
              target="_blank"
              href="https://github.com/AlexBulloso/Expression-Proteomics-Analysis-in-R/"
              className="absolute w-full bg-black/60 text-right text-white font-mono overflow-hidden p-2 hover:underline hover:text-blue-300"
            >
              expression proteomics in R [2025]
            </a>
          </div>
        </div>
        <div
          className={`flex flex-col rounded-2xl overflow-hidden w-[20rem] h-[25rem] mt-10 ml-10 mr-10
       ${activeIndex == 1 ? "" : "hidden md:visible"} md:flex`}
        >
          <div className="flex flex-1 overflow-hidden items-end relative">
            <img
              className="w-full h-full object-cover"
              src="src\assets\avt.png"
              alt="avt"
            ></img>
            <a
              target="_blank"
              href="https://avt-timer.netlify.app"
              className="absolute w-full bg-black/60 text-right text-white font-mono overflow-hidden p-2 hover:underline hover:text-blue-300"
            >
              clinic documentation timer [2025]
            </a>
          </div>

          <div className="flex flex-1 overflow-hidden items-end  relative">
            <img
              className="w-full h-full object-cover"
              src="src\assets\portfolio.png"
              alt="portfolio"
            ></img>
            <a
              target="_blank"
              href="https://github.com/AlexBulloso/portfolio"
              className="absolute w-full bg-black/60 text-right text-white font-mono overflow-hidden p-2 hover:underline hover:text-blue-300"
            >
              portfolio in reactjs [2025]
            </a>
          </div>
          <div className="flex flex-1 overflow-hidden items-end relative">
            <img
              className="w-full h-full object-cover"
              src="src\assets\ISLP.png"
              alt="ISLP"
            ></img>
            <a
              target="_blank"
              href="https://github.com/AlexBulloso/Notes-on-Stats-and-AI"
              className="absolute w-full bg-black/60 text-right text-white font-mono overflow-hidden p-2 hover:underline hover:text-blue-300"
            >
              notes on ISLP [2025]
            </a>
          </div>
        </div>
      </div>

      <button
        className="md:hidden hover:cursor-pointer text-white font-mono pt-5"
        onClick={() => toggleIndex()}
      >
        click for more!
      </button>
    </div>
  );
};

export default ContentProjects;
