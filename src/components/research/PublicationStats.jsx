import StatsBar from '../StatsBar'
import { FileText, Quote, TrendingUp, BookOpen } from 'lucide-react'

export const publicationStats = [
  { icon: FileText, value: '120+', label: 'Total Publications' },
  { icon: Quote, value: '850+', label: 'Citations' },
  { icon: TrendingUp, value: '15', label: 'H-Index' },
  { icon: BookOpen, value: '30+', label: 'Journals & Conferences' },
]

function PublicationStats() {
  return <StatsBar stats={publicationStats} />
}

export default PublicationStats