import ClubsSection from "@/components/homeClubs/section";
import LandingPage from "@/components/landingPage";
import { prisma } from "@/lib/prisma";


export default async function Home() {
  const events = await prisma.event.findMany();

  return (
    <main>
      <LandingPage />
      <ClubsSection events={events} />
    </main>
  );
}
