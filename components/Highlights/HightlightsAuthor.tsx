import Image from "next/image";
import React from "react";

export const HightlightsAuthor = () => {
  return (
    <div className="flex gap-4 items-center">
      <Image
        src="/images/avatar.jpg"
        width={32}
        height={32}
        sizes="responsive"
        alt="author avatar"
      />
      <div>
        <p className="text-main font-bold leading-normal text-black-main">
          Curated by Sandra
        </p>
        <p className="text-base font-main leding-normal text-opacity-gray80">
          Fyno expert
        </p>
      </div>
    </div>
  );
};
