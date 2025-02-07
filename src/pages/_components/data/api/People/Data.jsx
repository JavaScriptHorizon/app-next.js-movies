import { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";



const Data = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    let url = `${
      process.env.API_ALL_DAY_PEOPLE ||
      "https://api.themoviedb.org/3/trending/person/day"
    }?language=en-US&page=${page}`;
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMzc3MTBjZGI2ZDQyMzhkMmZkMGExNzRiNzhkNjU5YiIsIm5iZiI6MTczNzc0OTgxOC40MDMsInN1YiI6IjY3OTNmNTNhNDRlZjM5Yzg2MDE4NjM2ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CbXEmDQNno1jS6SeJpMbDl3AHgO6Iy33AARSPmp0NUQ",
      },
    };
    fetch(url, options)
      .then((response) => response.json())
      .then((dataF) => {
        console.log(dataF);
        setData([...data, ...dataF.results]);
        // console.log(data);
      })
      .catch((err) => console.error(err));
  }, [page]);
  return (
    <div className="w-full flex flex-col gap-4 py-4 relative h-auto bg-red-600/0">
      <div className="w-full h-auto flex justify-center items-center">
        <h1 className="text-4xl text-red-600 font-bold">All People</h1>
      </div>
      <Swiper
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={-60}
        grabCursor={true}
        className="mySwiper w-full flex items-center  h-52"
      >
        {data.map((item, index) => (
          <>
            <SwiperSlide className="w-full flex justify-center items-center" key={index}>
              <div className="w-full h-full flex-shrink-0 flex flex-col justify-center items-center gap-2">
                <img
                  src={`https://image.tmdb.org/t/p/w500${item.profile_path}`}
                  className="size-28 flex-shrink-0 pointer-events-none rounded-full object-cover"
                  alt={item.name}
                />
                <h1 className="lg:text-xl md:text-lg sm:text-sm sm:block hidden text-center text-white font-semibold ">
                  {item.name}
                </h1>
              </div>
            </SwiperSlide>
          </>
        ))}
        <SwiperSlide>
          <div
            onClick={() => setPage(page + 1)}
            className="w-full cursor-pointer active:scale-95 flex-shrink-0 flex flex-col justify-center items-center gap-2"
          >
            <div className="size-28 bg-black flex justify-center items-center pointer-events-none rounded-full object-cover">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6"
              >
                <path d="M5.25 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM2.25 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM18.75 7.5a.75.75 0 0 0-1.5 0v2.25H15a.75.75 0 0 0 0 1.5h2.25v2.25a.75.75 0 0 0 1.5 0v-2.25H21a.75.75 0 0 0 0-1.5h-2.25V7.5Z" />
              </svg>
            </div>
            <h1 className="text-lg text-white font-semibold ">Load More</h1>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Data;
