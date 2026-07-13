import StatsBar from '../StatsBar'
import { BookMarked, Calendar, Globe2, Users } from 'lucide-react'

const journalStats = [
  { icon: BookMarked, value: '10', label: 'Journals Tracked' },
  { icon: Calendar, value: '6', label: 'Conferences Attended' },
  { icon: Globe2, value: '4', label: 'International Events' },
  { icon: Users, value: '25+', label: 'Faculty Participation' },
]

function JournalsStats() {
  return <StatsBar stats={journalStats} />
}
export default JournalsStats