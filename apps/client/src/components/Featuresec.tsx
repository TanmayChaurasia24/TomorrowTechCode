"use client";
import { PinContainer } from "./ui/3d-pin";


export function AnimatedPinDemo(props: {
  title: string | undefined;
  source: string | undefined;
  cardtitle: string | undefined;
  cardcontent: string | "";
  imgurl: string | "";
}) {
  return (
    <div className="h-[30rem] w-full flex items-center justify-center ">
      <PinContainer title={props.title} href={props.source}>
        <div className="flex basis-full justify-between flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
            {props.cardtitle}
          </h3>
          <div className="text-base !m-0 !p-0 font-normal mb-2">
            <span className="text-slate-500 ">
              {props.cardcontent?.length > 100
                ? `${props.cardcontent.substring(0, 100)}...`
                : props.cardcontent}
            </span>
          </div>
          <img src={props.imgurl} alt="" height={400} width={400} />
        </div>
      </PinContainer>
    </div>
  );
}
