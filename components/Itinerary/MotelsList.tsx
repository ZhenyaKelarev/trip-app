import React, { FC } from "react";
import { MotelElement } from "./MotelElement";
import { Slider } from "../Slider/Slider";

interface MotelListPorps {
  list: any[];
}

export const MotelsList: FC<MotelListPorps> = ({ list }) => {
  return (
    <div>
      <h3 className="text-17  font-bold leading-6 py-6">Where to stay</h3>
      <ul>
        <Slider>
          {list.map((el) => (
            <MotelElement key={el.name} element={el} />
          ))}
        </Slider>
      </ul>
    </div>
  );
};
