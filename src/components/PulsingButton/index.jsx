import React from "react";

export const PulsingButton = () => {
  return (
    <div className="h-full w-full mt-[100px] text-center">
      <div className="inline-block bg-lime-800 cursor-pointer relative">
        <a className="p-4 block w-[200px] text-white" href="/PulsingButton">
          Pulsing Button
        </a>
        <div className="absolute w-full h-full bg-transparent outline outline-lime-400 top-0 animate-pulseButton" />
      </div>
    </div>
  );
};
