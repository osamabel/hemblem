import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useEffect, useRef, useState } from 'react'


const reviews = [
  {
      text: "“Joli has been a game-changer for our business, enabling us to connect with influencers who genuinely resonate with our brand. The platform has not only boosted our reach but also added a layer of authenticity to our marketing efforts”",
      img1: './hero/h-2.png',
      img2: './hero/h-2.png'
  },
  {
      text: "“Working with Joli has simplified our influencer partnerships and helped our brand grow exponentially in the UAE market. The results speak for themselves!”",
      img1: './hero/h-2.png',
      img2: './hero/h-2.png'
  },
  {
      text: "“Thanks to Joli, we’ve gained access to a pool of influencers that truly align with our brand values, making our campaigns more effective than ever.”",
      img1: './hero/h-2.png',
      img2: './hero/h-2.png'
  }
];

function Section4() {
  const sec4 = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [currentReview, setCurrentReview] = useState(0);
  const [animateReview, setAnimateReview] = useState(true);  // Control reanimation

  useEffect(() => {
    const current = sec4.current;
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

  const handleNextReview = () => {
    setAnimateReview(false);
    setTimeout(() => {
      setCurrentReview((prevIndex) => (prevIndex + 1) % reviews.length);
      setAnimateReview(true);  // Re-enable animation after review changes
    }, 100);  // Small delay for smoother transition
  };

  const handlePrevReview = () => {
    setAnimateReview(false);
    setTimeout(() => {
      setCurrentReview((prevIndex) =>
        prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
      );
      setAnimateReview(true);  // Re-enable animation after review changes
    }, 100);
  };

  return (
    <div ref={sec4} className="h-auto lg:h-screen py-[40px] lg:py-0 flex justify-center items-center z-[30]">
      <div className="h-auto container z-[20]">
        <div className="w-full lg:h-[600px] flex flex-col lg:flex-row gap-y-[40px] items-center">
          {/* Image Section */}
          <div className="w-full relative flex justify-center gap-[20px] items-center overflow-hidden h-[450px] lg:h-full">
            <div className={`relative flex w-full h-full`}>
              <img
                className={`${isVisible && animateReview ? 'animate-toBtm' : ''} w-[200px] absolute top-0 lg:top-[10%] right-0`}
                src={reviews[currentReview].img1}
                alt=""
              />
            </div>
            <div className="relative flex w-full h-full">
              <img
                className={`${isVisible && animateReview ? 'animate-toTop' : ''} w-[200px] absolute bottom-0 lg:bottom-[10%]`}
                src={reviews[currentReview].img2}
                alt=""
              />
            </div>
          </div>

          {/* Review Section */}
          <div className="h-full lg:min-w-[55%] lg:max-w-[60%] flex flex-col justify-between items-center lg:items-start">
            <div className="w-full h-full p-[20px] flex flex-col justify-center gap-y-[30px]">
              <div className={`flex flex-col gap-[20px] h-[350px]`}>
                <div className="py-[10px] flex justify-between items-center">
                  <div className="flex gap-[4px]">
                    <img style={{ animationDelay: '.3s' }} className={`${isVisible && animateReview ? 'animate-toLeft' : ''} opacity-0`} width={20} src="./star.png" alt=""/>
                    <img style={{ animationDelay: '.5s' }} className={`${isVisible && animateReview ? 'animate-toLeft' : ''} opacity-0`} width={20} src="./star.png" alt=""/>
                    <img style={{ animationDelay: '.7s' }} className={`${isVisible && animateReview ? 'animate-toLeft' : ''} opacity-0`} width={20} src="./star.png" alt=""/>
                    <img style={{ animationDelay: '.9s' }} className={`${isVisible && animateReview ? 'animate-toLeft' : ''} opacity-0`} width={20} src="./star.png" alt=""/>
                    <img style={{ animationDelay: '1.1s' }} className={`${isVisible && animateReview ? 'animate-toLeft' : ''} opacity-0`} width={20} src="./star.png" alt=""/>
                  </div>
                  <div className="flex gap-[9px]">
                    <ArrowLeft
                      onClick={handlePrevReview}
                      className="cursor-pointer translate-y-[2px] group-hover:translate-x-[5px]"
                    />
                    <ArrowRight
                      onClick={handleNextReview}
                      className="cursor-pointer translate-y-[2px] group-hover:translate-x-[5px]"
                    />
                  </div>
                </div>
                <p
                  style={{ animationDelay: '.8s' }}
                  className={`${isVisible && animateReview ? 'animate-toLeft' : ''} opacity-0 text-[25px] font-Raleway font-bold text-black/80`}
                >
                  {reviews[currentReview].text}
                </p>
              </div>

              <div className="flex gap-x-[20px] items-center mt-[30px] p-[10px] group">
                <button className="font-semibold text-[20px] cursor-pointer flex items-center gap-x-[10px]">
                  <p className="">Get Started</p>
                  <ArrowRight className="translate-y-[2px] group-hover:translate-x-[5px]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section4