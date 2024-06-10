"use client";
import React, { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import galleryItems from "./GalleryItems.json";

export const Gallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const openLightbox = (index: number) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setIsOpen(false);
    setPhotoIndex(0);
  };

  return (
    <>
      <div className="flex gap-1 rounded">
        <div className="w-1/2 flex-shrink-0 rounded">
          <Image
            className="w-full h-full rounded-l-[24px] cursor-pointer"
            sizes="responsive"
            src={galleryItems[0].src}
            width={100}
            height={100}
            alt={galleryItems[0].alt}
            onClick={() => openLightbox(0)}
          />
        </div>
        <div className="grid grid-cols-2 w-1/2 flex-shrink-0 gap-1">
          {galleryItems.slice(1, 5).map(({ src, alt }, index) => (
            <Image
              className="w-full h-full cursor-pointer"
              key={src}
              src={src}
              sizes="responsive"
              width={25}
              height={25}
              alt={alt}
              onClick={() => openLightbox(index + 1)}
              style={{
                borderTopRightRadius: `${index === 1 ? "24px" : ""}`,
                borderBottomRightRadius: `${index === 3 ? "24px" : ""}`,
              }}
            />
          ))}
        </div>
      </div>
      {isOpen && (
        <Lightbox
          open={isOpen}
          close={closeLightbox}
          slides={galleryItems.map((item) => ({ src: item.src }))}
          index={photoIndex}
          on={{
            click: closeLightbox,
          }}
        />
      )}
    </>
  );
};
