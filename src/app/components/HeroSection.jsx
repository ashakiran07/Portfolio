"use client";
import React from "react";

import Image from "next/image";
import Link from "next/link";

import { TypeAnimation } from 'react-type-animation';


const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left px-6 py-3">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Hello! 👋🏼
             I am {""}</span>
<br ></br>
              <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        "Asha",
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        "Web Developer",
        1000,
        "Fullstack Developer",
        1000,
        "The Problem Solving Botanist",
        1000
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
    />
            </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6">
          a former plant biotechnologist and a full time parent who discovered a new calling in the dynamic world of web development.
          </p>
          <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6">

🚀  From optimizing plant growth algorithms to developing dynamic web applications, I thrive in environments that foster creativity, collaboration, and continuous improvement. What actually motivates me is working with ideas and finding answers. I am constantly eager to learn new things and I am not hesitant to step outside of my comfort zone while embracing new challenges and innovations.</p>
<p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6">
🌿 Having brought amazing "teamoshpere" to different groups, I'm looking forward to joining ambitious developers and continue to learn.          </p>
          <div>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white">Hire Me</button>
            <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white mt-3">
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">Download CV</span>
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-ful bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
          <Image
            src="/images/hero-image.png"
            alt="hero image"
            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            width={300}
            height={300}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection;
