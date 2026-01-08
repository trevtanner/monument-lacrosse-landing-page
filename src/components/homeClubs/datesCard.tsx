"use client";

import Link from "next/link";
import { monthNames } from "@/data/calendar";

interface Event {
  title: string;
  date: Date;
  url: string;
  team: string;
  age: string;
}

interface DatesCardProps {
  event: Event;
}

function splitDate(dateString: Date) {
  const eventDate = new Date(dateString);
  const day = eventDate.getDate();
  const month = eventDate.getMonth();

  return [monthNames[month].slice(0, 3), day];
}

export const DatesCard: React.FC<DatesCardProps> = ({ event }) => {
  const [month, day] = splitDate(event.date);

  return (
    <div className="flex gap-4 p-4 border-b border-slate-100 hover:bg-slate-50 transition">
      <div className="flex flex-col items-center justify-center w-12 h-12 bg-blue-50 text-blue-600 rounded border border-blue-100">
        <span className="text-[10px] font-bold uppercase">{month}</span>
        <span className="text-lg font-black leading-none">{day}</span>
      </div>
      <div>
        <h5 className="font-bold text-navy-900 text-md">
          <Link href={event.url} target="_blank" className="hover:underline">
            {event.title}
          </Link>
        </h5>
        <p className="text-sm text-slate-500 font-semibold">{event.age}</p>
        <p className="text-xs text-slate-500 font-semibold">{event.team}</p>
      </div>
    </div>
  );
};
