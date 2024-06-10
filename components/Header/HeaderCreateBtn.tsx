import React from "react";
import Plus from "@/styles/images/icons/plus.svg";
export const HeaderCreateBtn = () => {
  return (
    <div>
      <button className="transition group flex justify-between items-center text-base leading-8 px-3 border rounded-full border-opacity-gray hover:bg-black-main hover:text-white-main">
        <Plus fill="currentColor" />
        Create
      </button>
    </div>
  );
};
