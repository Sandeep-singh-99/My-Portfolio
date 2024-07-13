import React from "react";
import logo from "../assets/lg.png";
import { Bio } from "../assets/data";
import Typewriter from "typewriter-effect";

function Hero() {
  return (
    <div className="h-screen">
      <div className="flex justify-between items-center  sm:flex-col">
        {/** Content field */}
        <div className="sm:order-2  lg:w-2/4 sm:w-full lg:space-y-5 ">
          <div className="sm:flex justify-center items-center sm:text-center">
            <h1 className="text-white text-6xl sm:text-4xl font-bold">
              Hi, I am
              <span className="block text-blue-500">Sandeep Singh</span>
            </h1>
          </div>

          <div className="">
            <h2 className="text-white font-bold text-4xl flex gap-4 sm:flex sm:justify-center sm:items-center sm:text-center sm:text-2xl">
              I am a
              <span className="text-purple-800">
                <Typewriter
                  options={{
                    strings: Bio.roles,
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span>
            </h2>
          </div>
          <p className="text-gray-400 text-[20px] sm:flex justify-center items-center sm:text-center pb-14">
            {Bio.about}
          </p>

          <div className="sm:flex sm:justify-center">
            <button className="text-white px-24 py-4 sm:px-20 text-xl bg-gradient-to-r from-purple-950 to-purple-600 font-semibold rounded-s-3xl rounded-e-3xl shadow-xl shadow-green-400/35">
              Check Resume
            </button>
          </div>
        </div>

        {/** Image Field */}
        <div className="sm:order-1  w-1/3 sm:w-[80%]">
          <img src={logo} alt="not showing" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
