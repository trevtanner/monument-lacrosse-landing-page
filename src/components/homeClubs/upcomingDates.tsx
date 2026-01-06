"use client";

import { DatesCard } from "./datesCard";
import { Event } from "@/generated/prisma/client";

interface Props {
  events: Event[];
}

export default function UpcomingDates({ events }: Props) {
  return (
    <div className="">
      <div className="bg-white rounded-xl shadow-lg border border-slate-100 overflow-hidden">
        <div className="bg-navy-900 p-4 flex items-center justify-between">
          <h4 className="text-white font-bold font-display tracking-wide">
            UPCOMING DATES
          </h4>
          <span className="text-gold-500 text-xl">📅</span>
        </div>
        <div className="px-2">
          {[...events]
            .filter((event) => new Date(event.date).getTime() >= new Date().setHours(0, 0, 0, 0))
            .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
            .map((event: Event, index) => (
              <DatesCard key={index} event={event} />
            ))}
        </div>
        <div className="bg-slate-50 p-3 text-center border-t border-slate-100">
          <a
            href="/calendar"
            className="text-xs font-bold text-navy-900 hover:text-gold-600 uppercase tracking-widest"
          >
            View Full Calendar
          </a>
        </div>
      </div>
    </div>
  );
}
