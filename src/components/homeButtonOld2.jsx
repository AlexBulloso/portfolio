import React, { useEffect, useMemo, useState } from "react";

const HomeButton = ({ i, name, currentState, onClickEvent }) => {
  const pad = useMemo(() => {
    if (name == currentState) {
      return "space";
    }
    return `${(Math.floor(Math.random() * 10) + 20) * 4}px`;
  }, [currentState]);

  const [clickState, setClickState] = useState(false);
  const onClickHandler = () => {
    if (!clickState) {
      setTimeout(() => {
        setClickState(true);
      }, 600);
      onClickEvent();
    } else {
      setClickState(false);
      setTimeout(() => {
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
        disabled={name != currentState && currentState != "home"}
        className={`
          ${
            !clickState && name == currentState
              ? "absolute top-0 opacity-0"
              : "opacity-100"
          }
          ${
            !clickState && currentState == "home"
              ? "opacity-100 cursor-pointer"
              : "opacity-0 cursor-default"
          }
          ${
            clickState && name == currentState
              ? "absolute top-0 opacity-100 cursor-pointer"
              : "opacity-0"
          }
          
          group
          mt-5 mb-5 -ml-25 mr-10 bg-blue-300/20
          hover:bg-blue-300/35 ease-in-out buttonAnim`}
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
