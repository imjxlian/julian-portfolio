"use client";

import { useEffect, useState } from "react";
import ProjectCard from "../components/ProjectCard";

export default function Portfolio() {
  const projects = [
    {
      title: "IP Locator",
      stack: ["Vue", "Node.js", "Express", "MongoDB", "Swagger"],
      description:
        "A web application that allows users to locate IP addresses and view information about them.",
      category: "Web App",
      url: "https://github.com/imjxlian/ip-locator",
      image: "/projects/iplocator.png",
    },
    {
      title: "Gomoku",
      stack: ["Java"],
      description: "A Gomoku game implemented in Java.",
      category: "Game",
      url: "https://github.com/imjxlian/Gomoku",
      image: "/projects/gomoku.png",
    },
    {
      title: "Sokoban",
      stack: ["Java"],
      description: "A Sokoban game implemented in Java.",
      category: "Game",
      url: "https://github.com/imjxlian/Sokoban",
      image: "/projects/sokoban.png",
    },
    {
      title: "Stak'Eirb",
      stack: ["Vue", "Javascript", "Node.js", "Express", "MongoDB"],
      description:
        "Web course online casino project developed collaboratively with @TodoniK.",
      category: "Web App",
      url: "https://github.com/imjxlian/stakeirb",
      image: "/projects/stakeirb.png",
    },
    {
      title: "My first website",
      stack: ["HTML", "CSS", "Javascript"],
      description: "My first website developed during my studies.",
      category: "Web App",
      url: "https://github.com/imjxlian/s1-website",
      image: "/projects/website.png",
    },
    {
      title: "SuperSeries",
      stack: ["PHP", "Twig", "Symfony 5"],
      description: "A streaming platform developed during my studies.",
      category: "Web App",
      url: "https://github.com/imjxlian/SuperSeries",
      image: "/projects/superseries.png",
    },
    {
      title: "Form Creator",
      stack: ["PHP", "HTML", "CSS", "Javascript"],
      description: "A form creator developed during my internship abroad.",
      category: "Web App",
      url: "https://github.com/imjxlian/forms",
      image: "/projects/formcreator.png",
    },
    {
      title: "GitHub",
      stack: [],
      description: "View more of my projects on GitHub.",
      category: "Profile",
      url: "https://github.com/imjxlian",
      image: "",
    },
  ];

  return (
    <div className="my-5">
      <h2 className="text-4xl font-semibold text-nowrap mb-10 text-center">
        <span className="bg-gradient-to-r from-purple-500 via-rose-500 to-amber-500 text-transparent bg-clip-text">
          My Projects
        </span>
      </h2>
      <div className="grid grid-flow-row grid-cols-2 gap-5">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            project={project}
            classNames={`row-span-${index % 2 === 0 ? 1 : 1}`}
          />
        ))}
      </div>
    </div>
  );
}
