import React from "react";
import { ItineraryFlyInfo } from "./ItineraryFlyInfo";
import { ItineraryList } from "./ItineraryList";
import { ItineraryHeader } from "./ItineraryHeader";

export const Itinerary = () => {
  return (
    <>
      <div className="py-6">
        <ItineraryHeader />
      </div>
      <div className="pb-6">
        <ItineraryFlyInfo />
      </div>
      <ItineraryList />
    </>
  );
};
