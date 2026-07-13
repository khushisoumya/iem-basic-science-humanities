import { useState } from 'react'
import Navbar from '../components/Navbar'
import PageHero from '../components/PageHero'
import PhdStats from '../components/research/PhdStats'
import PhdFilters from '../components/research/PhdFilters'
import PhdGrid from '../components/research/PhdGrid'
import ResearchCTA from '../components/research/ResearchCTA'
import Footer from '../components/Footer'

function PhdStudentsPage() {
  const [activeFilter, setActiveFilter] = useState('All')

  return (
    <div>
      <Navbar />
      <PageHero
        badge="Research"
        title="PhD Students"
        subtitle="Doctoral scholars and their research areas under the guidance of our faculty."
      />
      <PhdStats />
      <PhdFilters onFilterChange={setActiveFilter} />
      <PhdGrid activeFilter={activeFilter} />
      <ResearchCTA />
      <Footer />
    </div>
  )
}

export default PhdStudentsPage