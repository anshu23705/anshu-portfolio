
export default function Resume() {
  return (
    <section
      id="resume"
      className="px-8 md:px-20 py-24"
    >
      <div className="max-w-5xl mx-auto">

        <div className="bg-[#EEE6DA] border border-[#DED2C2] rounded-3xl p-10 md:p-16 text-center">

          <p className="text-[#987653] tracking-[0.3em] text-sm mb-5">
            MY RESUME
          </p>

          <h2 className="text-4xl md:text-5xl font-serif mb-6">
            Interested in my journey?
          </h2>

          <p className="text-[#75695D] leading-8 max-w-xl mx-auto mb-9">
            Explore my academic background, technical
            skills, projects and experience in detail.
            Download my resume to know more about me.
          </p>

          <a
            href="/Anshu-Saxena-Resume.pdf"
            download
            className="inline-flex items-center gap-3 bg-[#332D27] text-white px-8 py-4 rounded-full hover:bg-[#8B7055] transition"
          >
            <span>Download My Resume</span>
            <span>↓</span>
          </a>

        </div>
      </div>
    </section>
  );
}
