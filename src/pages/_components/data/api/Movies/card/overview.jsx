"use client";

import { useEffect } from "react";

const Overview = ({
  title,
  bgUrl,
  imgUrl,
  open_ = false,
  setOpen_ = () => {},
}) => {
  useEffect(() => {
    if (open_) {
      document.body.style.overflowY = "hidden";
    }else{
      document.body.style.overflowY = "auto";
    }
  }, [open_]);
  return (
    <div
      style={{ display: open_ ? "flex" : "none" }}
      className=" fixed w-full min-h-dvh overflow-x-hidden p-6 overflow-y-scroll  inset-0 justify-center items-start  z-30 bg-black/80"
    >
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),url(${bgUrl})`,
        }}
        className={` w-full lg:w-[80%] h-auto bg-cover relative bg-center z-10 p-4 border border-red-600 text-white rounded-lg`}
      >
        <h1 className="lg:text-4xl md:text-3xl text-2xl text-red-600 font-bold">Overview</h1>
        <div className="w-full flex-wrap flex gap-4 justify-between h-auto pt-4">
          <p className="lg:text-xl md:text-lg text-sm capitalize text-white/80">{title}</p>
          <div className="w-full sm:w-1/2 h-72 flex-shrink-0 rounded-lg bg-black">
            <img
              src={imgUrl}
              alt="movie"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
        <button
          onClick={() => setOpen_(false)}
          className="absolute lg:-top-3.5 lg:--right-3.5 md:-top-2.5 md:-right-2.5 -top-1.5 -right-1.5 flex justify-center items-center lg:size-10 md:size-8 size-6 rounded-full bg-red-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="lg:size-8 md:size-6 size-4"
          >
            <path
              fillRule="evenodd"
              d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      <div
        onClick={() => {
          setOpen_(false);
        }}
        className="w-full absolute inset-0 h-full"
      ></div>
    </div>
  );
};

export default Overview;
