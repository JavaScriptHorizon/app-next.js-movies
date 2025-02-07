import { motion } from "motion/react";
import Image from "next/image";

const CardItem = ({ item, index, data, ...props }) => {
  return (
    <div
      key={index}
      {...props}
      className="relative overflow-hidden cursor-pointer bg-red-600/10 w-full h-96 lg:h-[460px] rounded-lg"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: {
            duration: 1.2,
            delay: ((index+1) * 0.16),
          },
        }}
        className="w-full h-full"
      >
        <Image
          src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
          blurDataURL="https://image.tmdb.org/t/p/w500"
          placeholder="blur"
          className="object-cover pointer-events-none"
          alt={item.title}
          priority
          fill
        />
      </motion.div>
      <span className="absolute flex items-center gap-1 top-2 left-2 text-md font-medium text-white bg-red-600 py-1 px-2 rounded-md">
        {item.vote_average}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-6"
        >
          <path
            fillRule="evenodd"
            d="M2.25 13.5a8.25 8.25 0 0 1 8.25-8.25.75.75 0 0 1 .75.75v6.75H18a.75.75 0 0 1 .75.75 8.25 8.25 0 0 1-16.5 0Z"
            clipRule="evenodd"
          />
          <path
            fillRule="evenodd"
            d="M12.75 3a.75.75 0 0 1 .75-.75 8.25 8.25 0 0 1 8.25 8.25.75.75 0 0 1-.75.75h-7.5a.75.75 0 0 1-.75-.75V3Z"
            clipRule="evenodd"
          />
        </svg>
      </span>
    </div>
  );
};

export default CardItem;
