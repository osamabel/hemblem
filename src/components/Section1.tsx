import React, { useEffect, useRef, useState } from 'react'

function Section1() {
    const sec1 = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
  
    useEffect(() => {
        const current = sec1.current;
      const observer = new IntersectionObserver(
        (entries) => {
          const entry = entries[0];
          setIsVisible(entry.isIntersecting);
        },
        { threshold: 0.1 } // 50% of the image must be visible
      );
  
      if (current) {
        observer.observe(current);
      }
  
      return () => {
        if (current) {
          observer.unobserve(current);
        }
      };
    }, []);
  return (
    <div ref={sec1}  className='pt-[250px] h-auto lg:h-screen flex justify-center items-end z-[30]'>
        <div className='h-auto container  z-[20]'>
            <div className="w-full flex flex-col lg:flex-row gap-y-[40px] items-center ">
                <div className=' h-full flex flex-col justify-between items-center lg:items-start'>
                    <div className='flex flex-col gap-y-[30px]  items-center lg:items-start'>
                        <h1 className={`text-[30px] lg:text-[50px] font-Raleway font-bold leading-[40px] lg:leading-[60px] max-w-[90%] text-center lg:text-left ${isVisible ? "lg:animate-toRight animate-toTop" : ""}`}>The reference appamong influencers.</h1>
                        <p className={`text-[20px] font-Lato max-w-[70%] text-center lg:text-left ${isVisible ? "lg:animate-toRight animate-toTop" : ""} `}>A unique approach to the influencer market. Put your establishment in the pockets of thousands of influencers, carefully selected for their engagement</p>
                        <div className='flex gap-x-[20px] items-center mt-[30px]'>
                            <button className={`bg-black hover:bg-black/70 text-white font-semibold px-[40px] py-[10px] rounded-lg cursor-pointer ${isVisible ? "lg:animate-toRight animate-toTop" : ""}`}>Get Strated</button>
                        </div>
                    </div>
                    
                </div>
                <div className='w-full relative flex justify-center overflow-hidden'>
                    <img className={`${isVisible ? "animate-toTop" : ""} w-[80%] sm:w-[60%] lg:w-[350px]`} src='./sec1/s-1.png' alt='' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Section1