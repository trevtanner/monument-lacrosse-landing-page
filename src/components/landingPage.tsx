"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function LandingPage() {
  return (
    <section
      id="home"
      className="relative bg-linear-to-b from-primary to-primary text-white py-12 md:py-24 overflow-hidden min-h-[86vh] w-full"
    >
      <div className="absolute inset-0">
        <Image
          src="/images/RGHeroImage2.png"
          alt="Custom Apparel Hero"
          className="w-full h-full object-cover opacity-50"
          fill
          preload={true}
          loading="eager"
        />
      </div>
      <div className="container mx-auto relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <h1 className="hero-header-text">
          Monument Lacrosse <br className="hidden sm:inline" />
        </h1>
        <h2 className="hero-sub-text">
          Boys and girls youth lacrosse clubs for Northern El Paso County
        </h2>

        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 gap-x-12 gap-y-8 mt-8">
          <Button
            className="rounded-full transition duration-300 transform hover:scale-110 bg-orange-700 border border-white text-white hover:bg-gray-500 hover:text-white w-2/3 sm:w-auto m-auto sm:m-0"
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
            className="rounded-full transition duration-300 transform hover:scale-110 bg-slate-900 border border-white text-white hover:bg-gray-500 hover:text-white w-2/3 sm:w-auto m-auto sm:m-0"
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
