import StatsBar from '../StatsBar'
import { GraduationCap, Users, Award, BookOpen } from 'lucide-react'

const phdStats = [
  { icon: Users, value: '18', label: 'Registered Scholars' },
  { icon: GraduationCap, value: '11', label: 'Awarded PhDs' },
  { icon: BookOpen, value: '6', label: 'Research Areas' },
  { icon: Award, value: '4', label: 'Ongoing Fellowships' },
]

function PhdStats() {
  return <StatsBar stats={phdStats} />
}

export default PhdStats