import Image from "next/image";
import React from "react";

const Card = () => {
  return (
    <div className="container bg-slate-800 w-80 rounded-xl  items-center flex flex-col shadow-lg ">
      <div className="flex items-center ">
        <Image
          src="/images/image-equilibrium.jpg"
          alt="image"
          width={300}
          height={300}
          className=" flex items-center rounded-2xl p-2 pt-4 hover:bg-cyan-400"
        />
      </div>
      <div className="ml-6 mt-4">
        <h1 className="text-white mb-4 font-semibold  hover:text-cyan-400 ">
          Equilibrium #3429
        </h1>
        <p className=" text-zinc-500 mb-4">
          Our Equilibrium collection promotes balance and calm.
        </p>
        <div className="flex justify-between text-zinc-500">
          <span className="flex text-cyan-400 items-center">
            <svg
              className="mr-2"
              width="11"
              height="18"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11 10.216 5.5 18 0 10.216l5.5 3.263 5.5-3.262ZM5.5 0l5.496 9.169L5.5 12.43 0 9.17 5.5 0Z"
                fill="#00FFF8"
              />
            </svg>
            0.041 ETH
          </span>
          <span className="flex items-center mr-6 ">
            <svg
              className="mr-2"
              width="17"
              height="17"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.305 2.007a6.667 6.667 0 1 0 0 13.334 6.667 6.667 0 0 0 0-13.334Zm2.667 7.334H8.305a.667.667 0 0 1-.667-.667V6.007a.667.667 0 0 1 1.334 0v2h2a.667.667 0 0 1 0 1.334Z"
                fill="#8BACD9"
              />
            </svg>
            3 days left
          </span>
        </div>
      </div>

      <hr className="w-64 h-[1px] my-4 bg-zinc-600 border-0 rounded " />

      <div className=" flex justify-around items-center mb-4">
        <Image
          src="/images/image-avatar.png"
          alt="image"
          width={30}
          height={30}
          className="mr-6"
        />
        <span className="text-zinc-600 ">
          Creation of
          <span className="text-zinc-400 hover:text-cyan-400 ml-2">
            Jules Wyvern
          </span>
        </span>
      </div>
    </div>
  );
};

export default Card;
