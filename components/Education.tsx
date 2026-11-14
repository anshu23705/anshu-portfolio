
const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "Add your MCA university",
    status: "Currently Pursuing",
    description:
      "Building deeper knowledge of computer science, programming, software development and advanced computing concepts.",
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Amity University",
    status: "Completed",
    description:
      "Developed a foundation in programming, databases, computer applications and software development.",
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="bg-[#EAE1D5] px-8 md:px-20 py-24"
    >
      <div className="max-w-5xl mx-auto">

        <p className="text-[#987653] tracking-[0.3em] text-sm mb-4">
          MY ACADEMIC BACKGROUND
        </p>

        <h2 className="text-4xl md:text-5xl font-serif mb-5">
          Education.
        </h2>

        <p className="text-[#75695D] max-w-xl leading-8 mb-14">
          My academic journey and the foundation
          behind my interest in technology.
        </p>

        <div className="space-y-12">

          {education.map((item, index) => (
            <div
              key={item.degree}
              className="grid md:grid-cols-[180px_1fr] gap-5 border-l-2 border-[#B99A78] pl-7 relative"
            >

              <div className="absolute w-4 h-4 rounded-full bg-[#A47B58] -left-[9px] top-1" />

              <div>
                <span className="text-sm text-[#987653]">
                  0{index + 1}
                </span>
              </div>

              <div>

                <span className="inline-block text-xs tracking-wider bg-[#F5F0E8] text-[#8B7055] px-4 py-2 rounded-full mb-4">
                  {item.status}
                </span>

                <h3 className="text-2xl font-serif mb-3">
                  {item.degree}
                </h3>

                <p className="text-[#8B7055] font-medium mb-4">
                  {item.institution}
                </p>

                <p className="text-[#75695D] leading-8 max-w-2xl">
                  {item.description}
                </p>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
