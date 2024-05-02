"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Syncsparkle: Event Posting Platform Website",
    description: "An event posting platform that allows users to create, manage and post their events integrating Eventbrite API and also invite people through their emails.",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/lae178456/syncsparkle",
    previewUrl: "https://syncsparkleapp-c6ba66b7978d.herokuapp.com/",
  },
  {
    id: 2,
    title: "Vinyl Rental (Air bnb Clone) Website",
    description: `Rent Vinyl is a web application that allows users to rent and manage vinyl records. Users can browse available vinyls, view details of each offer, calculate rental prices, make bookings, manage their listings, and more.

    This project was created with:

    - Ruby
    - Rails
    - ERB (for template system with Ruby)
    - Pry-byebug (for debugging)
    - Bootstrap
    - Simple_form
    - Postgresql
    - Javascript (Stimulus)
    - Mapbox API (for displaying maps)
    - Cloudinary (for image storage and manipulation)
    - Heroku: Tested and successfully uploaded`,
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/lae178456/airbnb_vinyl",
    previewUrl: "https://github.com/ashakiran07/airbnb_vinyl",
  },
  {
    id: 3,
    title: "React Portfolio Website",
    description: "Project 3 description",
    image: "/images/projects/3.png",
    tag: ["All"],
    gitUrl: "/",
    previewUrl: "",
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
    title: "Tic Tac Toe Game Application",
    description: "Project 4 description",
    image: "/images/projects/4.png",
    tag: ["All", "Mobile"],
    gitUrl: "/",
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
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
