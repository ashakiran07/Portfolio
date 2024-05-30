"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const projectsData = [
  {
    id: 1,
    title: "Syncsparkle: Event Posting Platform",
    description: "An event posting platform that allows users to create, manage and post their events integrating Eventbrite API and also invite people through their emails.",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/lae178456/syncsparkle",
    previewUrl: "https://drive.google.com/file/d/1PwHlwCyYos6I718nZuo3Y48JOr3xY6_l/view?usp=drive_link",
    link: "https://syncsparkleapp-c6ba66b7978d.herokuapp.com"

  },

  {
    id: 2,
    title: "Vinyl Rental (Air bnb Clone) Website",
    description: "Rent Vinyl is a web application that allows users to rent and manage vinyl records. Users can browse available vinyls, view details of each offer, calculate rental prices, make bookings, manage their listings, and more.",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/lae178456/airbnb_vinyl",
    previewUrl: "https://github.com/ashakiran07/airbnb_vinyl",
  },
  {
    id: 3,
    title: "React Portfolio Website",
    description: "This is a portfolio website built with Next.js in an elegant and responsive design.",
    image: "/images/projects/5.png",
    tag: ["All"],
    gitUrl: "https://github.com/ashakiran07/Portfolio",
    previewUrl: "ashakirandevkota.com.np",
  },
  {
    id: 4,
    title: "Rails Watchlist Webpage",
    description: "A simple Rails project that allow users to create a movie and bookmark it in a category list.",
    image: "/images/projects/4.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/ashakiran07/rails-watch-list",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Tic Tac Toe Game",
    description: "Tic Tac Toe is a classic game played on a 3x3 grid where players take turns marking spaces with their symbols (usually X and O) until one player wins by placing three of their symbols in a row, column, or diagonal, or the game ends in a draw.",
    image: "/images/projects/3.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/ashakiran07/Tic-Tac-Toe",
    previewUrl: "",
  },
  {
    id: 6,
    title: "Simple AirBnB Flats Index",
    description: "This Rails application is designed to resemble Airbnb, allowing users to browse a list of flats and perform basic CRUD operations. With its intuitive interface and essential functionalities, it serves as a foundation for building more complex real estate or accommodation rental platforms in the future.",
    image: "/images/projects/6.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/ashakiran07/rails-simple-airbnb",
    previewUrl: "/",
  },
];


const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}

              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
              Link={project.link}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
