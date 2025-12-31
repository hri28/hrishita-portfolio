export default function Experience() {
  return (
    <section
      id="experience"
      className="min-h-screen px-8 md:px-16 py-32"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[200px_1fr] gap-12">
        
        {/* Left label */}
        <div>
          <p className="font-mono text-sm text-[#a78bfa] sticky top-32  md:text-xl">
            experience
          </p>
        </div>

        {/* Right content */}
        <div className="space-y-16">
          
          {/* Experience item */}
          <div
  className="
    group
    relative
    grid grid-cols-1 md:grid-cols-[140px_1fr]
gap-6
    p-6
    -mx-6
    my-4
    rounded-lg
    transition
    hover:bg-white/[0.04]
  "
>
    <span
  className="
    absolute
    left-0
    top-4
    bottom-4
    w-[2px]
    bg-[#a78bfa]
    opacity-0
    group-hover:opacity-100
    transition
  "
/>


            <p className="font-mono text-sm text-white/50">
              Jan 2025 — Present
            </p>

            <div className="space-y-3">
              <h3 className="font-mono text-lg">
                Research Assistant (Development) · UbiLabs - University of Waterloo
              </h3>

              <p className="font-serif text-white/80 leading-relaxed">
                Design and develop a Canada-wide substance use reporting and analytics platform for CCSA (Canadian Centre for Substance Use and Addiction) from multiple public data sources, including Social Media, MediaCloud, and Health Agencies. Implement dynamic map layers, clustering, filtering, and backend architecture to serve aggregated substance-use data across multiple upstream sources with heterogeneous schemas.
                <br />
                Worked for ONCAT (Ontario Council on Articulation and Transfer) on PathwAI, an AI-driven platform that assists students and institutions in course comparison and transfer credit evaluation. Built the 1:1 course comparison system enabling structured comparisons of course descriptions and learning outcomes. Implemented semantic similarity analysis using embedding/LLM APIs, with backend job pipelines to compute and aggregate learning outcome similarity scores.
              </p>

              {/* Tech stack */}
              <ul className="flex flex-wrap gap-2 pt-2">
                {["React", "TypeScript", "Python", "Laravel", "Next.js", "PHP"].map(
                  (tech) => (
                    <li
                      key={tech}
                      className="
  font-mono
  text-xs
  px-3
  py-1
  rounded-full
  bg-[#84cc16]/10
  text-[#84cc16]
  hover:bg-[#84cc16]/20
  transition
"

                    >
                      {tech}
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>

          <div
  className="
    group
    relative
    grid grid-cols-1 md:grid-cols-[140px_1fr]
    gap-6
    p-6
    -mx-6
    my-4
    rounded-lg
    transition
    hover:bg-white/[0.04]
  "
>
<span
  className="
    absolute
    left-0
    top-4
    bottom-4
    w-[2px]
    bg-[#a78bfa]
    opacity-0
    group-hover:opacity-100
    transition
  "
/>

            <p className="font-mono text-sm text-white/50">
              2023 — 2024
            </p>

            <div className="space-y-3">
              <h3 className="font-mono text-lg">
                Associate Software Development Engineer · Bajaj Finserv Health
              </h3>

              <p className="font-serif text-white/80 leading-relaxed">
                Develop and deploy production monitoring systems detecting real-time website journey downtimes and failures across critical workflows. Worked cross-functionally to restructure core React.js modules, increasing component reuse and improving client-side performance. Implemented CI/CD pipelines and backend automation flows through curl-generation framework, accelerating regression testing and reducing sprint delivery timelines.
              </p>

              <ul className="flex flex-wrap gap-2 pt-2">
                {["Python", "Java","Next.js", "JavaScript", "Selenium", "REST Assured"].map((tech) => (
                  <li
                    key={tech}
                    className="
  font-mono
  text-xs
  px-3
  py-1
  rounded-full
  bg-[#84cc16]/10
  text-[#84cc16]
  hover:bg-[#84cc16]/20
  transition
"

                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </div>


          <div
  className="
    group
    relative
    grid grid-cols-1 md:grid-cols-[140px_1fr]
    gap-6
    p-6
    -mx-6
    my-4
    rounded-lg
    transition
    hover:bg-white/[0.04]
  "
>
    <span
  className="
    absolute
    left-0
    top-4
    bottom-4
    w-[2px]
    bg-[#a78bfa]
    opacity-0
    group-hover:opacity-100
    transition
  "
/>


            <p className="font-mono text-sm text-white/50">
              2022 — 2023
            </p>

            <div className="space-y-3">
              <h3 className="font-mono text-lg">
                 Software Development Engineer Intern · Bajaj Finserv Health
              </h3>

              <p className="font-serif text-white/80 leading-relaxed">
                Develop internal monitoring dashboards for performance metrics and implement performance optimizations across application workflows. Migrating in-house API automation framework to new framework, improving backend performance validation. Deploy microservices architecture with service-to-service communication reporting to improve scalability and reduce redundant API invocations.
              </p>

              <ul className="flex flex-wrap gap-2 pt-2">
                {["Python", "Java","Next.js", "JavaScript", "ElasticSearch", "REST Assured"].map((tech) => (
                  <li
                    key={tech}
                   className="
  font-mono
  text-xs
  px-3
  py-1
  rounded-full
  bg-[#84cc16]/10
  text-[#84cc16]
  hover:bg-[#84cc16]/20
  transition
"

                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
