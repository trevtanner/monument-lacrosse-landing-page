"use client";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { AddEventCard } from "./addEventCard";
import { AddNewsPostCard } from "./addNewsPostCard";

export default function AdminPage() {
  const [isEventOpen, setIsEventOpen] = useState(false);
  const [isNewsOpen, setIsNewsOpen] = useState(false);

  const openModal = (modalType: string) => {
    if (modalType === "Event") {
      setIsEventOpen(true);
    } else {
      setIsNewsOpen(true);
    }
  };

  return (
    <div className="container mx-auto px-12 py-16 bg-slate-200">
      <h1 className="text-center text-xl font-bold">Admin Options</h1>
      <div className="flex justify-between w-1/2 mx-auto mt-4">
        <Button onClick={() => openModal("Event")}>Add Event</Button>

        <Button onClick={() => openModal("News")}>Add News Post</Button>
      </div>

      <AddEventCard isOpen={isEventOpen} setIsOpen={setIsEventOpen} />
      <AddNewsPostCard isOpen={isNewsOpen} setIsOpen={setIsNewsOpen} />
    </div>
  );
}
