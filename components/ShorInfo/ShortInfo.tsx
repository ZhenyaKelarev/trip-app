import React, { FC } from "react";

interface ShortInfoProps {
  func: () => void;
}

export const ShortInfo: FC<ShortInfoProps> = ({ func }) => {
  return (
    <>
      <div className="flex justify-between items-center p-6">
        <ul className="grid grid-cols-3 max-w-fit w-full">
          <li>
            <p className="flex flex-col">
              <span className="text-opacity-gray80 text-base leading-normal">
                Trip duration
              </span>
              <span className="text-main text-black-main font-bold">
                7 days
              </span>
            </p>
          </li>
          <li>
            <p className="flex flex-col">
              <span className="text-opacity-gray80 text-base leading-normal">
                Exploration
              </span>
              <span className="text-main text-black-main font-bold">
                4 regions
              </span>
            </p>
          </li>
          <li>
            <p className="flex flex-col">
              <span className="text-opacity-gray80 text-base leading-normal">
                Flight
              </span>
              <span className="text-main text-black-main font-bold">
                7h 20m from SFO
              </span>
            </p>
          </li>
        </ul>
        <button
          onClick={func}
          className="text-purple-main font-bold text-base leading-8"
        >
          View itinerary
        </button>
      </div>
    </>
  );
};
