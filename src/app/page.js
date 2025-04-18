// app/page.jsx
import Header from "@/src/components/Header";
import Hero from "@/src/components/Hero";
import Services from "@/src/components/Services";
import Features from "@/src/components/Features";
import CTA from "@/src/components/CTA";
import TechStack from "@/src/components/TechStack";
import Footer from "@/src/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Services />
      <TechStack/>
      <Features />
      <CTA />
      <Footer />
    </main>
  );
}