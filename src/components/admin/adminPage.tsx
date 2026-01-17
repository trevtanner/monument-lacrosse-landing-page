"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AddEventCard } from "./addEventCard";
import { AddNewsPostCard } from "./addNewsPostCard";
import { EventsList } from "./eventsList";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";

interface Event {
  id: number;
  title: string;
  date: Date;
  url: string;
  team: string;
  age: string;
}

interface Props {
  events: Event[];
}

export default function AdminPage({ events }: Props) {
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
      <Toaster position="top-center" className="mt-20" richColors />
      <div className="pb-6">
        <h1 className="text-center text-xl font-bold">Admin Options</h1>
        <div className="flex w-full max-w-5/6 mx-auto pt-12 gap-2">
          <Button onClick={() => openModal("Event")}>Add Event</Button>

          <Button onClick={() => openModal("News")}>Add News Post</Button>
          <Button
            variant="outline"
            onClick={() => toast.success("Event has been created")}
          >
            Show Toast
          </Button>
        </div>
      </div>
      <div className="flex w-full max-w-5/6 m-auto flex-col gap-6 pt-6">
        <Tabs defaultValue="events">
          <TabsList>
            <TabsTrigger value="events">Events</TabsTrigger>
            <TabsTrigger value="posts">Posts</TabsTrigger>
          </TabsList>
          <TabsContent value="events">
            <EventsList events={events} />
          </TabsContent>
          <TabsContent value="posts"></TabsContent>
        </Tabs>
      </div>
      <AddEventCard isOpen={isEventOpen} setIsOpen={setIsEventOpen} />
      <AddNewsPostCard isOpen={isNewsOpen} setIsOpen={setIsNewsOpen} />
    </div>
  );
}
