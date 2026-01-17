"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "flowbite-react";
import { AddEventFormSchema } from "@/lib/definitions";
import { useState, useEffect } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

interface Event {
  id: number;
  title: string;
  date: Date;
  url: string;
  team: string;
  age: string;
}

interface Props {
  eventDetails: Event;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export function EditEventCard({ eventDetails, isOpen, setIsOpen }: Props) {
  const [newEvent, setNewEvent] = useState<Event | null>(eventDetails);
  const router = useRouter();

  useEffect(() => {
    setNewEvent(eventDetails);
  }, [eventDetails]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newEvent) return;
    const validation = AddEventFormSchema.safeParse(newEvent);

    if (!validation.success) {
      console.error(validation.error.flatten().fieldErrors);
      return;
    }

    try {
      const response = await fetch("/api/events/edit", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...validation.data, id: newEvent.id }),
      });

      if (response.ok) {
        setIsOpen(false);
        toast.success("Event has been updated");
        router.refresh();
      }
    } catch (error) {
      console.error("Failed to submit event", error);
    }
  };

  console.log(newEvent);

  return (
    <Modal
      dismissible
      show={isOpen}
      onClose={() => setIsOpen(false)}
      size="2xl"
    >
      <form onSubmit={handleSubmit}>
        <ModalHeader>Add Event</ModalHeader>
        <ModalBody>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                name="title"
                type="text"
                placeholder="Title"
                required
                value={newEvent?.title}
                onChange={(event) =>
                  setNewEvent((prev) =>
                    prev ? { ...prev, title: event.target.value } : null
                  )
                }
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="team">Team</Label>
              <Input
                id="team"
                name="team"
                type="text"
                placeholder="Team"
                required
                value={newEvent?.team}
                onChange={(event) =>
                  setNewEvent((prev) =>
                    prev ? { ...prev, team: event.target.value } : null
                  )
                }
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="age">Age</Label>
              <Input
                id="age"
                name="age"
                type="age"
                placeholder="Age"
                required
                value={newEvent?.age}
                onChange={(event) =>
                  setNewEvent((prev) =>
                    prev ? { ...prev, age: event.target.value } : null
                  )
                }
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="date">Date</Label>
              <Input
                id="date"
                name="date"
                type="date"
                placeholder="Date"
                required
                value={
                  newEvent?.date
                    ? new Date(newEvent.date).toISOString().split("T")[0]
                    : ""
                }
                onChange={(event) => {
                  const date = new Date(event.target.value);
                  date.setUTCHours(8, 0, 0, 0);
                  setNewEvent((prev) => (prev ? { ...prev, date } : null));
                }}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="url">Website URL</Label>
              <Input
                id="url"
                name="url"
                type="url"
                placeholder="URL"
                required
                value={newEvent?.url}
                onChange={(event) =>
                  setNewEvent((prev) =>
                    prev ? { ...prev, url: event.target.value } : null
                  )
                }
              />
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button type="submit">Add Event</Button>
          <Button
            variant="outline"
            onClick={() => (setNewEvent(null), setIsOpen(false))}
          >
            Cancel
          </Button>
        </ModalFooter>
      </form>
    </Modal>
  );
}
