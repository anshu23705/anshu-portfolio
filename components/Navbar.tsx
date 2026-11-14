
const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
  { name: "Education", href: "#education" },
  { name: "Resume", href: "#resume" },
];

export default function Navbar() {
  return (
    <nav className="relative z-50 flex items-center justify-between px-8 md:px-20 py-7">

      {/* LOGO */}
      <a
        href="#home"
        className="text-3xl font-serif font-bold tracking-wider"
      >
        AS.
      </a>

      {/* DESKTOP NAVIGATION */}
      <div className="hidden md:flex gap-8 text-sm tracking-wide">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="hover:text-[#A47B58] transition"
          >
            {link.name}
          </a>
        ))}
      </div>

      {/* DESKTOP CONTACT BUTTON */}
      <a
        href="#contact"
        className="hidden md:block border border-[#332D27] px-5 py-2 rounded-full text-sm hover:bg-[#332D27] hover:text-white transition"
      >
        Let's Talk ↗
      </a>

      {/* MOBILE MENU */}
      <details className="relative md:hidden group">

        <summary
          className="list-none cursor-pointer border border-[#332D27] rounded-full px-5 py-2 text-sm"
        >
          Menu ☰
        </summary>

        <div className="absolute right-0 top-14 w-52 bg-[#F5F0E8] border border-[#DED2C2] rounded-xl shadow-lg p-5 flex flex-col gap-5">

          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm hover:text-[#A47B58] transition"
            >
              {link.name}
            </a>
          ))}

        </div>

      </details>

    </nav>
  );
}
