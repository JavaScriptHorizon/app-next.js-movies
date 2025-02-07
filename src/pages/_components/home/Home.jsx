const Home = () => {
  return (
    <section className="w-full h-auto">
      <div
        className="relative h-[60vh] md:h-[80vh] flex justify-center items-center bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url('https://assets.nflxext.com/ffe/siteui/vlv3/7a8c0067-a424-4e04-85f8-9e25a49a86ed/web/EG-ar-20250120-TRIFECTA-perspective_6bef20cb-8925-46c6-8188-9d1f6fc85c76_large.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
        <div className="z-[2] relative text-center">
          <h1 className="text-3xl lg:text-6xl text-red-600 md:text-5xl font-bold mb-4">
            Featured Show
          </h1>
          <p className="text-sm md:text-lg mt-3.5 lg:text-xl mx-auto max-w-[60%] mb-4">
            Dive into the world of thrill, drama, and adventure with our
            featured series.
          </p>
          <button className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded-md text-sm md:text-base font-semibold">
            Watch Now
          </button>
        </div>
        <h1 className="absolute pointer-events-none text-3xl lg:text-[10rem] top-20  text-red-600/30 md:text-5xl font-bold">
          {"Netflix".split("").map((text,index) => (<>
            <span style={{fontSize:26*(1+index) +"px"}}>{ text }</span>
          </>))}
        </h1>
        <div className="w-full absolute bottom-0 pointer-events-none h-20 bg-gradient-to-b from-transparent to-black"></div>
      </div>
    </section>
  );
};

export default Home;
