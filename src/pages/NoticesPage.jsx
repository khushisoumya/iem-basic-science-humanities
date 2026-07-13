import Navbar from '../components/Navbar'
import PageHero from '../components/PageHero'
import NoticesStats from '../components/more/NoticesStats'
import NoticeList from '../components/more/NoticeList'
import Footer from '../components/Footer'

function NoticesPage() {
  return (
    <div>
      <Navbar />
      <PageHero badge="More" title="Notices" subtitle="Latest announcements, deadlines, and important updates from the department." />
      <NoticesStats />
      <NoticeList />
      <div className="pb-16" />
      <Footer />
    </div>
  )
}
export default NoticesPage