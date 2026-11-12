import ProjectCard from "@/common/ProjectCard";
import React from "react";
const Project = [
  {
    id: "project 1",
    image: "/projectcard.webp",
    category: "EdTech & AI",
    year: "2026",
    title: "QuizMaster Bot",
    description:
      "An AI-powered Discord bot that transforms PDFs into smart exams instantly.",
    tags: ["Discord.js", "Groq AI", "OCR"],
  },
  {
    id: "project 2",
    image: "/projectcard.webp",
    category: "EdTech & Gamification",
    year: "2026",
    title: "Study Timer Bot",
    description:
      "A gamified productivity bot serving 12,000+ users with virtual pet mechanics.",
    tags: ["Discord.js", "Gamification", "Productivity"],
  },
  {
    id: "project 3",
    image: "/projectcard.webp",
    category: "Web Development",
    year: "2025",
    title: "Project Three",
    description: "A short description for the third project.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
  },
  {
    id: "project 4",
    image: "/projectcard.webp",
    category: "UI/UX",
    year: "2025",
    title: "Project Four",
    description: "A short description for the fourth project.",
    tags: ["Figma", "Design", "Prototype"],
  },
  {
    id: "project 5",
    image: "/projectcard.webp",
    category: "Automation",
    year: "2025",
    title: "Project Five",
    description: "A short description for the fifth project.",
    tags: ["Node.js", "API", "Automation"],
  },
];
const Work = () => {
  return (
    <div id="Work">
      <div className="p-8 ">
        <div className="flex items-center gap-3 pb-3 ">
          <span className="h-px w-10 bg-orange-600 "></span>
          <span className="">Selected work</span>
        </div>
        <h1 className="pb-3">
          A selection of my software work that I am proud of
        </h1>
        <div className="flex justify-between items-center">
          <p className="pb-3">
            A few systems built with equal attention to utility, scale, and
            feel.
          </p>

          <a className="flex justify-center items-center gap-2 border rounded-3xl p-3 w-50">
            <span>View All Projects</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-arrow-right"
              aria-hidden="true"
            >
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-8">
        {Project.map((Project) => (
          <ProjectCard
            key={Project.id}
            image={Project.image}
            category={Project.category}
            year={Project.year}
            title={Project.title}
            description={Project.description}
            tags={Project.tags}
          />
        ))}
      </section>
      <div className="flex justify-center ">
        <a className="flex justify-center items-center border rounded-3xl w-50">
          <span>View All Projects</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-arrow-right"
            aria-hidden="true"
          >
            <path d="M5 12h14"></path>
            <path d="m12 5 7 7-7 7"></path>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Work;
