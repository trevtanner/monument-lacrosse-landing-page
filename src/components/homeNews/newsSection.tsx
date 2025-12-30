"use client";

import { posts } from "@/data/news";
import { NewsCard } from "../homeNews/newsCard";

export default function NewsSection() {
  return (
    <section>
      <div className="flex items-center justify-between mb-8">
        <h3 className="font-display font-black text-3xl text-navy-900">
          The Field Report
        </h3>
        {/* <a
                href="#"
                className="text-sm font-bold text-gold-600 hover:underline"
              >
                View All Teams &rarr;
              </a> */}
      </div>

      <div className="">
        {posts.map((post) => (
          <NewsCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
}
