import ClubsSection from "@/components/homeClubs/section";
import LandingPage from "@/components/landingPage";
import MissionStatement from "@/components/missionStatement";
import { turso } from "@/lib/turso";

export default async function Home() {
  const resultSet = await turso.execute("SELECT * FROM Events");

  const rows = JSON.parse(JSON.stringify(resultSet.rows));

  return (
    <main>
      <LandingPage />
      <MissionStatement />
      <ClubsSection events={rows} />
    </main>
  );
}
