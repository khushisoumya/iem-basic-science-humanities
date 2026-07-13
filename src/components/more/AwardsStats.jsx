import StatsBar from '../StatsBar'
import { Trophy, Star, Users, Award as AwardIcon } from 'lucide-react'

const awardStats = [
  { icon: Trophy, value: '28', label: 'Total Awards' },
  { icon: Star, value: '12', label: 'Faculty Awards' },
  { icon: Users, value: '16', label: 'Student Awards' },
  { icon: AwardIcon, value: '5', label: 'National Recognitions' },
]

function AwardsStats() {
  return <StatsBar stats={awardStats} />
}
export default AwardsStats