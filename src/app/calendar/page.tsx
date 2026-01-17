import MainCalendar from "@/components/calendar/mainCalendar";
import { turso } from "@/lib/turso";

export default async function Calendar() {
  const resultSet = await turso.execute("SELECT * FROM Events");

  const rows = JSON.parse(JSON.stringify(resultSet.rows));

  return (
    <main>
      <MainCalendar events={rows} />
    </main>
  );
}
