import Header from './components/layout/Header'
import HeroSection from './components/hero/HeroSection'
import SkillsSection from './components/skills/SkillsSection'
import EducationSection from './components/EducationSection'

function App() {
  return (
    <div className="relative">
      <Header />
      <main>
        <HeroSection />
        <SkillsSection />
        <EducationSection />
      </main>
    </div>
  )
}

export default App
