import Navbar from '../components/Navbar'
import PageHero from '../components/PageHero'
import StatsBar from '../components/StatsBar'
import MeetingTimeline from '../components/bos/MeetingTimeline'
import CommitteeInfo from '../components/bos/CommitteeInfo'
import GovernanceWorkflow from '../components/bos/GovernanceWorkflow'
import Footer from '../components/Footer'
import { CalendarCheck, RefreshCw, Users, ShieldCheck } from 'lucide-react'

const bosStats = [
  { icon: CalendarCheck, value: '24', label: 'Meetings' },
  { icon: RefreshCw, value: '18', label: 'Curriculum Revisions' },
  { icon: Users, value: '6', label: 'Industry Experts' },
  { icon: ShieldCheck, value: 'NAAC', label: 'Compliant' },
]

function BosMeetingsPage() {
  return (
    <div>
      <Navbar />
      <PageHero
        badge="Academics"
        title="Board of Studies"
        subtitle="Curriculum governance and meeting archives for the BSH department."
      />
      <StatsBar stats={bosStats} />
      <MeetingTimeline />
      <CommitteeInfo />
      <GovernanceWorkflow />
      <Footer />
    </div>
  )
}

export default BosMeetingsPage