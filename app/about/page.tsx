"use client";

import Image from "next/image";
import p1 from "../../public/1.jpg";
import p2 from "../../public/2.jpg";
import p3 from "../../public/3.jpg";
import p4 from "../../public/4.jpg";
import p5 from "../../public/5.jpg";

interface ExperienceItemProps {
  title: string;
  description: string;
  date: string;
}

interface ExperienceSectionProps {
  title: string;
  items: ExperienceItemProps[];
}

export default function About() {
  const data = [
    { value: "6+", description: "Years of Experience" },
    { value: "1000+", description: "Hours of Coding" },
    { value: "15+", description: "Projects Completed" },
  ];

  const education: ExperienceItemProps[] = [
    {
      title: "ENSEIRB-MATMECA",
      description:
        "Enrolled in a Master's degree apprenticeship, alternating study periods at school and works periods at Orange",
      date: "Sep 2022 - Now",
    },
    {
      title: "University Technical Institue of Bordeaux",
      description:
        "Graduated with a two-year technological degree course in Computer Science, ranked 3rd over 80 students",
      date: "Sep 2020 - June 2022",
    },
    {
      title: "Arnaud Daniel High School of Riberac",
      description:
        "Graduated with honours earning A-levels diploma in math and sciences ",
      date: "Sep 2017 - June 2020",
    },
  ];

  const workExperience: ExperienceItemProps[] = [
    {
      title: "Orange, Intern & Software Engineer",
      description:
        "Worked on the development of a new web application for the company's internal use",
      date: "Apr 2022 - Aug 2025",
    },
    {
      title: "Internal Volunteer Service, Intern",
      description:
        "Discovered work in an association, improved English communication within a team, and autonomously managed tasks.",
      date: "Jun 2022 - Aug 2023",
    },
  ];

  const ExperienceSection: React.FC<ExperienceSectionProps> = ({
    title,
    items,
  }) => (
    <div>
      <h2 className="text-3xl font-semibold text-nowrap mb-5">
        <span className="bg-gradient-to-r from-rose-500 to-amber-500 text-transparent bg-clip-text">
          {title}
        </span>
      </h2>
      {items.map((item, index) => (
        <ExperienceItem
          key={index}
          title={item.title}
          description={item.description}
          date={item.date}
        />
      ))}
    </div>
  );

  const ExperienceItem: React.FC<ExperienceItemProps> = ({ title, description, date }) => (
    <div className="flex flex-row justify-between items-end py-5 border-b border-neutral-700">
      <div>
        <h3 className="font-semibold">{title}</h3>
        <p className="dark:text-slate-300 my-3">{description}</p>
        <p className="dark:text-slate-300 text-nowrap">{date}</p>
      </div>
    </div>
  );

  return (
    <>
      <div className="flex flex-col text-center mx-auto justify-center items-center gap-10 mt-10">
        <div>
          <h2 className="text-5xl text-nowrap mb-3">Hi, I am</h2>
          <h2 className="text-5xl font-semibold text-nowrap m-0">
            <span className="bg-gradient-to-r from-rose-500 to-amber-500 text-transparent bg-clip-text">
              Julian Forme
            </span>
          </h2>
        </div>

        <p className="w-2/3">
          As a software engineer with over 6 years of experience, I have
          developed a wide range of skills and expertise to deliver high-quality
          solutions. I have worked on numerous projects, from small-scale
          applications to complex systems, and have a proven track record of
          delivering results.
        </p>

        <div className="flex flex-row justify-center items-start w-full">
          {data.map((item, index) => (
            <div
              key={index}
              className={`px-10 grow basis-0 ${
                index !== data.length - 1 ? "border-r border-neutral-700" : ""
              }`}
            >
              <h2 className="text-3xl font-semibold text-nowrap">
                <span className="bg-gradient-to-r from-rose-500 to-amber-500 text-transparent bg-clip-text">
                  {item.value}
                </span>
              </h2>
              <p className="dark:text-slate-300">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-rows-2 grid-flow-col gap-5 my-10">
          <Image
            src={p1}
            alt="Work with phone"
            className="w-full rounded-lg h-full row-span-1 col-span-1"
          />
          <Image
            src={p2}
            alt="Work setup"
            className="w-full rounded-lg h-full row-span-1 col-span-1"
          />
          <Image
            src={p4}
            alt="Work in the dark"
            className="w-full rounded-lg h-full row-span-2 col-span-1"
          />
          <Image
            src={p3}
            alt="Work setup mood"
            className="w-full rounded-lg h-full row-span-1 col-span-1"
          />
          <Image
            src={p5}
            alt="Work setup"
            className="w-full rounded-lg h-full row-span-1 col-span-1"
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-start gap-20 md:gap-24 py-10">
        <ExperienceSection title="Education" items={education} />
        <ExperienceSection title="Work Experience" items={workExperience} />
      </div>
    </>
  );
}
