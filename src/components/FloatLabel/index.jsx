import React from "react";

import "./index.css";

export const FloatLabel = () => {
  return (
    <div className="h-full w-full mt-[100px]">
      <div className="m-auto w-fit bg-gray-100 p-4">
        <form action="">
          <div className="mb-2 relative">
            <input type="text" required className="input" />
            <label className="absolute left-0 bottom-0 duration-100 ease-linear">
              label
            </label>
          </div>
          <div className="mb-2 relative">
            <input type="text" required className="input" />
            <label className="absolute left-0 bottom-0 duration-100 ease-linear">
              label
            </label>
          </div>
          <input type="submit" value="submit" />
        </form>
      </div>
    </div>
  );
};
