import _React from "npm:react";
import { Twitter, Instagram, Facebook } from "lucide-react"

export default function Component({
  bannerUrl = "../assets/swing.jpeg",
  avatarUrl = "../assets/lain.jpeg",
  name = "A",
  description = "some description",
  socialLinks = { twitter: "#", instagram: "#", facebook: "#" }
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

      <div className="banner relative">
        <img src={bannerUrl} alt="banner" transform-images="avif 300@2 " className="w-full object-cover z-10" />
        <div className="avatar absolute -bottom-16 left-1/2 h-32 w-32 -translate-x-1/2 overflow-hidden rounded-full border-4 border-[#2F2B48]">
          <img src={avatarUrl} alt={name} transform-images="avif 300@2" className="h-full w-full object-cover z-10" />
        </div>
      </div>
      <div className="content relative z-10 px-6 pb-6 pt-20 text-center">
        <h2 className="name mb-1 text-3xl font-bold">{name}</h2>
        <p className="description mb-6 text-gray-300">{description}</p>
        <div className="social-links flex justify-center space-x-4">
          {socialLinks.twitter && (
            <a href={socialLinks.twitter} className="text-gray-400 hover:text-white transition-colors" aria-label="Twitter">
              <Twitter size={24} />
            </a>
          )}
          {socialLinks.instagram && (
            <a href={socialLinks.instagram} className="text-gray-400 hover:text-white transition-colors" aria-label="Instagram">
              <Instagram size={24} />
            </a>
          )}
        </div>
      </div>

      <div className="shadow"></div>
      <div className="backdrop"></div>
    </div>
  )
}
