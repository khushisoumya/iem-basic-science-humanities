import Navbar from '../components/Navbar'
import PageHero from '../components/PageHero'
import StatsBar from '../components/StatsBar'
import OutcomeGrid from '../components/programOutcomes/OutcomeGrid'
import GraduateAttributes from '../components/programOutcomes/GraduateAttributes'
import OutcomeFlow from '../components/programOutcomes/OutcomeFlow'
import OutcomesCTA from '../components/programOutcomes/OutcomesCTA'
import Footer from '../components/Footer'
import { Target, Users, Sparkles, Award } from 'lucide-react'

const poStats = [
  { icon: Target, value: '12', label: 'Program Outcomes' },
  { icon: Users, value: '8', label: 'Graduate Attributes' },
  { icon: Sparkles, value: '100%', label: 'Outcome Based Education' },
  { icon: Award, value: 'NAAC', label: 'Aligned' },
]

function ProgramOutcomesPage() {
  return (
    <div>
      <Navbar />
      <PageHero
        badge="Academics"
        title="Program Outcomes"
        subtitle="Our graduates develop technical competence, ethical values, innovation and lifelong learning."
      />
      <StatsBar stats={poStats} />
      <OutcomeGrid />
      <GraduateAttributes />
      <OutcomeFlow />
      <OutcomesCTA />
      <Footer />
    </div>
  )
}

export default ProgramOutcomesPage