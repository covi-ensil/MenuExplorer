import React from "react";

const Toggle = ({ isDarkMode, handleToggleClick }) => {

  return (
    <div className="relative inline-block">
      <div
        className={`${
          isDarkMode ? "bg-black" : "bg-gray-300"
        } w-8 h-[17.5px] rounded-full p-1 duration-300 ease-in-out cursor-pointer`}
        onClick={(e) => handleToggleClick(e)}
      >
        <div
          className={`${
            isDarkMode ? "translate-x-[14px]" : "translate-x-[1px]"
          } bg-white w-[10px] h-[10px] rounded-full shadow-md duration-300 ease-in-out`}
          onClick={(e) => handleToggleClick(e)}
        ></div>
      </div>
    </div>
  );
};

export default Toggle;