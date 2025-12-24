"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { days } from "@/data/calendar";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import { Button } from "../ui/button";

export default function MainCalendar() {
  // State to hold the currently selected date (initialized to Jan 2026)
  const [currentDate, setCurrentDate] = useState(new Date());

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

  return (
    <div className="h-min-screen">
      <h1 className="text-center">North Springs Lacrosse Event Calendar</h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 ">
        <Button className="m-auto" onClick={() => setCurrentDate(new Date())}>
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

      <div className="grid grid-cols-7 py-12 px-8">
        {days.map((day) => (
          <div className="text-center" key={day.id}>
            {day.abbrv}
          </div>
        ))}

        {/* Empty slots for days before the 1st of the month */}
        {Array.from({ length: startDayIndex }).map((_, i) => {
          const dayNum = daysInPrevMonth - startDayIndex + i + 1;
          return (
            <div key={`prev-${dayNum}`} className="opacity-50">
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
          return (
            <div key={dayNum}>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-center">
                    {dayNum === 1
                      ? `${monthName.slice(0, 3)} ${dayNum}`
                      : dayNum}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div>
                    {/* Placeholder for event data */}
                    {dayNum === 1 ? "Event 1" : null}
                  </div>
                  <div>
                    {/* Placeholder for event data */}
                    {dayNum === 1 ? "Event 1" : null}
                  </div>
                  <div>
                    {/* Placeholder for event data */}
                    {dayNum === 1 ? "Event 1" : null}
                  </div>
                </CardContent>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
}
