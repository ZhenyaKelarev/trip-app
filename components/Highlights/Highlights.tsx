import React from "react";
import { HighlightsHeader } from "./HighlightsHeader";
import { HightlightsAuthor } from "./HightlightsAuthor";
import { HighlightInfo } from "./HighlightInfo";

export const Highlights = () => {
  return (
    <div className="flex gap-4 flex-col">
      <HighlightsHeader />
      <HightlightsAuthor />
      <HighlightInfo />
    </div>
  );
};
