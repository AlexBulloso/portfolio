import React, { useEffect, useMemo, useState } from "react";
import ContentAbout from "./contents/contentAbout";
import ContentResources from "./contents/contentResources";

const Content = ({ currentState, fadeOutStateArr }) => {
  const [isVisible, setIsVisible] = useState(false);

  const renderContent = () => {
    switch (currentState) {
      case "about_me":
        console.log("about_me");
        return <ContentAbout />;
      case "my_resources":
        console.log("my_resources");
        return <ContentResources />;
      default:
        console.log("null");
        return null;
    }
  };
  useEffect(() => {
    if (currentState != "home" && !fadeOutStateArr[currentState]) {
      setTimeout(() => setIsVisible(true), 10);
      return () => clearTimeout();
    } else {
      setIsVisible(false);
    }
  }, [currentState, fadeOutStateArr]);

  {
  }

  return (
    <div
      className={`flex md:flex-row flex-col fixed justify-center align-middle items-center transition-opacity duration-700 
      ${
        isVisible
          ? "opacity-100 z-100 pointer-events-auto"
          : "opacity-0 z-0 pointer-events-none"
      }
      ${
        fadeOutStateArr["about_me"] && currentState == "about_me"
          ? "opacity-0 z-0 pointer-events-none"
          : ""
      }
`}
    >
      {renderContent()}
    </div>
  );
};

export default Content;
