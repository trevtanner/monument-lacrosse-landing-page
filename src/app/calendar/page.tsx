import MainCalendar from "@/components/calendar/mainCalendar";
import { prisma } from "@/lib/prisma";

export default async function Calendar() {
  const events = await prisma.event.findMany();
  return (
    <main>
      <MainCalendar events={events} />
    </main>
  );
}
