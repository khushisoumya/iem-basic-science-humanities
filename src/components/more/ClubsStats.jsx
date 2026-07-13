import StatsBar from '../StatsBar'
import { UsersRound, Sparkles, Calendar, Trophy } from 'lucide-react'

const clubStats = [
  { icon: UsersRound, value: '6', label: 'Active Clubs' },
  { icon: Sparkles, value: '300+', label: 'Student Members' },
  { icon: Calendar, value: '24', label: 'Events Organized' },
  { icon: Trophy, value: '10', label: 'Awards Won' },
]

function ClubsStats() {
  return <StatsBar stats={clubStats} />
}
export default ClubsStats