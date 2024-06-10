import itineraryList from "./itinerary.json";
import { HiglightsList } from "./HiglightsList";
import { MotelsList } from "./MotelsList";

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

export const ItineraryList = () => {
  return (
    <>
      <ul className="flex flex-col gap-6">
        {itineraryList.map((itinerary, index) => (
          <div key={itinerary.title} className="flex  flex-col gap-2 pl-10">
            <div
              data-content={alphabet[index]}
              className="icon-before after:block after:w-[1px] after:h-full after:absolute after:-left-[28px] after:top-7 after:bg-opacity-gray18 "
            >
              <h2 className="text-xs font-bold text-black-main">
                {itinerary.title}
              </h2>
              <ul className="flex gap-4">
                {itinerary.subtitles.map((el) => (
                  <li
                    className="text-base font-main leading-normal text-opacity-gray50"
                    key={el}
                  >
                    {el}
                  </li>
                ))}
              </ul>
              <p className="text-main text-opacity-gray80 font-main leading-normal mt-2">
                {itinerary.dis}
              </p>
            </div>
            <div className="icon-highlights after:block after:w-[1px] after:h-[110%] after:absolute after:-left-[28px] after:top-0 after:bg-opacity-gray18">
              <HiglightsList list={itinerary.region_highlights} index={index} />
            </div>
            <div className="icon-motels">
              <MotelsList list={itinerary.motels} />
            </div>
          </div>
        ))}
      </ul>
    </>
  );
};
