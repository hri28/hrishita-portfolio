import { FiMail, FiGithub, FiLinkedin } from "react-icons/fi";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen px-8 md:px-16 pt-24 pb-10"
    >
      <div className="max-w-6xl mx-auto min-h-[calc(100vh-96px)] flex flex-col">
        
        {/* Section title */}
        <h2 className="font-mono text-[#a78bfa] text-xl mb-16 text-right">
          Get in touch
        </h2>

        {/* Content + footer wrapper */}
        <div className="max-w-2xl flex flex-col flex-1">
          
          {/* Main content */}
          <div>
            <h3 className="font-mono text-4xl md:text-5xl leading-tight">
              Let’s build something{" "}
              <span className="text-[#84cc16]">useful</span>.
            </h3>

            <p className="mt-6 font-serif text-white/80 text-lg leading-relaxed">
              I’m always open to discussing full-time roles or interesting product
              ideas. If you’d like to connect, the fastest way is email.
            </p>

            {/* CTAs */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href="mailto:hrishita.hrish@gmail.com"
                className="
                  inline-flex items-center justify-center gap-2
                  font-mono text-sm font-medium
                  px-6 py-3
                  border border-[#a78bfa]/60
                  text-[#a78bfa]
                  rounded-md
                  hover:bg-[#a78bfa]
                  hover:text-black
                  transition
                "
              >
                <FiMail />
                Say hello
              </a>

              <a
                href="#projects"
                className="
                  inline-flex items-center justify-center
                  font-mono text-sm font-medium
                  px-6 py-3
                  border border-white/20
                  text-white/80
                  rounded-md
                  hover:border-white/40
                  hover:text-white
                  transition
                "
              >
                View projects
              </a>
            </div>

            {/* Social links */}
            <div className="mt-14 flex flex-col sm:flex-row gap-6">
              <a
                href="https://www.linkedin.com/in/hrishita-sharma-2a67241a9/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-[#84cc16] transition"
              >
                <FiLinkedin className="text-2xl" />
                <span className="font-mono text-sm">LinkedIn</span>
              </a>

              <a
                href="https://github.com/hri28"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-[#84cc16] transition"
              >
                <FiGithub className="text-2xl" />
                <span className="font-mono text-sm">GitHub</span>
              </a>
            </div>
          </div>

          {/* Footer note — pinned to bottom */}
          <p className="mt-auto pt-6 border-t border-white/10 font-mono text-xs text-white/40">
            {new Date().getFullYear()} Hrishita Sharma — Built with Next.js & TailwindCSS.
          </p>
        </div>
      </div>
    </section>
  );
}
