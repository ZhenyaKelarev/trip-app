import React from "react";
import { HeaderPicker } from "./HeaderPicker";
import { HeaderCreateBtn } from "./HeaderCreateBtn";

export const Header = () => {
  return (
    <header className="py-5">
      <div className="container flex justify-between items-center">
        <HeaderPicker />
        <HeaderCreateBtn />
      </div>
    </header>
  );
};
