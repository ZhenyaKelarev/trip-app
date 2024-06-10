import Plane from "@/styles/images/icons/plane.svg";
import Calendar from "@/styles/images/icons/calendar.svg";
import Person from "@/styles/images/icons/person.svg";
export const ItineraryFlyInfo = () => {
  return (
    <div className="bg-gray-secondary flex py-6 pl-6 rounded-[10px] items-center gap-4 px-3">
      <div className="bg-white-main px-4 py-2.5 rounded-[8px] border border-opacity-gray">
        <p className="text-base leading-normal font-main text-opacity-gray80">
          Reykjavík, KEF
        </p>
      </div>
      <div>
        <Plane />
      </div>
      <div className="bg-white-main px-4 py-2.5 rounded-[8px] border border-opacity-gray">
        <p className="text-base leading-normal font-main text-opacity-gray80">
          San Francisco, SFO
        </p>
      </div>
      <div className="bg-white-main px-4 py-2.5 rounded-[8px] border border-opacity-gray flex gap-2.5 items-center">
        <Calendar />
        <p className="text-base leading-normal font-main text-opacity-gray80">
          Jul 03 – Jul 11
        </p>
      </div>
      <div className="bg-white-main px-4 py-2.5 rounded-[8px] border border-opacity-gray flex gap-2.5 items-center">
        <Person />
        <p className="text-base leading-normal font-main text-opacity-gray80">
          2
        </p>
      </div>
    </div>
  );
};
