import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
  ChevronDown, ChevronRight, GraduationCap,
  BookOpen, Target, Landmark,
  FileText, FlaskConical, Users, Briefcase,
  CalendarDays, Bell, BookMarked, UsersRound, Award, Image,
} from 'lucide-react'
import logo from "../../src/assets/iem.png"

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Faculty', href: '/faculty' },
  { label: 'Academics', href: '/academics', dropdown: true },
  { label: 'Research', href: '/research', dropdown: true },
  { label: 'More', href: '/more', dropdown: true },
  { label: 'Contact', href: '/contact' },
]

const academicsItems = [
  { icon: BookOpen, title: 'Syllabus', subtitle: 'Semester-wise curriculum and course structure', href: '/academics/syllabus' },
  { icon: Target, title: 'Program Outcomes', subtitle: 'Graduate attributes and learning outcomes', href: '/academics/program-outcomes' },
  { icon: Landmark, title: 'Board of Studies', subtitle: 'Curriculum governance and meeting archives', href: '/academics/bos-meetings' },
]

const researchItems = [
  { icon: FileText, title: 'Publications', subtitle: 'Journal papers and conference publications', href: '/research/publications' },
  { icon: FlaskConical, title: 'Funded Projects', subtitle: 'DST SERB and government funded research', href: '/research/funded-projects' },
  { icon: Users, title: 'PhD Students', subtitle: 'Doctoral scholars and research areas', href: '/research/phd-students' },
  { icon: Briefcase, title: 'Consultancy & MoU', subtitle: 'Industry collaboration and partnerships', href: '/research/consultancy' },
]

const moreItems = [
  { icon: CalendarDays, title: 'Events', subtitle: 'Workshops, seminars and celebrations', href: '/more/events' },
  { icon: Bell, title: 'Notices', subtitle: 'Latest announcements and updates', href: '/more/notices' },
  { icon: BookMarked, title: 'Journals & Conferences', subtitle: 'Academic publications and proceedings', href: '/more/journals' },
  { icon: UsersRound, title: 'Clubs & Chapters', subtitle: 'Student clubs and professional chapters', href: '/more/clubs' },
  { icon: Award, title: 'Awards', subtitle: 'Faculty and student recognitions', href: '/more/awards' },
  { icon: Image, title: 'Photo Gallery', subtitle: 'Campus life and event highlights', href: '/more/gallery' },
]

const dropdownData = {
  Academics: academicsItems,
  Research: researchItems,
  More: moreItems,
}

function Navbar() {
  const location = useLocation()
  const [openMenu, setOpenMenu] = useState(null)

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5">
          <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center shrink-0">
            <img src = {logo} />
            {/* <GraduationCap className="w-5 h-5 text-white" strokeWidth={2} /> */}
          </div>
          <div className="leading-tight">
            {/* <div className="text-navy font-bold text-[15px]">IEM BSH</div>
            <div className="text-gray-500 text-[11px]">Basic Science &amp; Humanities</div> */}
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => {
            if (link.dropdown) {
              const items = dropdownData[link.label]
              const isActive = location.pathname.startsWith(link.href)
              return (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setOpenMenu(link.label)}
                  onMouseLeave={() => setOpenMenu(null)}
                >
                  <Link
                    to={link.href}
                    className={`flex items-center gap-1 px-3.5 py-2 rounded-md text-sm font-medium transition-colors ${
                      isActive ? 'bg-blue-50 text-brand-blue' : 'text-gray-600 hover:text-navy hover:bg-gray-50'
                    }`}
                  >
                    {link.label}
                    <ChevronDown className="w-3.5 h-3.5" strokeWidth={2} />
                  </Link>

                  {openMenu === link.label && (
                    <div className="absolute top-full left-0 pt-2 w-[380px]">
                      <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-3">
                        {items.map((item) => {
                          const Icon = item.icon
                          return (
                            <Link
                              key={item.title}
                              to={item.href}
                              className="group flex items-start gap-3 p-3 rounded-xl hover:bg-blue-50/60 transition-colors border-l-2 border-transparent hover:border-brand-blue"
                            >
                              <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                                <Icon className="w-5 h-5 text-brand-blue" strokeWidth={2} />
                              </div>
                              <div className="flex-1">
                                <div className="text-navy font-semibold text-sm">{item.title}</div>
                                <div className="text-gray-500 text-xs mt-0.5 leading-snug">{item.subtitle}</div>
                              </div>
                              <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-brand-blue shrink-0 mt-1" strokeWidth={2} />
                            </Link>
                          )
                        })}
                      </div>
                    </div>
                  )}
                </div>
              )
            }

            return (
              <Link
                key={link.label}
                to={link.href}
                className={`flex items-center gap-1 px-3.5 py-2 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === link.href
                    ? 'bg-blue-50 text-brand-blue'
                    : 'text-gray-600 hover:text-navy hover:bg-gray-50'
                }`}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>


        <a
  href="https://exam.iem.edu.in/"
  target="_blank"
  rel="noopener noreferrer"
  className="hidden lg:flex items-center gap-1.5 bg-brand-blue hover:bg-blue-700 text-white text-sm font-medium px-4 py-2.5 rounded-md transition-colors"
>
  Admissions Open
  <span className="text-base leading-none">→</span>
</a>
      </div>
    </header>
  )
}

export default Navbar