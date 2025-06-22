import React from "react";

const Hero = () => {
  return (
    <header  className="mt-5 h-96 bg-cover bg-center flex items-center justify-center" style={{
      backgroundImage:"url('https://i.ytimg.com/vi/Ul67Fq26Blk/maxresdefault.jpg')"
    }}>
      <h1 className="text-4xl font-bold text-yellow-600 bg-black/50 rounded-lg backdrop-blur-sm p-4">Mac For Students</h1>
      <div>
      <button className=" ml-10 bg-white text-black rounded p-5 flex-cols">Learn more</button>
      </div>
    </header>
  );
};

export default Hero;