import { FiGithub, FiExternalLink } from "react-icons/fi";

type Props = {
  project: {
    title: string;
    description: string;
    tech: string[];
    github: string;
    live?: string | null;
    highlight?: boolean;
  };
};

export default function ProjectCard({ project }: Props) {
  return (
    <div
      className={`
        relative
        border border-[#a78bfa]
        p-6
        h-[450px]
        flex flex-col justify-between
        transition
        duration-300
        hover:-translate-x-1
        hover:-translate-y-1
        hover:shadow-[6px_6px_0_0_#a78bfa]
        ${project.highlight ? "" : "bg-transparent"}
      `}
    >
      {/* Top icons */}
      <div className="flex justify-end gap-4 text-black">
        {project.live && (
          <a href={project.live} target="_blank">
            <FiExternalLink size={22} />
          </a>
        )}
        <a href={project.github} target="_blank">
          <FiGithub size={22} className="text-[#84cc16]" />
        </a>
      </div>

      {/* Content */}
      <div className="mt-6 space-y-4">
        <h3 className="font-mono text-2xl text-[#a78bfa] font-normal">
          {project.title}
        </h3>

        <p className="font-serif text-white/80 leading-relaxed text-lg">
          {project.description}
        </p>      
      </div>

      {/* Footer */}
      <ul className="flex flex-wrap gap-3 pt-6">
        {project.tech.map((tech) => (
          <li
            key={tech}
            className="font-mono text-xs text-[#84cc16]"
          >
            {tech}
          </li>
        ))}
      </ul>
    </div>
  );
}
