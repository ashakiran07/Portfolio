"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";


// Tab data displays an array of information on what components a tab contains
const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Ruby on Rails</li>
        <li>HTML, CSS, Bootstrap Frameworks</li>
        <li>PostgreSQL</li>
        <li>Javascript</li>
        <li>React/Next Js(Learning)</li>
        <li>Github, Slack, Kanban, Notion</li>
        <li>Problem solving attitute</li>

      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Le Wagon Web Development Bootcamp</li>
        <p>24-week intensive coding bootcamp learning HTML, Git, JavaScript, Sinatra, jQuery, Rails, CSS, Front End, Ruby, SQL, MySQL, Figma</p>
        <li>Masters in International Horticulture, Leibniz Universität Hannover</li>
        <p>International Horticulture majoring Plant Biotechnology, Propagation and Production</p>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Le Wagon Web Development Bootcamp Graduate
        <br />
        <Image src="/images/about/certificate.jpg" alt="Certificate" width={300} height={200} className="mt-2" />
        </li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 relative">
      <Image
            src="/images/about.jpg"
            alt="about image"
            className="  top-1/2 right-1/2"
            width={800}
            height={400}
            />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg mb-6">

            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with Ruby on Rails,JavaScript, PostgreSQL, HTML, CSS, Bootstrap framework and Git.</p>
            <p className="text-base lg:text-lg">

          🚀  From optimizing plant growth algorithms to developing dynamic web applications, I thrive in environments that foster creativity, collaboration, and continuous improvement. What actually motivates me is working with ideas and finding answers. I am constantly eager to learn new things and I am not hesitant to step outside of my comfort zone while embracing new challenges and innovations.</p>
          <p className="text-base lg:text-lg">
🌿 Having brought amazing &quot;teamoshpere&quot; to different groups, I&apos;m looking forward to joining ambitious developers and continue to learn.          </p>

          <div className="flex flex-row justify-start mt-8 hover:text-white text-[#ADB7BE]">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
