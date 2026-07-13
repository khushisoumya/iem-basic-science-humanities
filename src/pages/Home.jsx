import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import StatsBar from '../components/StatsBar'
import About from '../components/About'
import Facilities from '../components/Facilities'
import EventsNotices from '../components/EventsNotices'
import Faculty from '../components/Faculty'
import CTA from '../components/CTA'
import Footer from '../components/Footer'

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <StatsBar />
      <About />
      <Facilities />
      <EventsNotices />
      <Faculty />
      <CTA />
      <Footer />
    </div>
  )
}

export default Home