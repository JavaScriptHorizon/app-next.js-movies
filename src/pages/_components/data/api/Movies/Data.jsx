"use client";

import Image from "next/image";
import { Suspense, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "motion/react";
import Loader from "../../loader";
import CardItem from "./card/Card-Item";
import Overview from "./card/overview";
const Data = () => {
  const [ref, inView] = useInView();
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    let url = `${
      process.env.API_ALL_DAY_MOVIES ||
      "https://api.themoviedb.org/3/trending/all/day"
    }?language=en-US&page=${page}&sort_by=popularity.desc`;
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMzc3MTBjZGI2ZDQyMzhkMmZkMGExNzRiNzhkNjU5YiIsIm5iZiI6MTczNzc0OTgxOC40MDMsInN1YiI6IjY3OTNmNTNhNDRlZjM5Yzg2MDE4NjM2ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CbXEmDQNno1jS6SeJpMbDl3AHgO6Iy33AARSPmp0NUQ",
      },
    };
    if (inView) {
      setPage(page + 1);
      fetch(url, options)
        .then((response) => response.json())
        .then((dataF) => {
          console.log(dataF);
          setData([...data, [...dataF.results]]);
          // console.log(data);
        })
        .catch((err) => console.error(err));
    }
  }, [inView]);
  const [title, setTitle] = useState("");
  const [bgUrl, setBgUrl] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [open_, setOpen_] = useState(false);
  return (
    <>
      <section className="w-full h-auto grid grid-cols-1 py-4 gap-4 ">
        <div className="w-full h-20 flex justify-center items-center">
          <h1 className="text-4xl text-red-600 font-bold">All Movies</h1>
        </div>
        {data.map((item) => (
          <>
            <div className="w-full px-4 gap-4 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:grid-cols-4">
              {item.map((item, index) => (
                <>
                  <CardItem
                    onClick={(e) => {
                      setBgUrl(
                        `https://image.tmdb.org/t/p/w500${item.backdrop_path}`
                      );
                      setImgUrl(
                        `https://image.tmdb.org/t/p/w500${item.poster_path}`
                      );
                      setOpen_(true);
                      setTitle(item.overview);
                    }}
                    item={item}
                    index={index}
                    data={item}
                  />
                </>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1, transition: { duration: 1 } }}
              className="hr h-0.5 flex items-center justify-between w-full shadow relative text-red-600/20 bg-red-600/20"
            >
              <span className=" size-3 bg-[#2C0808] absolute -left-2 rounded-full"></span>
              <span className=" size-3 bg-[#2C0808] absolute -right-2 rounded-full"></span>
            </motion.div>
          </>
        ))}
        <Overview
          title={title}
          setOpen_={setOpen_}
          imgUrl={imgUrl}
          bgUrl={bgUrl}
          open_={open_}
        />
      </section>
      <Loader ref={ref} />
    </>
  );
};

export default Data;
