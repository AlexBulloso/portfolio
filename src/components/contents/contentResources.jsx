import React, { useEffect, useMemo, useState } from "react";

const ContentResources = () => {
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
          <div className="flex flex-1 flex-col bg-black/30 ">
            <div className="m-1">
              <h1 className="text-2xl font-bold font-mono text-center text-gray-300 p-2 pb-2 underline">
                gcse ankis
              </h1>

              <p className=" text-m font-mono pl-2 text-white">
                - bio, chem, phys OCR G <br />- eng lit AQA (love/war, christmas
                carol, macbeth)
                <div className="flex justify-end">
                  <a
                    href="src/files/BCPE.apkg"
                    download="BCPE-GCSE.apkg"
                    className="text-blue-200 hover:text-blue-800 hover:underline flex justify-end"
                  >
                    [download]
                  </a>
                </div>
              </p>

              <p className=" text-m font-mono pl-2 text-white">
                - french aqa vocab
                <div className="flex justify-end">
                  <a
                    href="src/files/French.apkg"
                    download="French-GCSE.apkg"
                    className="text-blue-200 hover:text-blue-800 hover:underline flex justify-end"
                  >
                    [download]
                  </a>
                </div>
              </p>
              <h1 className="text-2xl font-bold font-mono text-center text-gray-300 p-2 pb-2 underline">
                a level stuff
              </h1>
              <p className=" text-m font-mono pl-2 text-white">
                - bio, chem OCR A
                <div className="flex justify-end">
                  <a
                    href="src/files/BioChem A Level.apkg"
                    download="BC-ALevel.apkg"
                    className="text-blue-200 hover:text-blue-800 hover:underline flex justify-end"
                  >
                    [download]
                  </a>
                </div>
              </p>
              <p className=" text-m font-mono pl-2 text-white">
                - fm AQA homemade paper 1 mock + answers
                <div className="flex justify-end">
                  <a
                    href="src/files/ALX Paper 1 202X.zip"
                    download="ALX FM Paper 1"
                    className="text-blue-200 hover:text-blue-800 hover:underline flex justify-end"
                  >
                    [download]
                  </a>
                </div>
              </p>
            </div>
          </div>
        </div>
        <div
          className={`flex flex-col rounded-2xl overflow-hidden w-[20rem] h-[25rem] mt-10 ml-10 mr-10
       ${activeIndex == 1 ? "" : "hidden md:visible"} md:flex`}
        >
          <div className="flex flex-1 flex-col bg-black/30 ">
            <div className="m-1">
              <h1 className="text-2xl font-bold font-mono text-center text-gray-300 p-2 pb-2 underline">
                cambridge med y1
              </h1>

              <p className=" text-m font-mono pl-2 text-white">
                - fab muscles + arteries summary sheets <br />
                - hom prac notes <br />
                - mims + metabolism summary sheets <br />
                - homemade mims mock (2025) <br />
                - febp notes <br />- assorted fab/homs/mims mcqs
                <div className="flex justify-end">
                  <a
                    href="src/files/cam med IA resources.zip"
                    download="cam med IA resources.zip"
                    className="text-blue-200 hover:text-blue-800 hover:underline"
                  >
                    [download]
                  </a>
                </div>
              </p>

              <h1 className="text-2xl font-bold font-mono text-center text-gray-300 p-2 pb-2 underline">
                cambridge med y2
              </h1>
              <p className=" text-m font-mono pl-2 text-white">
                coming soon :)
              </p>
            </div>
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

export default ContentResources;
