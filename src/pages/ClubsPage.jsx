import Navbar from '../components/Navbar'
import PageHero from '../components/PageHero'
import ClubsStats from '../components/more/ClubsStats'
import ClubsGrid from '../components/more/ClubsGrid'
import Footer from '../components/Footer'

function ClubsPage() {
  return (
    <div>
      <Navbar />
      <PageHero badge="More" title="Clubs & Chapters" subtitle="Student-led clubs and professional chapters fostering holistic development." />
      <ClubsStats />
      <ClubsGrid />
      <Footer />
    </div>
  )
}
export default ClubsPage