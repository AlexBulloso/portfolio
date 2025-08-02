import React from "react";

const ContentResources = () => {
  return (
    <>
      <div className="flex flex-col  rounded-2xl overflow-hidden w-[25rem] h-[30rem] m-10">
        <div className="flex flex-1 items-center justify-center align-middle overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src="src\assets\sea.png"
            alt="its an image of alex."
          ></img>
        </div>
        <div className="flex flex-1 flex-col bg-black/30 ">
          <div className="m-1">
            <h1 className="text-4xl font-bold font-mono text-gray-300 pb-3">
              hi, im alex
            </h1>
            <p className=" text-m font-mono text-white">
              - 2nd year cambridge med student <br />
              - doing some compsci on the side <br />
              - no clue what im doing with my life <br />
              <br />
              i also make content sometimes
              <br />- youtube:{" "}
              <a
                href="https://www.youtube.com/@alexbulloso"
                target="_blank"
                className="hover:text-red-500"
              >
                @alexbulloso
              </a>
              <br />- insta:{" "}
              <a
                href="https://www.instagram.com/alex.bulloso/"
                target="_blank"
                className="hover:text-purple-400"
              >
                @alex.bulloso
              </a>
              <br />
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col rounded-2xl overflow-hidden w-[25rem] h-[30rem] m-10">
        <div className="flex flex-1 overflow-hidden items-end relative">
          <img
            className="w-full h-full object-cover"
            src="src\assets\judo.png"
            alt="judo."
          ></img>
          <p className="absolute w-full bg-black/40 text-right text-white font-mono overflow-hidden p-2">
            varsity judo
          </p>
        </div>
        <div className="flex flex-1 overflow-hidden items-end  relative">
          <img
            className="w-full h-full object-cover"
            src="src\assets\banana.png"
            alt="banana."
          ></img>
          <p className="absolute w-full bg-black/40 text-right text-white font-mono overflow-hidden p-2">
            ???
          </p>
        </div>
        <div className="flex flex-1 overflow-hidden items-end  relative">
          <img
            className="w-full h-full object-cover"
            src="src\assets\band.png"
            alt="band."
          ></img>
          <p className="absolute w-full bg-black/40 text-right text-white font-mono overflow-hidden p-2">
            friend band
          </p>
        </div>
      </div>
    </>
  );
};

export default ContentResources;
