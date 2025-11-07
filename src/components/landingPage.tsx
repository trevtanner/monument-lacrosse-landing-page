"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function LandingPage() {
  return (
    <section
      id="home"
      className="relative bg-linear-to-r from-primary to-accent text-white py-20 md:py-32 overflow-hidden h-[87vh] w-full"
    >
      <div className="absolute inset-0">
        <Image
          src="/images/co-mountains.jpg"
          alt="Custom Apparel Hero"
          className="w-full h-full object-cover opacity-30"
          fill
        />
      </div>
      <div className="container mx-auto relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 animate-fade-in-up text-white">
          Monument Lacrosse <br className="hidden sm:inline" />
          <span className="text-2xl md:text-3xl">
            Boys and girls youth lacrosse clubs for northern El Paso County
          </span>
        </h1>

        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Button
            className="rounded-full transition duration-300 transform hover:scale-105 bg-transparent border border-black text-black hover:bg-black hover:text-white"
            size="lg"
          >
            <Link
              href={"https://www.rangerlacrosse.org/"}
              aria-label="Ranger Lacrosse Link"
            >
              Boy's Lacrosse
            </Link>
          </Button>
          <Button
            className="rounded-full transition duration-300 transform hover:scale-105 bg-transparent border border-black text-black hover:bg-black hover:text-white"
            size="lg"
          >
            <Link
              href={"https://www.grizzliesgirlslacrosse.org/"}
              aria-label="Grizzlies Girls Lacrosse Link"
            >
              Girl's Lacrosse
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
