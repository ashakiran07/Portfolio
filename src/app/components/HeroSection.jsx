"use client";
import React from "react";

import Image from "next/image";
import Link from "next/link";

import { TypeAnimation } from 'react-type-animation';
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left px-6 py-3">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Hello! 👋🏼
             I am Asha {""}</span>
<br ></br>
              <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
         // wait 1s before replacing "Mice" with "Hamsters"
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
            <div className=" mt-3 mb-3 socials flex flex-row gap-2">
          <Link href="https://github.com/ashakiran07">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="https://www.linkedin.com/in/asha-kiran-devkota-572684172">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
        </div>
          <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6">
          a former plant biotechnologist and a full time parent who discovered a new calling in the dynamic world of web development.
          </p>

          <div>
          <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white">
  <Link href="#contact">
  Let&rsquo;s connect
  </Link>
</button>

            <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white mt-3">
  <a href="https://drive.google.com/uc?export=download&id=1W6epwhtDJcUS_2dZ6S3fZWqzJcaTAZZn">
    <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">Download CV</span>
  </a>
</button>

          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0 shadow-lg">
  <div className="rounded-full bg-[#181818] w-[200px] h-[200px] lg:w-[350px] lg:h-[350px] relative shadow-md">
    <Image
      src="/images/hero.jpg"
      alt="hero image"
      className="absolute top-0 left-0 w-[150px] h-[150px] lg:w-[300px] lg:h-[300px] rounded-full object-cover"
      layout="fill"
    />
  </div>
</div>
      </div>
    </section>
  )
}

export default HeroSection;
