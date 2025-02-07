import React from "react";

const Fog = () => {
  return (
    <>
      <div className="w-full z-10 pointer-events-none fixed top-0 left-0 right-0 h-20 bg-gradient-to-t from-transparent to-black" />
      <div className="w-full z-10 pointer-events-none fixed bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-black" />
    </>
  );
};

export default Fog;
