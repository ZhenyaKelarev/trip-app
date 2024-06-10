import { Dialog, DialogPanel, Transition } from "@headlessui/react";
import React, { Dispatch, FC, SetStateAction } from "react";
import plans from "./plans.json";
import Image from "next/image";
import Stars from "@/styles/images/icons/stars.svg";
import Direction from "@/styles/images/icons/directions.svg";

interface DaysPlanModalProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  index: number;
}

export const DaysPlanModal: FC<DaysPlanModalProps> = ({
  isOpen,
  setIsOpen,
  index,
}) => {
  return (
    <Transition
      show={isOpen}
      enter="duration-200 ease-out"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="duration-300 ease-out"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
        <DialogPanel>
          <div className="fixed inset-0 flex w-screen items-center justify-center p-4 bg-opacity-gray30 z-50">
            <div className=" bg-white-main w-[697px] py-4 rounded-[10px] px-5 icon-modal  pl-12 z-[999999999] after:block after:w-[2px] after:h-[95%] after:z-30 after:absolute after:top-3 after:left-6 after:bg-opacity-gray18 ">
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-0 right-0 text-17 leading-8 hover:bg-black-main hover:text-white-main transition px-3 rounded-[10px]"
              >
                X
              </button>
              <div className="flex justify-between py-4 z-50">
                <h3 className="text-17 leading-6 font-bold text-black-main z-50">
                  {plans[index].length} days plan
                </h3>
                <button
                  onClick={() => setIsOpen(false)}
                  className="z-50 transition text-base font-bold flex items-center border border-opacity-gray rounded-[10px] pr-3 text-black-main hover:text-white-main hover:bg-black-main"
                >
                  <Stars />
                  <span>Show highlights</span>
                </button>
              </div>
              <div className="flex flex-col gap-4 z-50">
                {plans[index].map((el) => (
                  <div key={el.travel_time}>
                    <div className="flex justify-between">
                      <p className="text-black-main text-17 leading-6 font-bold">
                        Day {el.day}
                      </p>
                      <div className="flex gap-2">
                        <span className="flex items-center text-13 leading-[18px]">
                          <Direction />
                          {el.travel_time}
                        </span>
                        <button className="transition flex gap-1 py-3 px-1 hover:bg-black-main rounded-[10px] group">
                          <span className="transition block w-1 h-1 bg-gray-main rounded-full group-hover:bg-white-main"></span>
                          <span className="transition block w-1 h-1 bg-gray-main rounded-full group-hover:bg-white-main"></span>
                          <span className="transition block w-1 h-1 bg-gray-main rounded-full group-hover:bg-white-main"></span>
                        </button>
                      </div>
                    </div>
                    <div>
                      {el.activities.map((activity) => (
                        <div className="flex w-full py-3" key={activity.name}>
                          <div className="relative pt-[calc(96px / 132px)] w-[96px] h-[132px] mr-6">
                            <Image
                              className="absolute top-0 left-0 w-full h-full  object-center object-cover rounded-[20px]"
                              src={activity.img}
                              width={96}
                              height={132}
                              sizes="responsive"
                              alt={activity.type[0]}
                            />
                          </div>
                          <div className="my-5 flex flex-col gap-2">
                            <p className="text-17 font-bold text-black-main leading-6">
                              {activity.name}
                            </p>
                            {activity.curator_pick ? (
                              <p className="px-3 py-[7px] text-13 leading-[18px] text-opacity-gray80">
                                Curators pick
                              </p>
                            ) : (
                              ""
                            )}
                            <p className="text-base leading-5 text-opacity-gray80">
                              {activity.duration}
                              {"·"}
                              {activity.type.map((el) => (
                                <span key={el}>{el}</span>
                              ))}
                            </p>
                          </div>
                          <div className="flex gap-4 ml-auto items-center">
                            <button className="w-[30px] h-[30px] transition flex flex-col gap-1 px-2 py-3 rounded-[10px] group hover:bg-black-main">
                              <span className="transition block w-3.5 h-[2px] bg-gray-main group-hover:bg-white-main"></span>
                              <span className="transition block w-3.5 h-[2px] bg-gray-main group-hover:bg-white-main"></span>
                            </button>
                            <button className="w-[30px] h-[30px] transition flex gap-1 py-3 px-1 hover:bg-black-main rounded-[10px] group items-center justify-center">
                              <span className="transition block w-1 h-1 bg-gray-main rounded-full group-hover:bg-white-main"></span>
                              <span className="transition block w-1 h-1 bg-gray-main rounded-full group-hover:bg-white-main"></span>
                              <span className="transition block w-1 h-1 bg-gray-main rounded-full group-hover:bg-white-main"></span>
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </Transition>
  );
};
