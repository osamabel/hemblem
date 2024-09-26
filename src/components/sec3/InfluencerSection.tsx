import React from "react";

interface InfluencerSectionProps{
    images: string[]
}

interface InfluencerCardProps{
    img: string
    index: number
}

const InfluencerCard = ({ img, index }: InfluencerCardProps) => {
    const randomRotate = Math.random() * 20 - 10; // Random rotation between -10 and 10 degrees
    const randomScale = 0.9 + Math.random() * 0.2; // Random scale between 0.9 and 1.1
  
    return (
      <div
        className={`relative group overflow-hidden rounded-lg shadow-lg transition-all duration-500 transform hover:scale-105`}
        style={{
          transform: `rotate(${randomRotate}deg) scale(${randomScale})`,
          animation: `fadeInUp 1s ease ${index * 0.1}s forwards`, // Staggered animation
        }}
      >
        <img
          src={img}
          alt={`Influencer ${index}`}
          className={`w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110`}
        />
  
        {/* Optional: Add blur and small effect to far images */}
        {/* <div
          className={`absolute inset-0 transition-all duration-500 ease-in-out ${
            index % 2 === 0 ? "blur-sm opacity-70" : ""
          } group-hover:blur-none group-hover:opacity-100`}
        /> */}
      </div>
    );
  };


const InfluencerSection = ({ images }: InfluencerSectionProps) => {
  return (
      <div className="grid grid-cols-3 gap-5 md:grid-cols-4 lg:grid-cols-6 p-5">
        {images.map((img, index) => (<InfluencerCard key={index} img={img} index={index} />))}
      </div>
  );
};

export default InfluencerSection;
