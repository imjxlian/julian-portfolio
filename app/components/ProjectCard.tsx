import Link from "next/link";

interface Project {
  project: {
    title: string;
    stack: string[];
    description: string;
    category: string;
    url: string;
    image: string;
  };
  classNames: string;
}

export default function ProjectCard({ project, classNames }: Project) {
  return (
    <>
      {project.image === "" ? (
        <Link
          href={project.url}
          className="hover:scale-105 transition ease-in-out duration-100 h-95"
        >
          <div
            className={`rounded-lg p-5 h-full flex flex-col items-center justify-center dark:bg-neutral-800 ${classNames}`}
          >
            <h3 className="text-2xl font-semibold">{project.title}</h3>
            <p className="text-xl">{project.description}</p>
          </div>
        </Link>
      ) : (
        <Link
          href={project.url}
          className="hover:scale-105 transition ease-in-out duration-100"
        >
          <div
            style={{
              backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 1), transparent), url(${project.image})`,
            }}
            className={`rounded-lg p-5 bg-cover ${classNames}`}
          >
            <div className="flex flex-row justify-between items-end h-48">
              <div className="flex flex-col justify-between items-start">
                <h4 className="font-semibold mb-2">
                  <span className="bg-gradient-to-r from-rose-500 to-amber-500 text-transparent bg-clip-text text-xl">
                    {project.category}
                  </span>
                </h4>
                <h3 className="font-semibold text-2xl text-white">{project.title}</h3>
              </div>
            </div>
          </div>
        </Link>
      )}
    </>
  );
}
