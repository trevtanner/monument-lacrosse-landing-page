"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function LandingPage() {
  return (
    <section
      id="home"
      className="relative bg-linear-to-b from-primary to-primary text-white py-12 md:py-24 overflow-hidden min-h-[70vh] w-full"
    >
      <div className="absolute inset-0">
        <Image
          src="/images/ranger-grizz-bg3.png"
          alt="Custom Apparel Hero"
          className="w-full h-full object-cover opacity-80"
          fill
          preload={true}
          loading="eager"
        />
      </div>
      <div className="container mx-auto relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <h1 className="hero-header-text">
          North Springs Lacrosse <br className="hidden sm:inline" />
        </h1>
        <h2 className="hero-sub-text mb-8 max-w-3xl mx-auto">
          Boys and girls youth lacrosse clubs for Northern Colorado Springs
        </h2>

        <div className="font-sans flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 gap-x-12 gap-y-8 mt-8 grid grid-cols-2">
          <Link
            href={"https://www.rangerlacrosse.org/"}
            aria-label="Ranger Lacrosse Link"
            className="hover:cursor-default"
          >
            <Button
              className="rounded-full transition duration-300 transform hover:scale-110 bg-orange-700 border border-white text-white hover:bg-gray-500 hover:text-white w-2/3 sm:w-auto m-auto sm:m-0"
              size="lg"
            >
              Ranger Boys Lacrosse
            </Button>
          </Link>
          <Link
            href={"https://www.grizzliesgirlslacrosse.org/"}
            aria-label="Grizzlies Girls Lacrosse Link"
          >
            <Button
              className="rounded-full transition duration-300 transform hover:scale-110 bg-slate-900 border border-white text-white hover:bg-gray-500 hover:text-white w-2/3 sm:w-auto m-auto sm:m-0"
              size="lg"
            >
              Grizzlies Girls Lacrosse
            </Button>
          </Link>
        </div>
        <div className="py-4">
          <Link
            href={
              "https://boltslax.leagueapps.com/events/4823577-2026-summer-tryout"
            }
            aria-label="Bolts Lacrosse Summer Tryouts Link"
          >
            <Button
              className="rounded-full transition duration-300 transform hover:scale-110 bg-bolts-main border border-white text-white hover:bg-gray-500 hover:text-white w-2/3 sm:w-auto m-auto sm:m-0"
              size="lg"
            >
              Bolts Lacrosse Summer Team Tryouts
            </Button>
          </Link>
        </div>
        <div>
          <Link
            href={
              "https://account.usalacrosse.com/event/view/44a42f62-441e-476a-9c8d-7a079fb79cef?_ga=2.105086983.542787578.1763389973-724434079.1755528701&_gac=1.81091941.1762266540.Cj0KCQiA5abIBhCaARIsAM3-zFW3FvSskWrDNYjKa_qWJAA9SeuUKK_bJi3RNykf9-z4FmwEkv8JZdMaAu7uEALw_wcB"
            }
            aria-label="U15 U.S. National Team Tryouts Link"
          >
            <Button
              className="rounded-full transition duration-300 transform hover:scale-110 bg-red-700 border border-white text-white hover:bg-gray-500 hover:text-white w-2/3 sm:w-auto m-auto sm:m-0"
              size="lg"
            >
              U15 U.S. National Team Tryouts
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
