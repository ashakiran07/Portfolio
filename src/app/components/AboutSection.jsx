"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import BootstrapIcon from "../../../public/bootstrap-icon.svg";




// Tab data displays an array of information on what components a tab contains
const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div>
      <h4 className="text-lg font-semibold mb-2 text-white">Tech Stack</h4>

      <div className="flex flex-wrap justify-start mt-4 space-x-4">
          <a href="https://www.ruby-lang.org/en/" target="_blank" rel="noreferrer" className="flex flex-col items-center space-y-1">
            <Image src="https://raw.githubusercontent.com/devicons/devicon/master/icons/ruby/ruby-original.svg" alt="ruby" width="40" height="40"/>
            <p className="text-sm">Ruby</p>
          </a>
          <a href="https://rubyonrails.org" target="_blank" rel="noreferrer" className="flex flex-col items-center space-y-1">
            <Image src="https://raw.githubusercontent.com/devicons/devicon/master/icons/rails/rails-original-wordmark.svg" alt="rails" width="40" height="40"/>
            <p className="text-sm">Rails</p>
          </a>
          <a href="https://getbootstrap.com" target="_blank" rel="noreferrer" className="flex flex-col items-center space-y-1">
            <BootstrapIcon />
            <p className="text-sm">Bootstrap</p>
          </a>
          <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer" className="flex flex-col items-center space-y-1">
            <Image src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/>
            <p className="text-sm">CSS</p>
          </a>
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer" className="flex flex-col items-center space-y-1">
            <Image src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/>
            <p className="text-sm">JavaScript</p>
          </a>
          <a href="https://reactjs.org/" target="_blank" rel="noreferrer" className="flex flex-col items-center space-y-1">
            <Image src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" alt="react" width="40" height="40"/>
            <p className="text-sm">React</p>
          </a>
          <a href="https://www.figma.com/" target="_blank" rel="noreferrer" className="flex flex-col items-center space-y-1">
            <Image src="https://www.vectorlogo.zone/logos/figma/figma-icon.svg" alt="figma" width="40" height="40"/>
            <p className="text-sm">Figma</p>
          </a>
          <a href="https://git-scm.com/" target="_blank" rel="noreferrer" className="flex flex-col items-center space-y-1 mt-4">
            <Image src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="40" height="40"/>
            <p className="text-sm">Git</p>
          </a>
          <a href="https://github.com/" target="_blank" rel="noreferrer" className="flex flex-col items-center space-y-1 mt-4">
            <Image src="https://www.vectorlogo.zone/logos/github/github-icon.svg" alt="github" width="40" height="40"/>
            <p className="text-sm">GitHub</p>
          </a>
          <a href="https://slack.com/" target="_blank" rel="noreferrer" className="flex flex-col items-center space-y-1 mt-4">
            <Image src="https://www.vectorlogo.zone/logos/slack/slack-icon.svg" alt="slack" width="40" height="40"/>
            <p className="text-sm">Slack</p>
          </a>
          <a href="https://heroku.com" target="_blank" rel="noreferrer" className="flex flex-col items-center space-y-1 mt-4">
            <Image src="https://www.vectorlogo.zone/logos/heroku/heroku-icon.svg" alt="heroku" width="40" height="40"/>
            <p className="text-sm">Heroku</p>
          </a>
          <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer" className="flex flex-col items-center space-y-1 mt-4">
            <Image src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/>
            <p className="text-sm">HTML</p>
          </a>
          <a href="https://www.mysql.com/" target="_blank" rel="noreferrer" className="flex flex-col items-center space-y-1 mt-4">
            <Image src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" alt="mysql" width="40" height="40"/>
            <p className="text-sm">MySQL</p>
          </a>
          <a href="https://postman.com" target="_blank" rel="noreferrer" className="flex flex-col items-center space-y-1 mt-4">
            <Image src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" alt="postman" width="40" height="40"/>
            <p className="text-sm">Postman</p>
          </a>
          <a href="https://www.postgresql.org" target="_blank" rel="noreferrer" className="flex flex-col items-center space-y-1 mt-4">
            <Image src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg" alt="postgresql" width="40" height="40"/>
            <p className="text-sm">PostgreSQL</p>
          </a>

        </div>
        </div>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Le Wagon Web Development Bootcamp</li>
        <p>24-week intensive coding bootcamp learning HTML, Git, JavaScript, Sinatra, jQuery, Rails, CSS, Front End, Ruby, SQL, PostgreSQL, Figma</p>
        <li className="mt-3">Masters in International Horticulture, Leibniz Universität Hannover</li>
        <p>Majoring Plant Biotechnology, Propagation and Production</p>
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
        </li>
        <li className="mt-3">Masters In International Horticulture Graduate
        <br />
</li>
      </ul>
    ),
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <ul className="list-disc pl-2">
        <li className="fw-bold">Le Wagon Web Development Bootcamp</li>
        <p>24-week intensive coding bootcamp learning HTML, Git, JavaScript, Sinatra, jQuery, Rails, CSS, Front End, Ruby, SQL, MySQL, Figma</p>
        <li className="mt-3">Masters in International Horticulture</li>
        <p>
Research carried out on topic &quot;Production of antibacterial secondary metabolites in in vitro cultures of different Rhododendron species&quot;.
The research focused on in vitro establishment, propagation and elicitation of shoots and callus cultures in solid and immersion culture systems for the analysis of potential secondary metabolites produced by these cultures.</p>
<br />
<p>Key tasks</p>
<p>- Development of propagation protocols and culture systems</p>
<p>- Analysed the efficiency in propagation and secondary metabolites production by different light variants, Methyl Jasmonate and Coronatine.</p>
<p>- Analysis of propagation of cultures using different statistical tests.</p>
<p>- Employed fluorescence microscopy</p>
<p>- Used Agar diffusion assays and LCMS for compound detection.</p>
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
    <section className="my-12 text-center" id="about">
      <h2 className="text-4xl font-bold text-white mb-4">About</h2>

      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 relative">
        <div className="relative">
          <Image
            src="/images/about.jpg"
            alt="about image"
            className="absolute top-0 left-0 w-full h-full object-cover"
            width={850}
            height={600}
          />
        </div>
        <div className="mt-4 text-white md:mt-0 text-left flex flex-col h-full">
          <p className="text-base lg:text-lg mb-6">
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with Ruby on Rails, JavaScript, PostgreSQL, HTML, CSS,
            Bootstrap framework, and Git.
          </p>
          <p className="text-base lg:text-lg">
            🚀 From optimizing plant growth algorithms to developing dynamic web
            applications, I thrive in environments that foster creativity,
            collaboration, and continuous improvement. What actually motivates me
            is working with ideas and finding answers. I am constantly eager to
            learn new things and I am not hesitant to step outside of my comfort
            zone while embracing new challenges and innovations.
          </p>
          <p className="text-base lg:text-lg">
            🌿 Having brought amazing "teamoshpere" to different groups, I'm
            looking forward to joining ambitious developers and continue to
            learn.
          </p>

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
            <TabButton
              selectTab={() => handleTabChange("experience")}
              active={tab === "experience"}
            >
              {" "}
              Experience{" "}
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
