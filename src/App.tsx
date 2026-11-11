import Header from './components/layout/Header'
import HeroSection from './components/hero/HeroSection'
import SkillsSection from './components/skills/SkillsSection'
import EducationSection from './components/EducationSection'
import ExperienceTerminal from './components/ExperienceTerminal'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="relative">
      <Header />
      <main>
        <HeroSection />
        <SkillsSection />
        <EducationSection />
        <ExperienceTerminal />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
