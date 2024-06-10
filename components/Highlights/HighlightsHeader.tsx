import React from "react";
import Wishlist from "@/styles/images/icons/wishlist.svg";
import Share from "@/styles/images/icons/share.svg";
export const HighlightsHeader = () => {
  return (
    <div className="flex justify-between items-center">
      <h2 className="text-lg text-black-main leading-9 font-bold">
        Iceland&apos;s Highlights
      </h2>
      <div className="flex gap-[10px]">
        <label className="transition has-[:checked]:border-purple-main group hover:bg-black-main hover:text-white-main flex cursor-pointer items-center gap-2 border border-opacity-gray px-3 rounded-[10px]">
          <input
            className="visually-hidden peer checked:text-white-main"
            type="checkbox"
            name="wishlist"
          />
          <Wishlist className="transition peer-checked:text-purple-main w-3 h-4" />
          <span className="transition text-base peer-checked:text-purple-main  text-black-main leading-8 font-bold group-hover:text-white-main">
            Add to wishlist
          </span>
        </label>
        <button className="transition flex items-center justify-between gap-[10px] border border-opacity-gray px-3 rounded-[10px] group hover:bg-black-main hover:text-white-main">
          <Share className="transition" />
          <span className="transition text-base leading-8 font-bold text-black-main group-hover:text-white-main">
            Share
          </span>
        </button>
      </div>
    </div>
  );
};
