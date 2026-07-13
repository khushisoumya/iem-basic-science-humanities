import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import AboutPage from './pages/AboutPage'
import FacultyPage from './pages/FacultyPage'
import SyllabusPage from './pages/SyllabusPage'
import ProgramOutcomesPage from './pages/ProgramOutcomesPage'
import BosMeetingsPage from './pages/BosMeetingsPage'
import PublicationsPage from './pages/PublicationsPage'
import FundedProjectsPage from './pages/FundedProjectsPage'
import PhdStudentsPage from './pages/PhdStudentsPage'
import ConsultancyPage from './pages/ConsultancyPage'
import EventsPage from './pages/EventsPage'
import NoticesPage from './pages/NoticesPage'
import JournalsPage from './pages/JournalsPage'
import ClubsPage from './pages/ClubsPage'
import AwardsPage from './pages/AwardsPage'
import GalleryPage from './pages/GalleryPage'
import ContactPage from './pages/ContactPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/faculty" element={<FacultyPage />} />

        <Route path="/academics" element={<Navigate to="/academics/syllabus" replace />} />
        <Route path="/academics/syllabus" element={<SyllabusPage />} />
        <Route path="/academics/program-outcomes" element={<ProgramOutcomesPage />} />
        <Route path="/academics/bos-meetings" element={<BosMeetingsPage />} />

        <Route path="/research" element={<Navigate to="/research/publications" replace />} />
        <Route path="/research/publications" element={<PublicationsPage />} />
        <Route path="/research/funded-projects" element={<FundedProjectsPage />} />
        <Route path="/research/phd-students" element={<PhdStudentsPage />} />
        <Route path="/research/consultancy" element={<ConsultancyPage />} />

        <Route path="/more" element={<Navigate to="/more/events" replace />} />
        <Route path="/more/events" element={<EventsPage />} />
        <Route path="/more/notices" element={<NoticesPage />} />
        <Route path="/more/journals" element={<JournalsPage />} />
        <Route path="/more/clubs" element={<ClubsPage />} />
        <Route path="/more/awards" element={<AwardsPage />} />
        <Route path="/more/gallery" element={<GalleryPage />} />

        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App



