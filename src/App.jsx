import Testimonials from "./sections/Testimonials";
import Footer from "./sections/Footer";
import Contact from "./sections/Contact";
import TechStack from "./sections/TechStack";
import Experience from "./sections/Experience";
import Hero from "./sections/Hero";
import LogoShowcase from "./sections/LogoShowcase";
import FeatureCards from "./sections/FeatureCards";
import Navbar from "./components/NavBar";
import TechProject from "./sections/TechProject";
import DesProject from "./sections/DesProject";
import DesStack from "./sections/DesStack";
import CollaborationWidget from "./sections/CollaborationWidget";
import SectionAnimator from "./sections/SectionAnimator";

const App = () => (
  <>
    <Navbar />
    <Hero />
    <TechProject />
    <DesProject />
    <LogoShowcase />
    <FeatureCards />
    <Experience />
    <TechStack />
    <DesStack />
    <Testimonials />
    <Contact />
    <Footer />
    <SectionAnimator />
    <CollaborationWidget />
  </>
);

export default App;