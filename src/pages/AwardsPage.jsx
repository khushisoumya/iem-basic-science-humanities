import Navbar from '../components/Navbar'
import PageHero from '../components/PageHero'
import AwardsStats from '../components/more/AwardsStats'
import AwardsList from '../components/more/AwardsList'
import Footer from '../components/Footer'

function AwardsPage() {
  return (
    <div>
      <Navbar />
      <PageHero badge="More" title="Awards" subtitle="Faculty and student recognitions celebrating excellence and achievement." />
      <AwardsStats />
      <AwardsList />
      <Footer />
    </div>
  )
}
export default AwardsPage