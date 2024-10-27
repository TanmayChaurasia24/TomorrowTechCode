"use client";

import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

export function ThreeDCardDemo(props: any) {
  const currentDate = new Date(Date.now());

  const date = currentDate.getDate();
  const month = currentDate.getMonth() + 1;
  const year = currentDate.getFullYear();

  return (
    <>
      <CardContainer className="inter-var">
        <CardBody className="relative group/card hover:shadow-2xl hover:shadow-emerald-500/[0.1] bg-neutral-800 border-white/[0.2] w-[80vw] sm:w-[60vw] md:w-[30vw] lg:w-[25rem] h-auto rounded-xl p-6 border">
          <CardItem translateZ="50" className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
            {props.post}
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-xs sm:text-sm max-w-sm mt-2 text-neutral-300"
          >
            {props.company}, {props.location}
          </CardItem>
          <div className="flex justify-between">
            <CardItem
              as="p"
              translateZ="60"
              className="text-xs sm:text-sm max-w-sm mt-2 font-bold text-green-600"
            >
              {props.stipend}
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-xs sm:text-sm max-w-sm mt-2 text-neutral-300"
            >
              Posted on: {`${date}-${month}-${year}`}
            </CardItem>
          </div>
          <div className="flex justify-between items-center mt-6 sm:mt-8">
            <CardItem
              translateZ={20}
              target="__blank"
              className="px-2 sm:px-4 py-1 sm:py-2 rounded-xl text-xs font-normal bg-black text-white"
            >
              {props.type}
            </CardItem>
            <CardItem
              translateZ={20}
              as="button"
              className="px-2 sm:px-4 py-1 sm:py-2 rounded-xl bg-blue-300 text-black text-xs font-bold"
            >
              Apply
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
    </>
  );
}
