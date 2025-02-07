"use client";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

const BtnAppScrollTop = () => {
  const [open_, setOpen_] = useState(false);
  useEffect(() => {
    document.addEventListener("scroll", () => {
      if (window.scrollY >= 60) {
        setOpen_(true);
      } else {
        setOpen_(false);
      }
    });
  }, []);
  return (
    <motion.button
      onClick={() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.4 } }}
      style={{ display: open_ ? "flex" : "none" }}
      className=" z-20 size-10 bg-red-600 rounded hover:bg-red-700 justify-center items-center fixed bottom-2 right-2"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"
        />
      </svg>
    </motion.button>
  );
};

export default BtnAppScrollTop;
