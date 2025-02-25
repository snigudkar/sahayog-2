import React from "react";

function HeroSection() {
  return (
    <div>
      <div className="flex flex-col items-center mt-6 lg:mt-20">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
          Sahayog: Empowering Change,
          <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
            {" "}
            Together!
          </span>
        </h1>
        <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
          Join hands with us to support communities through education,
          healthcare, and sustainable development.
        </p>
        <div className="flex justify-center my-10">
          <a
            href="#"
            className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md"
          >
            Donate Now
          </a>
          <a href="#" className="py-3 px-4 mx-3 rounded-md border">
            Join Us
          </a>
        </div>
        <div className="flex mt-10 justify-center">
          <video
            autoPlay
            loop
            muted
            className="rounded-lg w-1/2 border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
          >
            <source src="/vid1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <video
            autoPlay
            loop
            muted
            className="rounded-lg w-1/2 border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
          >
            <source src="/vid2.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
