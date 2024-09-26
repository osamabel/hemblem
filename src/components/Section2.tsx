import { ArrowRight } from 'lucide-react';
import { useEffect, useRef, useState } from 'react'

function Section2() {
    const sec2 = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
  
    useEffect(() => {
      const current = sec2.current;
      const observer = new IntersectionObserver(
        (entries) => {
          const entry = entries[0];
          setIsVisible(entry.isIntersecting);
        },
        { threshold: 0.1 }
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
    <div ref={sec2}  className=' h-auto lg:h-screen py-[40px] lg:py-0 flex justify-center items-center z-[30] bg-black text-white'>
        <div className='h-auto container  z-[20]'>
            <div className="w-full flex flex-col lg:flex-row gap-y-[40px] items-center ">
                <div className=' h-full flex flex-col justify-between items-center lg:items-start'>
                    <div className='flex flex-col gap-y-[30px]'>
                        <h1 className={`text-[30px] lg:text-[50px] font-Raleway font-bold leading-[40px] lg:leading-[60px] max-w-[90%] text-center lg:text-left ${isVisible ? "lg:animate-toRight animate-toTop" : ""}`}>Launch campaigns in minutes not weeks</h1>
                        <div className='w-full flex flex-col gap-y-[30px]'>
                            <div style={{animationDelay:'.4s'}} className={` opacity-0 flex items-center gap-x-[20px] ${isVisible ? "animate-toTop" : ""}`}>
                                <div className='min-w-[40px] min-h-[40px] rounded-full flex items-center justify-center bg-white/20'>1</div>
                                <div className='w-full'>
                                    <p className={`text-[25px] font-Raleway font-bold max-w-[70%]`}>Create your offer</p>
                                    <p className={`text-[16px] font-Lato font-light max-w-[70%]`}>Tell influencers what you want to promote</p>
                                </div>
                            </div>
                            <div style={{animationDelay:'.6s'}} className={` opacity-0 flex items-center gap-x-[20px] ${isVisible ? "animate-toTop" : ""}`}>
                                <div className='min-w-[40px] min-h-[40px] rounded-full flex items-center justify-center bg-white/20'>2</div>
                                <div className='w-full'>
                                    <p className={`text-[25px] font-Raleway font-bold max-w-[70%]`}>Schedule visits</p>
                                    <p className={`text-[16px] font-Lato font-light max-w-[70%]`}>Joli matches you to the right people</p>
                                </div>
                            </div>
                            <div style={{animationDelay:'.8s'}} className={` opacity-0 flex items-center gap-x-[20px] ${isVisible ? "animate-toTop" : ""}`}>
                                <div className='min-w-[40px] min-h-[40px] rounded-full flex items-center justify-center bg-white/20'>3</div>
                                <div className='w-full'>
                                    <p className={`text-[25px] font-Raleway font-bold max-w-[70%]`}>Measure results</p>
                                    <p className={`text-[16px] font-Lato font-light max-w-[70%]`}>See which content works best for your business</p>
                                </div>
                            </div>
                        </div>
                        <div className='flex gap-x-[20px] items-center mt-[30px] p-[10px] group'>
                            <button className={`font-semibold text-[20px] cursor-pointer flex items-center gap-x-[10px]`}>
                                <p className='text-white group-hover:text-white/60'>Get Strated</p> 
                                <ArrowRight className='translate-y-[2px] group-hover:translate-x-[5px]' />
                            </button>
                        </div>
                    </div>
                    
                </div>
                <div className='w-full relative flex justify-center overflow-hidden'>
                    <img className={`${isVisible ? "animate-toLeft" : ""} w-[80%]`} src='./sec2/s2.png' alt=''/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Section2