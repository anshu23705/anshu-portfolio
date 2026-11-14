
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="max-w-6xl mx-auto px-8 md:px-12 py-16 md:py-24 grid md:grid-cols-2 gap-16 items-center"
    >
      {/* INTRODUCTION */}
      <div className="animate-fade-up">

        <p className="uppercase tracking-[0.3em] text-sm text-[#987653] mb-6">
          Hello, welcome to my portfolio
        </p>

        <h1 className="text-5xl md:text-7xl font-serif leading-tight mb-6">
          I'm Anshu
          <br />
          <span className="italic text-[#A47B58]">
            Saxena.
          </span>
        </h1>

        <h2 className="text-xl md:text-2xl mb-5 font-medium">
          Aspiring Software Developer
        </h2>

        <p className="text-[#75695D] leading-8 max-w-md mb-9">
          A computer science graduate passionate about
          technology, problem-solving and building
          meaningful digital experiences. Currently
          exploring software development and continuously
          learning new things.
        </p>

        <div className="flex flex-wrap gap-4">

          <a
            href="#projects"
            className="bg-[#332D27] text-white px-7 py-4 rounded-full hover:bg-[#8B7055] transition"
          >
            Explore My Work ↗
          </a>

          <a
            href="#about"
            className="border border-[#332D27] px-7 py-4 rounded-full hover:bg-[#E9DFD1] transition"
          >
            About Me
          </a>

        </div>
      </div>

      {/* PROFILE IMAGE */}
      <div className="flex justify-center md:justify-end animate-image delay-200">

        <div className="relative w-[290px] h-[390px] md:w-[390px] md:h-[510px]">

          <div className="absolute inset-0 border border-[#A47B58] rounded-t-full translate-x-3 translate-y-3" />

          <div className="relative w-full h-full overflow-hidden rounded-t-full profile-image">

            <Image
              src="/anshu-profile.png"
              alt="Anshu Saxena"
              fill
              priority
              sizes="(max-width: 768px) 290px, 390px"
              className="object-cover object-center"
            />

          </div>
        </div>
      </div>

    </section>
  );
}
