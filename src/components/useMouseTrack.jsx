import React from "react";
import { useState, useEffect, useRef } from "react";

const useMouseTrack = (ref, currentState) => {
  // if (currentState != "home") {
  //   return;
  // }
  const animRef = useRef(null);
  useEffect(() => {
    if (!ref.current) {
      return;
    }
    const handleMove = (event) => {
      const [maxX, maxY] = [
        document.documentElement.clientWidth,
        document.documentElement.clientHeight,
      ];
      const [curX, curY] = [event.clientX, event.clientY];

      const xScale = 35;
      const newX = curX / (maxX / xScale) + (360 - xScale / 2);

      const yScale = 35;
      const newY = curY / (maxY / yScale) + (360 - yScale / 2);

      const zScale = 2;
      const newZ =
        (((curX - maxX / 2) * -(curY - maxY / 2)) / (maxX * maxY)) *
          (zScale / 0.25) +
        360;
      // (curX - maxX / 2) * -(curY - maxY / 2) ~ converts X/Y to make center of screen origin
      // / (maxX * maxY) ~ scales to full screen

      if (animRef.current) {
        cancelAnimationFrame(animRef.current);
      }
      //translateX(${(newX - (360 - xScale / 2)) / 2}px)
      //translateY(-${(newY - (360 - yScale / 2)) / 1.5}px)
      animRef.current = requestAnimationFrame(() => {
        ref.current.style.transform = `

        translateX(${(newX - (360 - xScale / 2)) / 2}px)
        translateY(${(newY - (360 - yScale / 2)) / 1.5}px)

        rotateY(-${newX}deg) 
        rotateX(${newY}deg) 
        rotateZ(-${newZ}deg)`;
      });
    };

    // const handleClick = (event) => {
    //   console.log("clicked!");
    // };

    document.addEventListener("mousemove", handleMove);
    //document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("mousemove", handleMove);
      //document.removeEventListener("click", handleClick);
      if (animRef.current) {
        cancelAnimationFrame(animRef.current);
      }
    };
  }, [ref, currentState]);
};

export default useMouseTrack;
