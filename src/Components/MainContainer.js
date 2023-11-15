import React from "react";
import Buttonlists from "./Buttonlists";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
  return (
    <div className="overflow-x-auto">
      <Buttonlists />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
