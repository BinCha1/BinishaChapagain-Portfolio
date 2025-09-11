// import HeroSection1 from "./assets/components/HeroSection1";
// import PortfolioClone from "./assets/components/PortfolioClone";

import ContactSection from "./assets/components/ContactSection";
import Headers from "./assets/components/Header";
import HeroSection from "./assets/components/HeroSection";
import ProjectSection from "./assets/components/ProjectSection";
import ServicesSection from "./assets/components/ServiceSection";
import ServicesStrip from "./assets/components/ServicesStrip";
import SkillSection from "./assets/components/SkillSection";

function App() {
  return (
    <div>
      {/* <HeroSection1 /> */}
      {/* <PortfolioClone /> */}
      <Headers />
      <HeroSection />
      <ServicesStrip />
      <ServicesSection />
      <SkillSection />
      <ProjectSection />
      <ContactSection />
      {/* <Footer /> */}

      <div className="text-center p-4 bg-orange-400 text-white">
        <p>© 2025 Binisha Chapagain. All rights reserved.</p>
      </div>
    </div>
  );
}

export default App;
