
import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: {
    default: "Anshu Saxena | Portfolio",
    template: "%s | Anshu Saxena",
  },
  description:
    "Anshu Saxena's personal portfolio showcasing her education, technical skills, projects and journey in software development.",
  keywords: [
    "Anshu Saxena",
    "Software Developer",
    "Web Development",
    "Portfolio",
    "Next.js",
    "React",
  ],
  authors: [
    {
      name: "Anshu Saxena",
    },
  ],
  openGraph: {
    title: "Anshu Saxena | Personal Portfolio",
    description:
      "Explore my projects, skills and journey in technology.",
    type: "website",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${dmSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
