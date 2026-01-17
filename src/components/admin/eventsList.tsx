"use client";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { EditEventCard } from "./editEventCard";
import { useState } from "react";

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

export function EventsList({ events }: Props) {
  const [isEventOpen, setIsEventOpen] = useState(false);
  const [event, setEvent] = useState<Event | null>(null);
  const router = useRouter();
  const options: Intl.DateTimeFormatOptions = {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "America/Denver",
  };

  const handleDelete = async (id: number) => {
    try {
      const response = await fetch("/api/events/delete", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });

      if (response.ok) {
        toast.success("Event has been deleted");
        router.refresh();
      }
    } catch (error) {
      console.error("Failed to delete event", error);
    }
  };

  return (
    <>
      <Table>
        <TableCaption>All Events</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>Team</TableHead>
            <TableHead>Age</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>URL</TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {events.map((event) => {
            const eventDate = new Date(event.date);
            return (
              <TableRow key={event.id}>
                <TableCell className="font-medium">{event.title}</TableCell>
                <TableCell>{event.team}</TableCell>
                <TableCell>{event.age}</TableCell>
                <TableCell>
                  {eventDate.toLocaleString("en-US", options)}
                </TableCell>
                <TableCell>
                  {event.url.slice(0, 60)}
                  {event.url.length > 60 ? "..." : ""}
                </TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    <Button
                      type="button"
                      onClick={() => (setEvent(event), setIsEventOpen(true))}
                    >
                      Edit
                    </Button>

                    <Button
                      variant="destructive"
                      onClick={() => handleDelete(event.id)}
                    >
                      Delete
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      {event && (
        <EditEventCard
          eventDetails={event}
          isOpen={isEventOpen}
          setIsOpen={setIsEventOpen}
        />
      )}
    </>
  );
}
