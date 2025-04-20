import Header from "@/components/Header";
import SearchSection from "@/components/SearchSection";
import HeroSection from "@/components/HeroSection";
import ExploreSeasides from "@/components/ExploreSeasides";
import PortoActivities from "@/components/PortoActivities";
import NewDelhiTours from "@/components/NewDelhiTours";
import MoreToExplore from "@/components/MoreToExplore";
import DreamNextTrip from "@/components/DreamNextTrip";
import TopDestinations from "@/components/TopDestinations";
import SponsoredSection from "@/components/SponsoredSection";
import TravelersChoice from "@/components/TravelersChoice";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col max-w-6xl mx-auto min-h-screen">
      <Header />
      <main className="flex-1">
        <SearchSection />
        <HeroSection />
        <ExploreSeasides />
        <PortoActivities />
        <NewDelhiTours />
        <MoreToExplore />
        <DreamNextTrip />
        <TopDestinations />
        <SponsoredSection />
        <TravelersChoice />
      </main>
      <Footer />
    </div>
  );
}
