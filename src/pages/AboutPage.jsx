import Navbar from '../components/Navbar'
import PageHero from '../components/PageHero'
import AboutIntro from '../components/about/AboutIntro'
import VisionMission from '../components/about/VisionMission'
import HODMessage from '../components/about/HODMessage'
import FacilitiesCTA from '../components/about/FacilitiesCTA'
import Footer from '../components/Footer'

function AboutPage() {
  return (
    <div>
      <Navbar />
      <PageHero
        badge="About Us"
        title="Department of Basic Science & Humanities"
        subtitle="Institute of Engineering & Management, Kolkata"
      />
      <AboutIntro />
      <VisionMission />
      <HODMessage />
      <FacilitiesCTA />
      <Footer />
    </div>
  )
}

export default AboutPage