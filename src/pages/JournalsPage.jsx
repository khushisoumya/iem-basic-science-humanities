import Navbar from '../components/Navbar'
import PageHero from '../components/PageHero'
import JournalsStats from '../components/more/JournalsStats'
import JournalsGrid from '../components/more/JournalsGrid'
import Footer from '../components/Footer'

function JournalsPage() {
  return (
    <div>
      <Navbar />
      <PageHero badge="More" title="Journals & Conferences" subtitle="Academic journals, conference proceedings, and scholarly events associated with the department." />
      <JournalsStats />
      <JournalsGrid />
      <Footer />
    </div>
  )
}
export default JournalsPage