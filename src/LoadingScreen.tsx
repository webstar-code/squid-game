import React from "react";
import { main } from "./images";

const LoadingScreen: React.FC = () => {
  return (
    <div className="w-full bg-gradient-to-br  from-[#0F6E5B] via-[#0DB3B5] to-[#F6E5D3] text-white h-screen font-bold flex flex-col justify-center items-center">
      {/* Loading Image */}
      <img
        src={main}
        alt="Loading Character"
        className="w-24 h-24 mb-4 animate-bounce rounded-full"
      />

      {/* Loading Text */}
      <h1 className="text-2xl font-extrabold text-center animate-pulse text-[#000000]">
        Loading...
      </h1>
    </div>
  );
};

export default LoadingScreen;
