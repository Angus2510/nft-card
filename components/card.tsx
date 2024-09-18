import Image from "next/image";
import React from "react";

const Card = () => {
  return (
    <div className="container bg-slate-800 w-80 rounded-xl  items-center flex flex-col shadow-lg ">
      <div className="flex items-center ">
        <div className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
          <Image
            src="/images/image-equilibrium.jpg"
            alt="image"
            width={300}
            height={300}
            className=" flex items-center rounded-2xl  mt-4 hover:bg-cyan-400 hover:bg-cover"
          />
          <div className=" flex items-center mt-4 justify-center rounded-b-2xl rounded-2xl absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-cyan-400 bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-50">
            <span>
              <svg width="48" height="48" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fill-rule="evenodd">
                  <path d="M0 0h48v48H0z" />
                  <path
                    d="M24 9C14 9 5.46 15.22 2 24c3.46 8.78 12 15 22 15 10.01 0 18.54-6.22 22-15-3.46-8.78-11.99-15-22-15Zm0 25c-5.52 0-10-4.48-10-10s4.48-10 10-10 10 4.48 10 10-4.48 10-10 10Zm0-16c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6Z"
                    fill="#FFF"
                    fill-rule="nonzero"
                  />
                </g>
              </svg>
            </span>
          </div>
        </div>
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
