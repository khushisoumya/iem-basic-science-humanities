import { GraduationCap, MapPin, Phone, Mail } from 'lucide-react'
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn } from 'react-icons/fa'

const linkColumns = [
  {
    title: 'Quick Links',
    links: ['Home', 'About Us', 'Faculty', 'Notices', 'Contact'],
  },
  {
    title: 'Academics',
    links: ['Syllabus', 'Program Outcomes', 'BoS Meetings', 'Journals'],
  },
  {
    title: 'Research',
    links: ['Publications', 'Funded Projects', 'PhD Program', 'Consultancy'],
  },
  {
    title: 'Explore',
    links: ['Events', 'Clubs & Chapters', 'Awards', 'Photo Gallery'],
  },
]

function Footer() {
  return (
    <footer className="bg-navy text-white pt-16 pb-6 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-[1.4fr_1fr_1fr_1fr_1fr_1.2fr] gap-10 pb-12 border-b border-white/10">
        {/* Logo + description */}
        <div>
          <div className="flex items-center gap-2.5 mb-4">
            <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
              <GraduationCap className="w-5 h-5 text-white" strokeWidth={2} />
            </div>
            <div className="leading-tight">
              <div className="font-bold text-sm">IEM BSH</div>
              <div className="text-gray-400 text-[11px]">Basic Science &amp; Humanities</div>
            </div>
          </div>
          <p className="text-gray-400 text-xs leading-relaxed mb-5">
            Department of Basic Science and Humanities at Institute of Engineering &amp; Management, Kolkata. Excellence in education, research, and innovation.
          </p>
          <div className="flex items-center gap-3">
            {[FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                <Icon className="w-3.5 h-3.5 text-white" strokeWidth={2} />
              </a>
            ))}
          </div>
        </div>

        {/* Link columns */}
        {linkColumns.map((col) => (
          <div key={col.title}>
            <h4 className="font-semibold text-sm mb-4">{col.title}</h4>
            <ul className="flex flex-col gap-2.5">
              {col.links.map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-400 text-xs hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Contact */}
        <div>
          <h4 className="font-semibold text-sm mb-4">Contact Us</h4>
          <ul className="flex flex-col gap-3">
            <li className="flex items-start gap-2 text-gray-400 text-xs">
              <MapPin className="w-3.5 h-3.5 shrink-0 mt-0.5" strokeWidth={2} />
              Y-12, Block EP, Sector V, Salt Lake, Kolkata, West Bengal 700091
            </li>
            <li className="flex items-center gap-2 text-gray-400 text-xs">
              <Phone className="w-3.5 h-3.5 shrink-0" strokeWidth={2} />
              +91-33-2357-0930
            </li>
            <li className="flex items-center gap-2 text-gray-400 text-xs">
              <Mail className="w-3.5 h-3.5 shrink-0" strokeWidth={2} />
              info@iem.edu.in
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 pt-6 text-gray-500 text-xs">
        <span>© 2026 IEM BSH. All rights reserved.</span>
        <span>Institute of Engineering &amp; Management, Kolkata</span>
      </div>
    </footer>
  )
}

export default Footer