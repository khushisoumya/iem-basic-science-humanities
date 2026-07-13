import { useState } from 'react'
import Navbar from '../components/Navbar'
import PageHero from '../components/PageHero'
import PublicationStats from '../components/research/PublicationStats'
import PublicationFilters from '../components/research/PublicationFilters'
import PublicationList from '../components/research/PublicationList'
import ResearchCTA from '../components/research/ResearchCTA'
import Footer from '../components/Footer'

function PublicationsPage() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <div>
      <Navbar />
      <PageHero
        badge="Research"
        title="Publications"
        subtitle="Journal papers, conference proceedings, and book chapters authored by our faculty and scholars."
      />
      <PublicationStats />
      <PublicationFilters
        onFilterChange={setActiveFilter}
        onSearchChange={setSearchTerm}
      />
      <PublicationList activeFilter={activeFilter} searchTerm={searchTerm} />
      <ResearchCTA />
      <Footer />
    </div>
  )
}

export default PublicationsPage