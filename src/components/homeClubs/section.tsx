"use client";

import { ClubCard } from "./clubCard";
import { teams } from "@/data/clubs";
import UpcomingDates from "./upcomingDates";

export default function ClubsSection() {
  return (
    <section className="container mx-auto px-12 py-16 bg-slate-200">
      <div className="flex flex-col lg:flex-row gap-12">
        <div className="w-full lg:w-8/12 space-y-16">
          <section>
            <div className="flex items-center justify-between mb-8">
              <h3 className="font-display font-black text-3xl text-navy-900">
                Local Clubs
              </h3>
              {/* <a
                href="#"
                className="text-sm font-bold text-gold-600 hover:underline"
              >
                View All Teams &rarr;
              </a> */}
            </div>

            <div className="grid md:grid-cols-2">
              {teams.map((team, index) => (
                <ClubCard key={index} details={team} />
              ))}
            </div>
          </section>
        </div>

        <UpcomingDates />
      </div>
    </section>
  );
}
