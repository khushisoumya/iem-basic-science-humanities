import StatsBar from '../StatsBar'
import { FlaskConical, IndianRupee, Users, CheckCircle2 } from 'lucide-react'

const fundedStats = [
  { icon: FlaskConical, value: '22', label: 'Total Projects' },
  { icon: IndianRupee, value: '₹2.4 Cr', label: 'Funding Secured' },
  { icon: Users, value: '14', label: 'Principal Investigators' },
  { icon: CheckCircle2, value: '9', label: 'Completed Projects' },
]

function FundedProjectsStats() {
  return <StatsBar stats={fundedStats} />
}

export default FundedProjectsStats