import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import EngineeringStats from "@/components/home/EngineeringStats";
import UpcomingProjects from "@/components/home/UpcomingProjects";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f7f7f5] text-[#111111]">
      <Navbar />

      <main>
        <Hero />
        <FeaturedProjects />
        <EngineeringStats />
        <UpcomingProjects />
      </main>

      <Footer />
    </div>
  );
}