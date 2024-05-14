"use client";
import React, { useTransition, useState } from "react";
import PoemsComponent from "./PoemsComponent";
import StoriesComponent from "./StoriesComponent";
import ThoughtsComponent from "./ThoughtsComponent";
import ArticlesComponent from "./ArticlesComponent";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Poems",
    id: "poems",
    content: (
      <ul className="list-disc pl-2">

      </ul>
    ),
  },
  {
    title: "Stories",
    id: "stories",
    content: (
      <ul className="list-disc pl-2">

      </ul>
    ),
  },
  {
    title: "Thoughts",
    id: "thoughts",
    content: (
      <ul className="list-disc pl-2">

      </ul>
    ),
  },
  {
    title: "Articles",
    id: "articles",
    content: (
      <ul className="list-disc pl-2">

      </ul>
    ),
  },
];


const BlogSection = () => {
  const [tab, setTab] = useState("poems");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  const renderContent = () => {
    switch (tab) {
      case "poems":
        return <PoemsComponent />;
      case "stories":
        return <StoriesComponent />;
      case "thoughts":
        return <ThoughtsComponent />;
      case "articles":
        return <ArticlesComponent />;
      default:
        return null;
    }
  };


  return (
    <section className="my-12 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">My Blogs</h2>
      <div className="flex justify-center">
      <div className="flex flex-row justify-start mt-8 hover:text-white text-[#ADB7BE]">
            <TabButton
              selectTab={() => handleTabChange("poems")}
              active={tab === "poems"}
            >
              {" "}
              Poems{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("stories")}
              active={tab === "stories"}
            >
              {" "}
              Stories{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("thoughts")}
              active={tab === "thoughts"}
            >
              {" "}
              Thoughts{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("articles")}
              active={tab === "articles"}
            >
              {" "}
              Articles{" "}
            </TabButton>
          </div>
          <div className="mt-8">{renderContent()}
      </div>
</div>
    </section>
  )
}

export default BlogSection
