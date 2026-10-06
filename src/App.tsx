import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Mission from "./components/Mission";
import Programs from "./components/Programs";
import Enrichment from "./components/Enrichment";
import Travel from "./components/Travel";
import Sessions from "./components/Sessions";
import Registration from "./components/Registration";
import Scholarships from "./components/Scholarships";
import Leadership from "./components/Leadership";
import WhyUs from "./components/WhyUs";
import Testimonials from "./components/Testimonials";
import Donate from "./components/Donate";
import Gallery from "./components/Gallery";
import FAQ from "./components/FAQ";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Mission />
        <Programs />
        <Enrichment />
        <Travel />
        <Sessions />
        <Registration />
        <Scholarships />
        <Leadership />
        <WhyUs />
        <Testimonials />
        <Donate />
        <Gallery />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
