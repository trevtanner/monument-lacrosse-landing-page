import MainCalendar from "@/components/calendar/mainCalendar";
import { prisma } from "@/lib/prisma";
import { turso } from "@/lib/turso";

export default async function Calendar() {
  const events = await prisma.event.findMany();

  const resultSet = await turso.execute("SELECT * FROM Events");

  const rows = JSON.parse(JSON.stringify(resultSet.rows));

  console.log("rows", rows);

  return (
    <main>
      <MainCalendar events={rows} />
    </main>
  );
}
