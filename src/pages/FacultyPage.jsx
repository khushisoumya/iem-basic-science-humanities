import Navbar from '../components/Navbar'
import PageHero from '../components/PageHero'
import StatsBar from '../components/StatsBar'
import FacultyHeader from '../components/faculty/FacultyHeader'
import FacultyGrid from '../components/faculty/FacultyGrid'
import FacultyCTA from '../components/faculty/FacultyCTA'
import Footer from '../components/Footer'
import { Users, GraduationCap, BookOpen, Award } from 'lucide-react'

const facultyStats = [
  { icon: Users, value: '36+', label: 'Faculty Members' },
  { icon: GraduationCap, value: '12', label: 'Professors' },
  { icon: BookOpen, value: '18', label: 'Associate Professors' },
  { icon: Award, value: '6+', label: 'Avg. Years Experience' },
]

function FacultyPage() {
  return (
    <div>
      <Navbar />
      <PageHero
        badge="Faculty"
        title="Faculty"
        subtitle="Our esteemed faculty members inspiring excellence and shaping future leaders."
      />
      <StatsBar stats={facultyStats} />
      <FacultyHeader shown={6} total={36} />
      <FacultyGrid />
      <FacultyCTA />
      <Footer />
    </div>
  )
}

export default FacultyPage