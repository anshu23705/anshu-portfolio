
export default function About() {
  return (
    <section
      id="about"
      className="bg-[#EAE1D5] px-8 md:px-20 py-24"
    >
      <div className="max-w-5xl mx-auto">

        <p className="text-[#987653] tracking-[0.3em] text-sm mb-4">
          A LITTLE INTRODUCTION
        </p>

        <h2 className="text-4xl md:text-5xl font-serif mb-8">
          More about me.
        </h2>

        <p className="text-[#75695D] leading-8 max-w-3xl mb-8">
          I am a computer science graduate with a
          Bachelor of Computer Applications degree,
          currently pursuing my journey in computer
          science and software development.

          I enjoy programming, solving problems,
          exploring new technologies and turning
          ideas into practical projects.

          I am continuously working on improving my
          technical skills and gaining hands-on
          experience through projects and learning.
        </p>

        <div className="grid sm:grid-cols-2 gap-6 mt-12">

          <div className="border-l-2 border-[#A47B58] pl-5">
            <p className="text-sm text-[#987653] mb-2">
              EDUCATION
            </p>
            <h3 className="text-xl font-serif">
              Bachelor of Computer Applications
            </h3>
            <p className="text-sm text-[#75695D] mt-2">
              Amity University
            </p>
          </div>

          <div className="border-l-2 border-[#A47B58] pl-5">
            <p className="text-sm text-[#987653] mb-2">
              INTERESTS
            </p>
            <h3 className="text-xl font-serif">
              Technology & Development
            </h3>
            <p className="text-sm text-[#75695D] mt-2">
              Programming · Web Development · AI
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
