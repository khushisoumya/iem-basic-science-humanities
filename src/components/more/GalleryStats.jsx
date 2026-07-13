import StatsBar from '../StatsBar'
import { Image, Calendar, Camera, FolderOpen } from 'lucide-react'

const galleryStats = [
  { icon: Image, value: '250+', label: 'Photos' },
  { icon: FolderOpen, value: '18', label: 'Albums' },
  { icon: Calendar, value: '32', label: 'Events Covered' },
  { icon: Camera, value: '5', label: 'Years Archived' },
]

function GalleryStats() {
  return <StatsBar stats={galleryStats} />
}
export default GalleryStats