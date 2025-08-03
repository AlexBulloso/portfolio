import React, { useEffect, useMemo, useState } from "react";

const HomeButton = ({
  i,
  name,
  currentState,
  onClickEvent,
  fadeOutStateArr,
  setFadeOutStateArr,
}) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const resize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  });

  const isMd = windowWidth >= 768;
  const padL = useMemo(() => {
    if (name == currentState) {
      return "0px";
    } else if (isMd) {
      return `${(Math.floor(Math.random() * 10) + 20) * 4}px`;
    }

    return `30px`;
  }, [currentState, isMd]);

  const margL = useMemo(() => {
    if (isMd) {
      return `-100px`;
    }
    return `0px`;
  }, [currentState, window.innerWidth]);

  const [fadeInState, setFadeInState] = useState(false);
  const [animating, setAnimating] = useState(false);

  const toggleFadeOut = (name) => {
    setFadeOutStateArr((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  const onClickHandler = () => {
    if (animating) return;
    setAnimating(true);

    if (!fadeInState) {
      setTimeout(() => {
        setFadeInState(true);
        setAnimating(false);
      }, 600);
      onClickEvent();
    } else {
      toggleFadeOut(name); // to true
      setTimeout(() => {
        toggleFadeOut(name); // to false
        setFadeInState(false);
        setAnimating(false);
        onClickEvent();
      }, 600);
    }
  };
  return (
    <div className={`group `}>
      <style>
        {`.buttonAnim{
          transition: padding 700ms ease-in-out, opacity 600ms ease-in-out
        }
        `}
      </style>

      <button
        onClick={onClickHandler}
        disabled={animating || (name != currentState && currentState != "home")}
        className={`
          ${
            fadeOutStateArr[name] && name == currentState
              ? "absolute top-10 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 cursor-pointer"
              : ""
          }
          ${
            !fadeInState && !fadeOutStateArr[name] && currentState == "home"
              ? "opacity-100 cursor-pointer"
              : "opacity-0 cursor-default"
          }
          ${
            fadeInState && !fadeOutStateArr[name] && name == currentState
              ? "absolute top-10 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-100 cursor-pointer"
              : "opacity-0"
          }
          
          group
          mt-5 mb-5 -ml-100 md:-ml-25 bg-blue-300/20
          hover:bg-blue-300/35 ease-in-out buttonAnim z-100`}
        style={{
          paddingLeft: fadeInState && name === currentState ? "20px" : padL, // simplify padding when centered
          marginLeft: fadeInState && name === currentState ? "0px" : margL, // remove margins when centered
        }}
        //
      >
        <span className="text-center -right-11 block relative -bottom-3 text-white text-3xl font-mono ">
          {name}
          <span className="group-hover:opacity-100 opacity-0 ease-in-out duration-200">
            {" <"}
          </span>
        </span>
      </button>
    </div>
  );
};

export default HomeButton;
