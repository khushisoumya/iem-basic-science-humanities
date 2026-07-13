import { useState } from 'react'
import Navbar from '../components/Navbar'
import PageHero from '../components/PageHero'
import FundedProjectsStats from '../components/research/FundedProjectsStats'
import ProjectFilters from '../components/research/ProjectFilters'
import ProjectGrid from '../components/research/ProjectGrid'
import ResearchCTA from '../components/research/ResearchCTA'
import Footer from '../components/Footer'

function FundedProjectsPage() {
  const [activeFilter, setActiveFilter] = useState('All')

  return (
    <div>
      <Navbar />
      <PageHero
        badge="Research"
        title="Funded Projects"
        subtitle="DST SERB and government funded research initiatives led by our faculty."
      />
      <FundedProjectsStats />
      <ProjectFilters onFilterChange={setActiveFilter} />
      <ProjectGrid activeFilter={activeFilter} />
      <ResearchCTA />
      <Footer />
    </div>
  )
}

export default FundedProjectsPage