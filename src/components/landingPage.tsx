"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Input } from "./ui/input";

export default function LandingPage() {
  return (
    <section
      id="home"
      className="relative bg-primary text-white py-12 md:py-24 overflow-hidden w-full min-h-[45vh] md:min-h-[50vh]"
    >
      <div className="absolute inset-0">
        <Image
          src="/images/ranger-grizz-bg3.png"
          alt="Custom Apparel Hero"
          className="w-full h-full object-cover opacity-10"
          fill
          preload={true}
          loading="eager"
        />
      </div>
      <div className="container mx-auto relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <h1 className="font-display font-black text-3xl md:text-5xl text-secondary mb-6">
          NORTH SPRINGS LACROSSE <br className="hidden sm:inline" />
        </h1>
        {/* <h2 className="text-secondary text-lg mb-8 max-w-2xl mx-auto">
          North Springs Youth Lacrosse aims to foster the growth and development
          of youth lacrosse in the North Springs and Monument communities by
          providing accessible opportunities for boys and girls to learn, play,
          and excel in the sport, while emphasizing teamwork, sportsmanship,
          skill-building, and fun in a supportive environment.
        </h2> */}

        <div className="font-sans flex-col sm:flex-row justify-center sm:space-x-4 gap-x-12 gap-y-4 mt-12 pb-8 grid grid-cols-1 md:grid-cols-3">
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
            className="rounded-full transition duration-300 transform hover:scale-105 bg-orange-600 border border-white text-white hover:bg-slate-900 hover:text-white m-auto text-xl"
            size="lg"
            onClick={() =>
              window.open(
                "https://www.rangerlacrosse.org/program/learn-to-play-clinic/11749",
                "_blank",
              )
            }
          >
            Free Learn to Play Clinic
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
        <div className="font-sans flex-col sm:flex-row justify-center sm:space-x-4 gap-x-12 gap-y-4 mt-12 grid grid-cols-1 sm:grid-cols-1">
          <Button
            className="rounded-full transition duration-300 transform hover:scale-105 bg-red-700 border border-white text-white hover:bg-gray-500 hover:text-white m-auto"
            onClick={() =>
              window.open(
                "https://account.usalacrosse.com/event/view/44a42f62-441e-476a-9c8d-7a079fb79cef?_ga=2.105086983.542787578.1763389973-724434079.1755528701&_gac=1.81091941.1762266540.Cj0KCQiA5abIBhCaARIsAM3-zFW3FvSskWrDNYjKa_qWJAA9SeuUKK_bJi3RNykf9-z4FmwEkv8JZdMaAu7uEALw_wcB",
                "_blank",
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
