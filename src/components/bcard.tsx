import _React from "npm:react";
import { Linkedin, Github, Mail } from "lucide-react"

export default function BCard({
  name = "Vicente Lermanda",
  description = "Software Engineer | CS MSc Student @ PUC",
  socialLinks = { 
    linkedin: "#",
    github: "#",
    mail: "mailto:vicente@vlermanda.com"
  }
}) {
  return (
    <div className="card">
      <div className="border"></div>
      <svg className="absolute -z-10 inset-0 w-full h-full pointer-events-none">
        <defs>
          <filter id="noiseFilter">
            <feTurbulence type="fractalNoise" baseFrequency="0.6" stitchTiles="stitch" />
          </filter>
          <clipPath id="rounded-clip">
            <rect width="100%" height="100%" rx="5" ry="5" />
          </clipPath>
        </defs>
        <rect width="100%" height="100%" filter="url(#noiseFilter)" opacity="0.14" clipPath="url(#rounded-clip)" />
      </svg>

      <div className="content relative z-10 px-6 py-10">
        <h2 className="name mb-1 text-3xl font-bold">{name}</h2>
        <p className="description mb-4 px-2 text-gray-300">{description}</p>

        <h2 className="name px-2 mb-1 text-xl font-bold">Currently working on</h2>
        <ul className="list-disc list-inside text-gray-300">
          <li>Building a new website</li>
          <li>Writing a blog post</li>
        </ul>

        <div className="social-links justify-center flex space-x-8 mt-4">
          {socialLinks.linkedin && (
            <a href={socialLinks.linkedin} className="text-gray-400 hover:text-white transition-colors" aria-label="Linkedin">
              <Linkedin size={18} />
            </a>
          )}
          {socialLinks.github && (
            <a href={socialLinks.github} className="text-gray-400 hover:text-white transition-colors" aria-label="Github">
              <Github size={18} />
            </a>
          )}
          {socialLinks.mail && (
            <a href={socialLinks.mail} className="text-gray-400 hover:text-white transition-colors" aria-label="Github">
              <Mail size={18} />
            </a>
          )}
        </div>
      </div>

      <div className="shadow"></div>
      <div className="backdrop"></div>
    </div>
  )
}
