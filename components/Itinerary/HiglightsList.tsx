import { FC, useState } from "react";
import MarckedList from "@/styles/images/icons/markedList.svg";
import { ItineraryElement } from "./ItineraryElement";
import { DaysPlanModal } from "../DaysPlan/DaysPlanModal";
import { Slider } from "../Slider/Slider";

interface HiglightsListProps {
  list: {
    name: string;
    duration: string;
    type: string[];
    curator_pick: boolean;
    img: string;
  }[];
  index: number;
}

export const HiglightsList: FC<HiglightsListProps> = ({ list, index }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className="pb-4 ">
      <div className="flex justify-between items-center py-6">
        <h3 className="text-17  font-bold leading-6">Region highlights</h3>
        <button
          onClick={() => setIsOpen(true)}
          className="transition flex items-center text-base text-black-main hover:text-white-main hover:bg-black-main leading-8 pr-3 pl-1 border border-opacity-gray rounded-[10px]"
        >
          <MarckedList />
          Show daily plan
        </button>
      </div>
      <ul >
        <Slider>
          {list.map((el) => (
            <ItineraryElement key={el.name} element={el} />
          ))}
        </Slider>
      </ul>
      <DaysPlanModal isOpen={isOpen} setIsOpen={setIsOpen} index={index} />
    </div>
  );
};
