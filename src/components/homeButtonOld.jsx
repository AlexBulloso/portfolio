import React, { useEffect, useMemo, useState } from "react";

const HomeButton = ({ i, name, currentState, onClickEvent }) => {
  const pad = useMemo(() => {
    if (name == currentState) {
      return "space";
    }
    return `${(Math.floor(Math.random() * 10) + 20) * 4}px`;
  }, [currentState]);

  //const [clickState, setClickState] = useState(false);
  const onClickHandler = () => {
    setClickState(true);
    if (currentState == "home") {
      setTimeout(() => {
        setClickState(false);
      }, 1000);
    } else {
      setClickState(false);
    }

    onClickEvent();
  };
  return (
    <div className={`group `}>
      <style>
        {`.buttonAnim-translate{
          transition: translate 500ms ease-in-out, padding 700ms ease-in-out
        }
        `}
      </style>
      <button
        onClick={onClickHandler}
        disabled={name != currentState && currentState != "home"}
        className={`
          group
          mt-5 mb-5 -ml-25 mr-10 bg-blue-300/20
          hover:bg-blue-300/35  ease-in-out transition-opacity duration-600 buttonAnim-translate buttonAnim-pad`}
        //   ${
        //     clickState || currentState != "home"
        //       ? ""
        //       : // to fix: no delay betweenanimation of moving up after changing state from home
        //         " group-hover:-ml-23"
        //   }
        //   ${
        //     name == currentState || currentState == "home"
        //       ? "inline-block cursor-pointer"
        //       : "opacity-0 cursor-default fixed "
        //   } ${
        //   clickState && name == currentState
        //     ? `top-[0px] absolute z-40`
        //     : " relative z-20"
        // }`}
        style={{
          paddingLeft: pad != "space" ? pad : "15px",
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
