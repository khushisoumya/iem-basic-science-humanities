import StatsBar from '../StatsBar'
import { Briefcase, Handshake, Building2, IndianRupee } from 'lucide-react'

const consultancyStats = [
  { icon: Handshake, value: '14', label: 'Active MoUs' },
  { icon: Briefcase, value: '9', label: 'Consultancy Projects' },
  { icon: Building2, value: '11', label: 'Industry Partners' },
  { icon: IndianRupee, value: '₹1.1 Cr', label: 'Consultancy Revenue' },
]

function ConsultancyStats() {
  return <StatsBar stats={consultancyStats} />
}

export default ConsultancyStats