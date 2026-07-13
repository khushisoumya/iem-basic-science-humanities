import Navbar from '../components/Navbar'
import PageHero from '../components/PageHero'
import StatsBar from '../components/StatsBar'
import SemesterSelector from '../components/syllabus/SemesterSelector'
import SyllabusFilters from '../components/syllabus/SyllabusFilters'
import CourseGrid from '../components/syllabus/CourseGrid'
import AcademicResources from '../components/syllabus/AcademicResources'
import CurriculumProcess from '../components/syllabus/CurriculumProcess'
import SyllabusCTA from '../components/syllabus/SyllabusCTA'
import Footer from '../components/Footer'
import { BookOpen, FlaskConical, Layers, Award } from 'lucide-react'

const syllabusStats = [
  { icon: BookOpen, value: '48', label: 'Courses' },
  { icon: FlaskConical, value: '8', label: 'Laboratories' },
  { icon: Layers, value: '100%', label: 'CBCS' },
  { icon: Award, value: 'NAAC', label: 'Aligned' },
]

function SyllabusPage() {
  return (
    <div>
      <Navbar />
      <PageHero
        badge="Academics"
        title="Syllabus"
        subtitle="Semester-wise curriculum and course structure for the BSH department."
      />
      <StatsBar stats={syllabusStats} />
      <SemesterSelector />
      <SyllabusFilters />
      <CourseGrid />
      <AcademicResources />
      <CurriculumProcess />
      <SyllabusCTA />
      <Footer />
    </div>
  )
}

export default SyllabusPage