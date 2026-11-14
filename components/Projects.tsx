
const projects = [
  {
    number: "01",
    title: "Patient Management System",
    category: "C Programming",
    description:
      "A console-based patient management system featuring patient registration, login portals, record management and file handling.",
    technologies: ["C", "File Handling", "Structures"],
    github: "https://github.com/anshu23705",
  },
  {
    number: "02",
    title: "Krypton AI Website",
    category: "Frontend Development",
    description:
      "A company showcase website focused on presenting company achievements, products and impact through a modern user interface.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
    ],
    github: "https://github.com/diksha03/krypton-company-pitch",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="px-8 md:px-20 py-24"
    >
      <div className="max-w-6xl mx-auto">

        <p className="text-[#987653] tracking-[0.3em] text-sm mb-4">
          WHAT I'VE BEEN BUILDING
        </p>

        <h2 className="text-4xl md:text-5xl font-serif mb-5">
          Selected Projects.
        </h2>

        <p className="text-[#75695D] max-w-xl leading-8 mb-12">
          A collection of projects where I apply my
          programming knowledge, explore technologies
          and turn ideas into practical solutions.
        </p>

        <div className="grid md:grid-cols-2 gap-7">

          {projects.map((project) => (
            <article
              key={project.number}
              className="bg-[#EEE6DA] border border-[#DED2C2] rounded-2xl p-8 hover:-translate-y-2 hover:shadow-xl transition duration-300"
            >

              <div className="flex justify-between items-center mb-10">
                <span className="text-[#A47B58] text-sm tracking-widest">
                  PROJECT {project.number}
                </span>

                <span className="text-xs bg-[#F8F4EE] px-4 py-2 rounded-full text-[#665344]">
                  {project.category}
                </span>
              </div>

              <h3 className="text-2xl md:text-3xl font-serif mb-5">
                {project.title}
              </h3>

              <p className="text-[#75695D] leading-8 mb-7">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="text-sm bg-[#F8F4EE] text-[#665344] border border-[#DED2C2] px-3 py-2 rounded-full"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium hover:text-[#A47B58] transition"
              >
                View on GitHub ↗
              </a>

            </article>
          ))}

        </div>
      </div>
    </section>
  );
}
