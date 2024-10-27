"use client";
import { useNavigate } from "react-router-dom";
export function BackgroundGradientDemo(props: {
  title: string;
  content: string;
  Author: string;
  blogid: string;
}) {
  const navigate = useNavigate();
  const handleblog = () => {
    navigate(`/blog/${props.blogid}`)
  };
  // 6d0be5d2016b4f0c8f52be294656ed94
  return (
    <div>
      <div className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-zinc-900 border border-white h-[17rem] flex justify-evenly flex-col items-center">
        <div className="">
          <p className="text-base sm:text-xl text-neutral-200 mt-4">
            {props.title.length > 50
              ? props.title.substring(0, 50) + "..."
              : props.title}
          </p>

          <p className="mt-2 text-sm text-neutral-400">
            {props.content.length > 200
              ? props.content.substring(0, 100) + "..."
              : props.content}
          </p>
        </div>
        <div className="flex justify-center items-center gap-4">
          <button
            className="rounded-full p-2 mt-3 text-white flex items-center text-xs font-bold bg-blue-500 justify-center"
            onClick={handleblog}
          >
            Read More
          </button>
        </div>
      </div>
    </div>
  );
}
