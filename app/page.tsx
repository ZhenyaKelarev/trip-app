"use client";
import { Gallery } from "@/components/Gallery/Gallery";
import { ShortInfo } from "@/components/ShorInfo/ShortInfo";
import { Highlights } from "@/components/Highlights/Highlights";
import { Itinerary } from "@/components/Itinerary/Itinerary";
import { useRef } from "react";
export default function Home() {
  const itineraryRef = useRef<HTMLDivElement | null>(null);
  const scrollTo = () => {
    if (itineraryRef.current) {
      itineraryRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <main className="pb-9">
      <section>
        <div className="container">
          <Gallery />
        </div>
      </section>
      <section className="py-7">
        <div className="container">
          <ShortInfo func={scrollTo} />
        </div>
      </section>
      <section className="py-8">
        <div className="container">
          <Highlights />
        </div>
      </section>
      <section>
        <div className="container" ref={itineraryRef}>
          <Itinerary />
        </div>
      </section>
    </main>
  );
}
