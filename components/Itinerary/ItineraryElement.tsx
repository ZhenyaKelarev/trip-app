import { FC } from "react";
import Marked from "@/styles/images/icons/marked.svg";
import Image from "next/image";

interface ItineraryElementProps {
  element: {
    name: string;
    duration: string;
    type: string[];
    curator_pick: boolean;
    img: string;
  };
}

export const ItineraryElement: FC<ItineraryElementProps> = ({ element }) => {
  const { curator_pick, img, name, duration, type } = element;
  return (
    <li className="w-[216px]">
      <div className="relative pt-[calc(216px / 292px)] w-[216px] h-[292px]">
        {curator_pick ? (
          <>
            <p className="text-13 leading-[18px] text-opacity-gray80 absolute z-40 top-4 left-4 py-[7px] px-3 bg-opacity-white50 rounded-md">
              Curator&apos;s pick
            </p>
            <div className="absolute top-3 right-3 z-40">
              <Marked />
            </div>
          </>
        ) : (
          ""
        )}
        <Image
          className="absolute top-0 left-0 w-full h-full  object-center object-cover rounded-[20px]"
          src={img}
          width={216}
          height={292}
          alt="higlights1"
          sizes="responsive"
          loading="lazy"
        />
      </div>
      <div className="p-2 flex flex-col gap-1 w-full">
        <h3 className="text-17 leading-6 font-bold text-black-main truncate">
          {name}
        </h3>
        <p className="text-base font-main leading-normal text-opacity-gray80">
          {duration}
          {" · "}
          {type.map((el, index) => (
            <span key={el}>
              {el}
              {index !== type.length ? "" : ","}
            </span>
          ))}
        </p>
      </div>
    </li>
  );
};
