import React, { useEffect, useRef, useState } from "react";

function Hero() {
  const hero = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const current = hero.current; // Copy the current value to a variable

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 } // Adjust the threshold as needed
    );

    if (current) {
      observer.observe(current);
    }

    return () => {
      if (current) {
        observer.unobserve(current); // Use the stable reference in cleanup
      }
    };
  }, []); // Ensure dependencies are correct

  return (
    <div
      ref={hero}
      className="pt-[250px] pb-[80px] h-auto lg:h-screen flex justify-center items-center z-[30] "
    >
      <div className="h-auto container z-[20] relative">
        <div className="w-full flex h-[500px]">
          <div className=" h-full flex flex-col justify-between items-center lg:items-start">
            <div className="flex flex-col gap-y-[30px]  items-center lg:items-start">
              <h1
                className={`text-[30px] lg:text-[50px] font-Raleway font-bold ${
                  isVisible ? "lg:animate-toRight animate-toTop" : ""
                } leading-[40px] lg:leading-[60px] max-w-[90%] text-center lg:text-left`}
              >
                Empower Your Restaurant or Hotel with UAE’s Premier Influencer
                Marketing Platform
              </h1>
              <div className="flex lg:hidden relative w-full  justify-center">
                <div className="relative ">
                  <img
                    className={`w-[250px] ${
                      isVisible ? "lg:animate-toLeft animate-toTop" : ""
                    } delay-700 bottom-[10%] right-[-40%] z-[3]`}
                    src="./hero/h-1.png"
                    alt=""
                  />
                </div>
              </div>
              <p
                className={`text-[20px] font-Lato max-w-[70%] text-center lg:text-left ${
                  isVisible ? "lg:animate-toRight animate-toTop" : ""
                } `}
              >
                Connect with Local Influencers, Track ROI, and Drive Growth
                Effortlessly.
              </p>
            </div>

            <div className="flex gap-x-[20px] items-center mt-[30px] ">
              <button
                className={`bg-black hover:bg-black/70 ${
                  isVisible ? "lg:animate-toRight animate-toTop" : ""
                } text-white font-semibold px-[40px] py-[10px] rounded-lg cursor-pointer`}
              >
                Get Strated
              </button>
            </div>
          </div>
          <div className="min-w-[30%] relative lg:flex items-center hidden">
            <img
              className={`w-[250px] ${
                isVisible ? "animate-toLeft" : ""
              } delay-700 absolute bottom-[0%] left-[-40%] z-[3]`}
              src="./hero/h-1.png"
              alt=""
            />
            <img
              className={`w-[300px] ${
                isVisible ? "animate-toLeft" : ""
              } absolute right-[0%]`}
              src="./hero/h-2.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="absolute w-[638px] right-[200px] aspect-square bg-[#FF6629] rounded-full z-[-10] blur-[481px] opacity-20"></div>
          <div className="absolute w-[638px] top-[100px] left-[100px] aspect-square bg-[#FF305E] z-[-10] rounded-full blur-[481px] opacity-20"></div>
      {/* 
      <div className="background-gradient-top z-[0]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="2040"
          height="450"
          viewBox="0 0 2040 450"
          fill="none"
          data-arp-injected="true"
        >
          <mask
            id="mask0_153:3695"
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="2040"
            height="450"
          >
            <rect width="2040" height="450" fill="#C4C4C4"></rect>
          </mask>
          <g mask="url(#mask0_153:3695)">
            <rect
              opacity="0.2"
              width="900"
              height="450"
              fill="url(#paint0_linear_153:3695)"
            ></rect>
            <rect
              opacity="0.2"
              x="380"
              width="900"
              height="450"
              fill="url(#paint1_linear_153:3695)"
            ></rect>
            <rect
              opacity="0.2"
              x="760"
              width="900"
              height="450"
              fill="url(#paint2_linear_153:3695)"
            ></rect>
            <rect
              opacity="0.2"
              x="1140"
              width="900"
              height="450"
              fill="url(#paint3_linear_153:3695)"
            ></rect>
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_153:3695"
              x1="0"
              y1="0"
              x2="900"
              y2="0"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FF9F0F" stop-opacity="0"></stop>
              <stop offset="0.5" stop-color="#FF9F0F"></stop>
              <stop offset="1" stop-color="#FF9F0F" stop-opacity="0"></stop>
            </linearGradient>
            <linearGradient
              id="paint1_linear_153:3695"
              x1="380"
              y1="0"
              x2="1280"
              y2="0"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FF5BC7" stop-opacity="0"></stop>
              <stop offset="0.5" stop-color="#FF5BC7"></stop>
              <stop offset="1" stop-color="#FF5BC7" stop-opacity="0"></stop>
            </linearGradient>
            <linearGradient
              id="paint2_linear_153:3695"
              x1="760"
              y1="0"
              x2="1660"
              y2="0"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#725BFF" stop-opacity="0"></stop>
              <stop offset="0.5" stop-color="#725BFF"></stop>
              <stop offset="1" stop-color="#725BFF" stop-opacity="0"></stop>
            </linearGradient>
            <linearGradient
              id="paint3_linear_153:3695"
              x1="1140"
              y1="0"
              x2="2040"
              y2="0"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#3CE9DE" stop-opacity="0"></stop>
              <stop offset="0.5" stop-color="#3CE9DE"></stop>
              <stop offset="1" stop-color="#3CE9DE" stop-opacity="0"></stop>
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="background-gradient-bottom z-[0]">
        <svg
          width="2040"
          height="450"
          viewBox="0 0 2040 450"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask
            id="mask0_153:3694"
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="2040"
            height="450"
          >
            <rect width="2040" height="450" fill="#C4C4C4"></rect>
          </mask>
          <g mask="url(#mask0_153:3694)">
            <circle
              opacity="0.2"
              cx="1590"
              r="450"
              fill="url(#paint0_radial_153:3694)"
            ></circle>
            <circle
              opacity="0.2"
              cx="450"
              r="450"
              fill="url(#paint1_radial_153:3694)"
            ></circle>
            <circle
              opacity="0.2"
              cx="1210"
              r="450"
              fill="url(#paint2_radial_153:3694)"
            ></circle>
            <circle
              opacity="0.2"
              cx="830"
              r="450"
              fill="url(#paint3_radial_153:3694)"
            ></circle>
          </g>
          <defs>
            <radialGradient
              id="paint0_radial_153:3694"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(1590) rotate(90) scale(450)"
            >
              <stop stop-color="#3CE9DE"></stop>
              <stop offset="1" stop-color="#3CE9DE" stop-opacity="0"></stop>
            </radialGradient>
            <radialGradient
              id="paint1_radial_153:3694"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(450) rotate(90) scale(450)"
            >
              <stop stop-color="#FF9F0F"></stop>
              <stop offset="1" stop-color="#FF9F0F" stop-opacity="0"></stop>
            </radialGradient>
            <radialGradient
              id="paint2_radial_153:3694"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(1210) rotate(90) scale(450)"
            >
              <stop stop-color="#725BFF"></stop>
              <stop offset="1" stop-color="#725BFF" stop-opacity="0"></stop>
            </radialGradient>
            <radialGradient
              id="paint3_radial_153:3694"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(830) rotate(90) scale(450)"
            >
              <stop stop-color="#FF5BC7"></stop>
              <stop offset="1" stop-color="#FF5BC7" stop-opacity="0"></stop>
            </radialGradient>
          </defs>
        </svg>
      </div> */}
    </div>
  );
}

export default Hero;
