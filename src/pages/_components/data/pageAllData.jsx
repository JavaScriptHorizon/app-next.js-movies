import React from "react";
import DataMovies from "./api/Movies/Data";
import DataPeople from "./api/People/Data";

const PageAllData = () => {
  return (
    <>
      <section className="w-full h-auto">
      <DataPeople />
      <DataMovies />
      </section>
    </>
  );
};

export default PageAllData;
