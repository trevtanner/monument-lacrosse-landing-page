"use client";

import { dates } from "@/data/clubs";
import { DatesCard } from "./datesCard";

export default function UpcomingDates() {
  return (
    <aside className="w-full lg:w-4/12">
      <div className="sticky top-24 space-y-8">
        <div className="bg-white rounded-xl shadow-lg border border-slate-100 overflow-hidden">
          <div className="bg-navy-900 p-4 flex items-center justify-between">
            <h4 className="text-white font-bold font-display tracking-wide">
              UPCOMING DATES
            </h4>
            <span className="text-gold-500 text-xl">📅</span>
          </div>
          <div className="p-2">
            {dates.map((date, index) => (
              <DatesCard key={index} details={date} />
            ))}
          </div>
          <div className="bg-slate-50 p-3 text-center border-t border-slate-100">
            <a
              href="#"
              className="text-xs font-bold text-navy-900 hover:text-gold-600 uppercase tracking-widest"
            >
              View Full Calendar
            </a>
          </div>
        </div>
      </div>
    </aside>
  );
}
