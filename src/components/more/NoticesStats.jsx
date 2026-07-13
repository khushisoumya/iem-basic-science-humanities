import StatsBar from '../StatsBar'
import { Bell, FileText, Calendar, AlertCircle } from 'lucide-react'

const noticesStats = [
  { icon: Bell, value: '45', label: 'Total Notices' },
  { icon: AlertCircle, value: '8', label: 'Active Notices' },
  { icon: FileText, value: '6', label: 'Categories' },
  { icon: Calendar, value: '12', label: 'This Month' },
]

function NoticesStats() {
  return <StatsBar stats={noticesStats} />
}
export default NoticesStats