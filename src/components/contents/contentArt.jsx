import React, { useEffect, useMemo, useState } from "react";

const ContentArt = () => {
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
          <div className="flex flex-1 overflow-hidden items-end relative">
            <img
              className="w-full h-full object-cover"
              src="\assets\imslp.png"
              alt="imslp"
            ></img>
            <a
              target="_blank"
              href="https://imslp.org/wiki/Category:Bulloso,_Alexander_B."
              className="absolute w-full bg-black/60 text-right text-white font-mono overflow-hidden p-2 hover:underline hover:text-blue-300"
            >
              imslp (work in progress) [2021]
            </a>
          </div>
          <div className="flex flex-1 overflow-hidden items-end relative">
            <img
              className="w-full h-full object-cover"
              src="\assets\crescentTrance.png"
              alt="crescentTrance"
            ></img>
            <a
              target="_blank"
              href="https://on.soundcloud.com/viiWVi2wd4GGlstLyI"
              className="absolute w-full bg-black/60 text-right text-white font-mono overflow-hidden p-2 hover:underline hover:text-blue-300"
            >
              crescent trance lofi [2022]
            </a>
          </div>
        </div>
        <div
          className={`flex flex-col rounded-2xl overflow-hidden w-[20rem] h-[25rem] mt-10 ml-10 mr-10
       ${activeIndex == 1 ? "" : "hidden md:visible"} md:flex`}
        >
          <div className="flex flex-1 overflow-hidden items-end  relative">
            <img
              className="w-full h-full object-cover"
              src="\assets\goodreads.png"
              alt="goodreads"
            ></img>
            <a
              target="_blank"
              href="https://www.goodreads.com/user/show/139791171-alex"
              className="absolute w-full bg-black/60 text-right text-white font-mono overflow-hidden p-2 hover:underline hover:text-blue-300"
            >
              goodreads? idk what else [2021...]
            </a>
          </div>
          <div className="flex flex-1 overflow-hidden items-end relative">
            <img
              className="w-full h-full object-cover"
              src="\assets\nature.png"
              alt="nature"
            ></img>
            <a
              target="_blank"
              href=""
              className="absolute w-full bg-black/60 text-right text-white font-mono overflow-hidden p-2 hover:underline hover:text-blue-300"
            >
              nature pics [soon]
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

export default ContentArt;
