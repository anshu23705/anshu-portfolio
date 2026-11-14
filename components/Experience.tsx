
const experiences = [
  {
    company: "Krypton AI",
    role: "Frontend Development Contributor",
    type: "Project-based Experience",
    description:
      "Worked on a company showcase website, contributing to frontend development and user interface design. Focused on building navigation components and creating a clean, responsive web experience.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Git",
      "GitHub",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="bg-[#EAE1D5] px-8 md:px-20 py-24"
    >
      <div className="max-w-5xl mx-auto">

        <p className="text-[#987653] tracking-[0.3em] text-sm mb-4">
          MY PROFESSIONAL JOURNEY
        </p>

        <h2 className="text-4xl md:text-5xl font-serif mb-12">
          Experience.
        </h2>

        <div className="space-y-10">

          {experiences.map((experience) => (
            <div
              key={experience.company}
              className="border-l-2 border-[#B99A78] pl-7 relative"
            >

              <div className="absolute w-4 h-4 rounded-full bg-[#A47B58] -left-[9px] top-1" />

              <p className="text-sm text-[#987653] mb-3 tracking-wider">
                {experience.type}
              </p>

              <h3 className="text-2xl font-serif mb-2">
                {experience.company}
              </h3>

              <h4 className="text-[#665344] font-medium mb-4">
                {experience.role}
              </h4>

              <p className="text-[#75695D] leading-8 max-w-3xl mb-6">
                {experience.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="bg-[#F5F0E8] text-[#665344] px-3 py-2 rounded-full text-sm border border-[#DED2C2]"
                  >
                    {technology}
                  </span>
                ))}
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
