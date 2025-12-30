"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { days, events } from "@/data/calendar";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import { Button } from "../ui/button";
import { EventCard } from "./eventCard";

export default function MainCalendar() {
  // State to hold the currently selected date (initialized to current date)
  const [currentDate, setCurrentDate] = useState(new Date());

  const [eventDetails, setEventDetails] = useState({
    title: "",
    date: "",
    url: "",
    team: "",
    age: "",
  });

  const [isOpen, setIsOpen] = useState(false);

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  // Calculate the number of days in the month
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  // Calculate the number of days in the previous month
  const daysInPrevMonth = new Date(year, month, 0).getDate();

  // Calculate the starting day of the week (0 = Sunday, 1 = Monday, etc.)
  const startDayIndex = new Date(year, month, 1).getDay();

  const monthName = currentDate.toLocaleString("default", { month: "long" });

  const monthForward = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  const monthBack = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const today = new Date();

  const openCardModal = (event: {
    title: string;
    date: string;
    url: string;
    team: string;
    age: string;
  }) => {
    console.log(event);
    setEventDetails(event);
    setIsOpen(true);
  };

  return (
    <div className="h-min-screen">
      <h1 className="text-center text-xl font-semibold my-4">
        North Springs Lacrosse Event Calendar
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 ">
        <Button
          className="m-auto mb-2 sm:mb-0"
          onClick={() => setCurrentDate(new Date())}
        >
          Today
        </Button>
        <div className="flex items-center justify-center gap-x-4">
          <MdArrowBackIosNew
            className="w-6 h-6 hover:bg-gray-400 rounded-full p-1"
            onClick={monthBack}
          />
          <h1 className="text-center flex">
            {monthName} {year}
          </h1>
          <MdArrowForwardIos
            className="w-6 h-6 hover:bg-gray-400 rounded-full p-1"
            onClick={monthForward}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-7 pt-4 pb-12 px-2 gap-0">
        {days.map((day) => (
          <div className="text-center hidden md:block" key={day.id}>
            {day.abbrv}
          </div>
        ))}

        {/* Empty slots for days before the 1st of the month */}
        {Array.from({ length: startDayIndex }).map((_, i) => {
          const dayNum = daysInPrevMonth - startDayIndex + i + 1;
          return (
            <div key={`prev-${dayNum}`} className="opacity-50 hidden md:block">
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-center">{dayNum}</CardTitle>
                </CardHeader>
                <CardContent />
              </Card>
            </div>
          );
        })}

        {/* Render the days of the month */}
        {Array.from({ length: daysInMonth }).map((_, i) => {
          const dayNum = i + 1;
          const date = new Date(year, month, dayNum);
          const dayName = date.toLocaleDateString("en-US", {
            weekday: "short",
            timeZone: "America/Denver",
          });
          const isToday =
            dayNum === today.getDate() &&
            month === today.getMonth() &&
            year === today.getFullYear();
          const dayEvents = events.filter((event) => {
            const eventDate = new Date(event.date);
            return (
              eventDate.getDate() === dayNum &&
              eventDate.getMonth() === month &&
              eventDate.getFullYear() === year
            );
          });
          return (
            <div key={dayNum}>
              <Card className="min-h-32 lg:min-h-[20dvh] h-full">
                <CardHeader>
                  <CardTitle className="text-center text-sm flex justify-center">
                    <span
                      className={
                        isToday
                          ? "flex h-7 min-w-7 items-center justify-center rounded-full bg-black px-1 text-white"
                          : ""
                      }
                    >
                      <span className="md:hidden">
                        {dayName} {monthName.slice(0, 3)} {dayNum}
                      </span>
                      <span className="hidden md:inline">
                        {dayNum === 1
                          ? `${monthName.slice(0, 3)} ${dayNum}`
                          : dayNum}
                      </span>
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {dayEvents.map((event, index) => (
                    <div key={index} className="text-xs font-medium pb-2">
                      <p
                        className="text-xs rounded-full bg-gray-300 px-2 py-1 hover:underline hover:cursor-pointer"
                        onClick={() => openCardModal(event)}
                      >
                        &#x25cf;{" "}
                        <span className="md:hidden">{event.title}</span>
                        <span className="hidden md:inline lg:hidden text-[10px]">
                          {event.title.slice(0, 12)}
                          {event.title.length > 12 ? "..." : ""}
                        </span>
                        <span className="hidden lg:inline xl:hidden text-[10px]">
                          {event.title.slice(0, 24)}
                          {event.title.length > 24 ? "..." : ""}
                        </span>
                        <span className="hidden xl:inline">{event.title}</span>
                      </p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          );
        })}
      </div>

      <EventCard
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        eventDetails={eventDetails}
      />
    </div>
  );
}
