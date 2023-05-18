import About from "@/components/Homepage/About/About";
import Clients from "@/components/Homepage/Clients/Clients";
import Contact from "@/components/Homepage/Contact/Contact";
import Faq from "@/components/Homepage/FAQ/faqs";
import Hero from "@/components/Homepage/Hero/Hero";
import ISO from "@/components/Homepage/ISO/ISO";
import Immersive from "@/components/Homepage/Immersive/Immersive";
import Services from "@/components/Homepage/Services/Services";
import Testimonials from "@/components/Homepage/Testimonials/Testimonials";
import WhyChoose from "@/components/Homepage/WhyChoose/WhyChoose";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <WhyChoose />
      <Services />
      <ISO />
      <Immersive />
      <Clients />
      <Testimonials />
      <Faq />
      <Contact />
    </main>
  );
}
