
const socialLinks = [
  {
    name: "GitHub",
    username: "@anshu23705",
    url: "https://github.com/anshu23705",
  },
  {
    name: "LinkedIn",
    username: "Connect with me",
    url: "https://www.linkedin.com/feed/",
  },
];

export default function Contact() {
  return (
    <>
      <section
        id="contact"
        className="bg-[#EAE1D5] px-8 md:px-20 py-24"
      >
        <div className="max-w-5xl mx-auto">

          <div className="text-center mb-16">
            <p className="text-[#987653] tracking-[0.3em] text-sm mb-5">
              GET IN TOUCH
            </p>

            <h2 className="text-4xl md:text-6xl font-serif mb-7">
              Let's create something.
            </h2>

            <p className="text-[#75695D] leading-8 max-w-xl mx-auto">
              I'm always open to learning opportunities,
              collaborations and interesting projects.
              Feel free to reach out!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">

            {/* EMAIL */}
            <a
              href="mailto:anshusaxena2309@gmail.com"
              className="bg-[#F5F0E8] border border-[#DED2C2] rounded-2xl p-8 hover:-translate-y-1 transition"
            >
              <p className="text-[#987653] text-sm mb-4">
                EMAIL ME
              </p>

              <h3 className="text-xl font-serif">
                Let's talk ↗
              </h3>

              <p className="text-sm text-[#75695D] mt-3">
                anshusaxena2309@gmail.com
              </p>
            </a>

            {/* SOCIAL LINKS */}
            <div className="bg-[#F5F0E8] border border-[#DED2C2] rounded-2xl p-8">

              <p className="text-[#987653] text-sm mb-5">
                FIND ME ONLINE
              </p>

              <div className="space-y-5">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex justify-between items-center group"
                  >
                    <div>
                      <h3 className="font-serif text-lg">
                        {social.name}
                      </h3>

                      <p className="text-sm text-[#75695D]">
                        {social.username}
                      </p>
                    </div>

                    <span className="group-hover:translate-x-1 transition">
                      ↗
                    </span>
                  </a>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#332D27] text-[#F5F0E8] px-8 py-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="font-serif text-2xl">AS.</p>

          <p className="text-sm text-[#C9B9A7]">
            © 2026 Anshu Saxena.
          </p>

          <a href="#home" className="text-sm hover:text-[#C9B9A7]">
            Back to top ↑
          </a>

        </div>
      </footer>
    </>
  );
}
