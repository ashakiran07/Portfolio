import React from "react";
import Image from "next/image";

const FromSection = () => {
  return (
    <section className="my-12 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Where I am from</h2>
      <div className="flex justify-center">
        <div className="container mb-6 flex justify-between items-center lg:w-1/2 sm:w-full">
          <div className="flex flex-col items-center">
            <Image src="/images/nepal.png" alt="Nepal Flag" width={80} height={60} className="w-auto h-auto lg:w-24 lg:h-24" />
            <p className="text-white">Nepal</p>
          </div>
          <div className="flex flex-col items-center">
            <Image src="/images/plane.png" alt="Airplane" width={80} height={60} className="w-auto h-auto lg:w-24 lg:h-24" />
            {/* Optional: You can add text like "Travel" or something descriptive for the plane */}
          </div>
          <div className="flex flex-col items-center">
            <Image src="/images/germany.png" alt="Germany Flag" width={80} height={60} className="w-auto h-auto lg:w-24 lg:h-24" />
            <p className="text-white">Germany</p>
          </div>
        </div>
      </div>
      <div className="mt-9">

        {/* Embed the YouTube video using an iframe */}
        <iframe
  width="380"
  height="200"
  src="https://www.youtube.com/embed/NKzIHcRxlo4"
  title="YouTube video player"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
  style={{
    marginTop: "20px",
    border: "2px solid transparent",
    display: "block",
    margin: "0 auto",
    borderImage: "linear-gradient(to bottom right, #3b82f6, #7c3aed, #ec4899) 1",
    backgroundClip: "padding-box"
  }}
></iframe>

      </div>
    </section>
  );
};

export default FromSection;
