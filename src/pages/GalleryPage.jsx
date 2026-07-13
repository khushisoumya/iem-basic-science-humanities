import Navbar from '../components/Navbar'
import PageHero from '../components/PageHero'
import GalleryStats from '../components/more/GalleryStats'
import GalleryGrid from '../components/more/GalleryGrid'
import Footer from '../components/Footer'

function GalleryPage() {
  return (
    <div>
      <Navbar />
      <PageHero badge="More" title="Photo Gallery" subtitle="Campus life, events, and memorable moments from the department." />
      <GalleryStats />
      <GalleryGrid />
      <Footer />
    </div>
  )
}
export default GalleryPage