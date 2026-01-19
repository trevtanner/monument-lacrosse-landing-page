"use client";

import Image from "next/image";
import { useState } from "react";
import { Button } from "../ui/button";

interface NewsCardProps {
  post: {
    title: string;
    image: string;
    category: string;
    date: string;
    text: string;
    url: string;
  };
}

function redirectToPage(url: string) {
  window.location.href = url;
}

function truncateString(str: string, num: number) {
  return str.slice(0, num) + "...";
}

export const NewsCard: React.FC<NewsCardProps> = ({ post }) => {
  const [showImage, setShowImage] = useState(false);

  return (
    <section id="home" className="container mx-auto px-4 py-4 bg-slate-200">
      {showImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 cursor-pointer"
          onClick={() => setShowImage(false)}
        >
          <div className="relative w-full h-full max-w-5xl max-h-[90vh]">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
      <div className="flex flex-col gap-8">
        <article className="flex flex-col md:flex-row gap-6 group">
          <div
            className="w-full md:w-56 h-36 bg-slate-300 rounded-lg overflow-hidden relative cursor-pointer"
            onClick={() => setShowImage(true)}
          >
            <Image
              src={post.image}
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              alt={""}
              width={400}
              height={400}
            />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-3 text-xs font-bold mb-2">
              <span className="text-gold-600 uppercase">{post.category}</span>
              <span className="text-slate-400">•</span>
              <span className="text-slate-400">{post.date}</span>
            </div>
            <h4 className="font-display font-bold text-2xl text-navy-900 mb-2 group-hover:text-blue-700 transition">
              {post.title}
            </h4>
            {/* <p className="text-slate-600 leading-relaxed mb-3">
              {truncateString(post.text, 100)}
            </p> */}
            <span
              onClick={() => redirectToPage(post.url)}
              className="text-navy-900 font-bold text-sm underline decoration-gold-500 decoration-2 underline-offset-4 cursor-pointer"
            >
              See More
            </span>
          </div>
        </article>
      </div>
    </section>
  );
};
