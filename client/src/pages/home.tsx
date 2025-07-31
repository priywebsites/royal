import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import OurWork from "@/components/OurWork";
import Reviews from "@/components/Reviews";
import FindUs from "@/components/FindUs";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <OurWork />
      <Reviews />
      <FindUs />
      <Footer />
    </div>
  );
}
