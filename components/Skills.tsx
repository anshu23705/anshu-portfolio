
const skillGroups = [
  {
    category: "Programming Languages",
    skills: ["C", "C++", "Python", "Java"],
  },
  {
    category: "Web Development",
    skills: ["HTML", "CSS", "JavaScript", "React", "Next.js"],
  },
  {
    category: "Database Management",
    skills: ["SQL", "DBMS", "MySQL"],
  },
  {
    category: "Computer Science",
    skills: ["Data Structures", "OOP", "Operating Systems"],
  },
  {
    category: "Developer Tools",
    skills: ["Git", "GitHub", "VS Code"],
  },
  {
    category: "Currently Exploring",
    skills: ["Tailwind CSS", "AI", "Software Development"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="px-8 md:px-20 py-24"
    >
      <div className="max-w-6xl mx-auto">

        <p className="text-[#987653] tracking-[0.3em] text-sm mb-4">
          WHAT I WORK WITH
        </p>

        <h2 className="text-4xl md:text-5xl font-serif mb-5">
          My Technical Skills.
        </h2>

        <p className="text-[#75695D] max-w-xl leading-8 mb-12">
          Technologies and tools I am learning and
          using to develop my programming and
          software development skills.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">

          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="bg-[#EEE6DA] border border-[#DED2C2] p-7 rounded-2xl hover:-translate-y-2 hover:shadow-lg transition duration-300"
            >

              <h3 className="text-xl font-serif mb-6">
                {group.category}
              </h3>

              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-sm bg-[#F8F4EE] text-[#665344] border border-[#DED2C2] px-3 py-2 rounded-full"
                  >
                    {skill}
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
