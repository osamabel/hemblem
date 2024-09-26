import { ArrowRight } from 'lucide-react';
import { useEffect, useRef, useState } from 'react'
import InfluencerSection from './sec3/InfluencerSection';


const imageUrls = [
  "./sec3/img1.png",
  "./sec3/img2.png",
  "./sec3/img3.png",
  "./sec3/img4.png",
  "./sec3/img5.png",
  "./sec3/img6.png",
  "./sec3/img7.png",
  "./sec3/img8.png",
  "./sec3/img9.png",
  "./sec3/img10.png",
  "./sec3/img11.png",
  "./sec3/img12.png",
];

function Section3() {
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
    <div className='pt-[250px] pb-[80px] h-auto lg:h-screen flex flex-col gap-y-[70px] justify-center items-center z-[30]'>
        <div className='h-auto container z-[20]'>                
          <div className=' h-full flex flex-col justify-between items-center lg:items-start'>
            <div className='flex flex-col gap-y-[10px]  items-center'>
                <h1 className={`text-[30px] lg:text-[50px] font-Raleway font-bold leading-[40px] lg:leading-[60px] max-w-[70%] text-center ${isVisible ? "animate-toTop" : ""} opacity-0`}>Partner with 4500 Lifestyle and Travel influencers in UAE   </h1>
                <p className={`text-[20px] font-Lato max-w-[65%] font-light text-center fon ${isVisible ? "animate-toTop" : ""} opacity-0`}>Whether a UAE-based influencers or just passing through, don't miss out on opportunities to drive growth </p>
            </div>
          </div>

        </div>
        <div ref={sec2}  className='w-full relative flex justify-center h-full overflow-hidden'>
            <InfluencerSection images={imageUrls} />
        </div>
    </div>
  )
}

export default Section3