import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen px-8 md:px-16 py-32"
    >
      {/* Section title */}
          <p className="font-mono text-sm text-[#a78bfa] pb-10 text-center  md:text-xl">
            projects
          </p>

      {/* Grid */}
      <div className="
        grid
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-3
        gap-8
        max-w-7xl
        mx-auto
      ">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
