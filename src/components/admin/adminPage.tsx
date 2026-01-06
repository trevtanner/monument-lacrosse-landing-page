"use client";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { AddEventCard } from "./addEventCard";

export default function AdminPage() {
  const [isEventOpen, setIsEventOpen] = useState(false);
  return (
    <div className="container mx-auto px-12 py-16 bg-slate-200">
      <h1 className="text-center">Admin Options</h1>
      <div className="flex justify-between w-1/2 mx-auto mt-4">
        <Button>Add Event</Button>

        <Button>Add News Post</Button>
      </div>

      <AddEventCard isOpen={isEventOpen} setIsOpen={setIsEventOpen} />
    </div>
  );
}
