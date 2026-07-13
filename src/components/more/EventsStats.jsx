import StatsBar from '../StatsBar'
import { CalendarDays, Users, Award, Mic2 } from 'lucide-react'

const eventsStats = [
  { icon: CalendarDays, value: '32', label: 'Events per Year' },
  { icon: Users, value: '1200+', label: 'Participants' },
  { icon: Mic2, value: '18', label: 'Guest Speakers' },
  { icon: Award, value: '9', label: 'Award Ceremonies' },
]

function EventsStats() {
  return <StatsBar stats={eventsStats} />
}

export default EventsStats