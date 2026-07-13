import Navbar from '../components/Navbar'
import PageHero from '../components/PageHero'
import ConsultancyStats from '../components/research/ConsultancyStats'
import MouList from '../components/research/MouList'
import ConsultancyServices from '../components/research/ConsultancyServices'
import ResearchCTA from '../components/research/ResearchCTA'
import Footer from '../components/Footer'

function ConsultancyPage() {
  return (
    <div>
      <Navbar />
      <PageHero
        badge="Research"
        title="Consultancy & MoU"
        subtitle="Industry collaborations, academic partnerships, and consultancy services offered by our department."
      />
      <ConsultancyStats />
      <MouList />
      <ConsultancyServices />
      <ResearchCTA />
      <Footer />
    </div>
  )
}

export default ConsultancyPage