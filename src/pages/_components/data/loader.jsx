import React from 'react';
import { DotLoader } from 'react-spinners';

const Loader = ({ref}) => {
    return (
      <div
        ref={ref}
        className="w-full h-28 flex justify-center items-center bg-transparent"
      >
        <DotLoader loading size={50} color="#ff0000" />
      </div>
    );
}

export default Loader;
