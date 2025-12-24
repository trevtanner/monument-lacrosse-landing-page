import ClubsSection from "@/components/homeClubs/section";
import LandingPage from "@/components/landingPage";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <LandingPage />
      <ClubsSection />
    </main>
  );
}
