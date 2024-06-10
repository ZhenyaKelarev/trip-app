"use client";
import { useState } from "react";
import days from "./days.json";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
  Transition,
} from "@headlessui/react";

export const HeaderPicker = () => {
  const [selectedVariant, setSelectedVariant] = useState(days[2]);
  return (
    <>
      <ul className="flex">
        <li className="rounded-l-full border-opacity-gray border border-r-[0] text-base leading-8 text-black-main px-7">
          Trips
        </li>
        <li className="text-base border-opacity-gray border leading-8 text-black-main px-7">
          Iceland
        </li>
        <li className="transition text-base border-opacity-gray border rounded-r-full border-l-[0] leading-8 text-black-main px-7 hover:bg-black-main hover:text-white-main">
          <Listbox
            className="relative "
            as="div"
            value={selectedVariant}
            onChange={setSelectedVariant}
          >
            <ListboxButton className="text-base">
              {selectedVariant.text}
            </ListboxButton>
            <Transition
              enter="duration-200 ease-out"
              enterFrom="scale-95 opacity-0"
              enterTo="scale-100 opacity-100"
              leave="duration-300 ease-out"
              leaveFrom="scale-100 opacity-100"
              leaveTo="scale-95 opacity-0"
            >
              <ListboxOptions
                className="absolute bg-white-main w-[100px]  -left-[65%] rounded-b-[10px] shadow-base  flex flex-col gap-2"
                as="ul"
              >
                {days.map((item) => (
                  <ListboxOption
                    className="transition hover:text-white-main hover:bg-black-main cursor-pointer w-full  text-center text-base border-opacity-gray  leading-8 text-black-main"
                    as="li"
                    key={item.text}
                    value={item}
                  >
                    {item.text}
                  </ListboxOption>
                ))}
              </ListboxOptions>
            </Transition>
          </Listbox>
        </li>
      </ul>
    </>
  );
};
