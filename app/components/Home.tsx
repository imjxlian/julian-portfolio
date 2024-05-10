"use client";

import Link from "next/link";
import Image from "next/image";
import BackgroundImage from "../../public/Sujet.png";
import SocialBar from "../components/SocialBar";

export default function Home() {
  const mainTitle = "Hi 👋🏻";
  const subTitle = "I'm";
  const hireMeButtonText = "Hire me";
  const myProjectsButtonText = "My projects";
  const followMeTitle = "Follow me";

  return (
    <div className="flex justify-between items-start my-auto">
      <div>
        <h2 className="text-6xl font-medium mb-3">{mainTitle}</h2>

        <div className="flex flex-col flex-wrap w-min">
          <h2 className="text-6xl font-semibold text-nowrap mb-4">
            {subTitle}{" "}
            <span className="bg-gradient-to-r from-rose-500 to-amber-500 text-transparent bg-clip-text">
              Julian Forme
            </span>
          </h2>
          <div className="flex justify-between items-center gap-5">
            <div className="bg-gradient-to-r from-rose-500 to-amber-500 h-1 w-full"></div>
            <p className="text-2xl font-light text-nowrap">Software Engineer</p>
          </div>

          <p className="my-10">
            I am a Bordeaux-based creative developer with a passion for my work.
            I am constantly seeking new challenges and growth opportunities.
          </p>

          <div className="flex mb-10">
            <Link href="/projects">
              <button className="px-5 py-3 mb-2 me-2 overflow-hidden font-semibold text-neutral-900 dark:text-white rounded-lg group bg-gradient-to-r from-rose-500 to-amber-500 flex items-center justify-center gap-2 text-white">
                {hireMeButtonText}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 0 1 .75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 0 1 9.75 22.5a.75.75 0 0 1-.75-.75v-4.131A15.838 15.838 0 0 1 6.382 15H2.25a.75.75 0 0 1-.75-.75 6.75 6.75 0 0 1 7.815-6.666ZM15 6.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z"
                    clipRule="evenodd"
                  />
                  <path d="M5.26 17.242a.75.75 0 1 0-.897-1.203 5.243 5.243 0 0 0-2.05 5.022.75.75 0 0 0 .625.627 5.243 5.243 0 0 0 5.022-2.051.75.75 0 1 0-1.202-.897 3.744 3.744 0 0 1-3.008 1.51c0-1.23.592-2.323 1.51-3.008Z" />
                </svg>
              </button>
            </Link>

            <Link
              href="/projects"
              className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden font-semibold text-neutral-900 dark:text-white rounded-lg group bg-gradient-to-l from-emerald-500 to-amber-500 group-hover:from-rose-500 group-hover:to-amber-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none"
            >
              <button className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-slate-100 dark:bg-neutral-900 rounded-md group-hover:bg-opacity-0">
                {myProjectsButtonText}
              </button>
            </Link>
          </div>

          <SocialBar title={followMeTitle} />
        </div>
      </div>
      <div className="w-1/3">
        <Image src={BackgroundImage} alt="Julian Forme" />
      </div>
    </div>
  );
}
