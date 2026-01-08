"use client";

import { ClubCard } from "./clubCard";
import { teams } from "@/data/clubs";
import { posts } from "@/data/news";
import UpcomingDates from "./upcomingDates";
import MailingList from "../forms/mailingList";
import { NewsCard } from "../homeNews/newsCard";
import NewsSection from "../homeNews/newsSection";

interface Event {
  title: string;
  date: Date;
  url: string;
  team: string;
  age: string;
}

interface Props {
  events: Event[];
}

export default function ClubsSection({ events }: Props) {
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

          {/* <NewsSection /> */}
        </div>
        <aside className="w-full lg:w-4/12 space-y-8">
          <div className="sticky top-24 space-y-8">
            <UpcomingDates events={events} />
            {/* <MailingList /> */}
          </div>
        </aside>
      </div>
    </section>
  );
}
