"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Input } from "./ui/input";

export default function LandingPage() {
  return (
    <section
      id="home"
      className="relative bg-primary text-white py-12 md:py-24 overflow-hidden w-full min-h-[50vh] md:min-h-[60vh]"
    >
      {/* <div className="absolute inset-0">
        <Image
          src="/images/ranger-grizz-bg3.png"
          alt="Custom Apparel Hero"
          className="w-full h-full object-cover opacity-80"
          fill
          preload={true}
          loading="eager"
        />
      </div> */}
      <div className="container mx-auto relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <h1 className="font-display font-black text-3xl md:text-5xl text-secondary mb-6">
          NORTH SPRINGS LACROSSE <br className="hidden sm:inline" />
        </h1>
        <h2 className="text-secondary text-lg mb-8 max-w-2xl mx-auto">
          Central directory for boys and girls lacrosse opportunities in
          Northern Colorado Springs
        </h2>

        <div className="font-sans flex-col sm:flex-row justify-center sm:space-x-4 gap-x-12 gap-y-4 mt-8 grid grid-cols-1 sm:grid-cols-2">
          <Button
            className="rounded-full transition duration-300 transform hover:scale-105 bg-orange-700 border border-white text-white hover:bg-gray-500 hover:text-white m-auto"
            onClick={() =>
              window.open("https://www.rangerlacrosse.org/", "_blank")
            }
            aria-label="Ranger Lacrosse Link"
          >
            Ranger Boys Lacrosse
          </Button>

          <Button
            className="rounded-full transition duration-300 transform hover:scale-105 bg-slate-900 border border-white text-white hover:bg-gray-500 hover:text-white m-auto"
            onClick={() =>
              window.open("https://www.grizzliesgirlslacrosse.org/", "_blank")
            }
          >
            Grizzlies Girls Lacrosse
          </Button>
        </div>
        <div className="font-sans flex-col sm:flex-row justify-center sm:space-x-4 gap-x-12 gap-y-4 mt-8 grid grid-cols-1 sm:grid-cols-1">
          <Button
            className="rounded-full transition duration-300 transform hover:scale-105 bg-bolts-main border border-white text-white hover:bg-gray-500 hover:text-white m-auto"
            onClick={() =>
              window.open(
                "https://boltslax.leagueapps.com/events/4823577-2026-summer-tryout",
                "_blank"
              )
            }
          >
            Bolts Lacrosse Summer Team Tryouts
          </Button>

          <Button
            className="rounded-full transition duration-300 transform hover:scale-105 bg-orange-600 border border-white text-white hover:bg-gray-500 hover:text-white m-auto"
            onClick={() =>
              window.open(
                "https://www.cosmolax.com/chaosassessmentday",
                "_blank"
              )
            }
          >
            Cosmo Chaos Lacrosse Supplemental Summer Team Tryouts
          </Button>
          <Button
            className="rounded-full transition duration-300 transform hover:scale-105 bg-red-700 border border-white text-white hover:bg-gray-500 hover:text-white m-auto"
            onClick={() =>
              window.open(
                "https://account.usalacrosse.com/event/view/44a42f62-441e-476a-9c8d-7a079fb79cef?_ga=2.105086983.542787578.1763389973-724434079.1755528701&_gac=1.81091941.1762266540.Cj0KCQiA5abIBhCaARIsAM3-zFW3FvSskWrDNYjKa_qWJAA9SeuUKK_bJi3RNykf9-z4FmwEkv8JZdMaAu7uEALw_wcB",
                "_blank"
              )
            }
          >
            U15 Boys U.S. National Team Regional ID Clinic
          </Button>
          <Button
            className="rounded-full transition duration-300 transform hover:scale-105 bg-red-700 border border-white text-white hover:bg-gray-500 hover:text-white m-auto"
            onClick={() => window.open("https://www.csboxla.com/", "_blank")}
          >
            Colorado Springs Box Lacrosse Leagues
          </Button>
        </div>
      </div>
    </section>
  );
}
