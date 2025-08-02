import { useState, useEffect, useRef } from "react";
import "./index.css";
import useMouseTrack from "./components/useMouseTrack";
import HomeButton from "./components/homeButton";
import ContentBase from "./components/contentBase";

function App() {
  const [curState, setCurState] = useState("home");
  const [fadeOutStateArr, setFadeOutStateArr] = useState({
    about_me: false,
    my_resource: false,
    projects: false,
    art_stuff: false,
  });
  const stateHandler = (newState) => {
    console.log(newState);
    if (newState == "about") {
      console.log("no way");
    }
    if (newState == curState) {
      setCurState("home");
      return;
    }
    setCurState(newState);
  };

  const mouseRef = useRef(null);
  useMouseTrack(mouseRef, curState);

  return (
    <div
      className="min-w-screen min-h-screen bg-radial-[at_70%_25%] from-bgblue2 to-slate-950"
      // style={{
      //   background:
      //     "radial-gradient(at var(--bg-x) var(--bg-y), #141575, #020618)",
      //   "--bg-x": "70%",
      //   "--bg-y": "25%",
      // }}
    >
      <div
        className={`flex min-w-screen min-h-screen flex-row justify-center items-center ${
          curState == "home" ? "" : "fixed"
        }`}
      >
        <div className="border w-[18.75rem] h-[25rem] p-5 flex items-center justify-center ease-in-out duration-300 z-30">
          <img
            src="src\assets\alex-bw-flowers.png"
            alt="its an image of alex."
            id="profileImg"
            ref={mouseRef}
            style={{ transform: "none" }}
            className={
              "object-cover p-0 m-0 transform-3d shadow-2xl ease-in-out transition-opacity duration-600" +
              (curState == "home" ? " " : " opacity-0")
            }
          />
        </div>
        <div className=" border min-w-[18.75rem] h-[25rem]">
          <div
            className={
              curState == "home"
                ? "ease-in-out duration-600 p-5"
                : "opacity-0 ease-in-out duration-600 p-5"
            }
          >
            <h4 className="text-white font-mono text-5xl">alex b :)</h4>
            <h4 className="text-white font-mono text-xl font-extralight">
              cam medic
            </h4>
          </div>
          <div className="flex flex-col items-start">
            {["about_me", "my_resources", "projects", "art_stuff"].map(
              (btn, index) => {
                return (
                  <>
                    <HomeButton
                      i={index}
                      name={btn}
                      currentState={curState}
                      onClickEvent={() => stateHandler(btn)}
                      fadeOutStateArr={fadeOutStateArr}
                      setFadeOutStateArr={setFadeOutStateArr}
                    />
                  </>
                );
              }
            )}
          </div>
        </div>
        <ContentBase
          currentState={curState}
          fadeOutStateArr={fadeOutStateArr}
        />
      </div>
    </div>
  );
}

export default App;
