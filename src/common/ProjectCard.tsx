import { Container } from "lucide-react";
import { type } from "node:os";
import React from "react";

type Project = {
  image: string;
  category: string;
  year: string;
  title: string;
  description: string;
  tags: string[];
};
type ProjectCardProps = Project;
const ProjectCard = ({
  image,
  category,
  year,
  title,
  description,
  tags,
}: ProjectCardProps) => {
  return (
    <div>
     
      <article className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden p-5">
        <div className="h-48 overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src="/projectcard.webp"
            alt="image card"
          />
        </div>
        <div>
          <div>
            <p>EdTech & Gamification</p>
            <span>2026</span>
          </div>
          <p>Study Timer Bot</p>
          <div>
            <p className="pb-3">
              A gamified productivity bot serving 12,000+ users with virtual pet
              mechanics.
            </p>
          </div>
          <div className="flex justify-between ">
            <div className="">
              <span className="border rounded-2xl px-4 py-2 mr-1">js</span>
              <span className="border rounded-2xl px-4 py-2 mr-1">js</span>
              <span className="border rounded-2xl px-4 py-2 ">js</span>
            </div>
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
              className="lucide lucide-arrow-up-right pcard-arrow"
              aria-hidden="true"
            >
              <path d="M7 7h10v10"></path>
              <path d="M7 17 17 7"></path>
            </svg>
          </div>
        </div>
      </article>
    </div>
  );
};

export default ProjectCard;
