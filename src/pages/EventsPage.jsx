import { useState } from 'react'
import Navbar from '../components/Navbar'
import PageHero from '../components/PageHero'
import EventsStats from '../components/more/EventsStats'
import EventFilters from '../components/more/EventFilters'
import EventGrid from '../components/more/EventGrid'
import EventsCTA from '../components/more/EventsCTA'
import Footer from '../components/Footer'

function EventsPage() {
  const [activeFilter, setActiveFilter] = useState('All')

  return (
    <div>
      <Navbar />
      <PageHero
        badge="More"
        title="Events"
        subtitle="Workshops, seminars, celebrations, and departmental activities throughout the year."
      />
      <EventsStats />
      <EventFilters onFilterChange={setActiveFilter} />
      <EventGrid activeFilter={activeFilter} />
      <EventsCTA />
      <Footer />
    </div>
  )
}

export default EventsPage