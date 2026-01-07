"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "flowbite-react";
import { AddEventFormSchema } from "@/lib/definitions";
import { useState } from "react";

interface Props {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export function AddEventCard({ isOpen, setIsOpen }: Props) {
  const [newEvent, setNewEvent] = useState({
    title: "",
    team: "",
    age: "",
    date: new Date(
      `${
        new Date(Date.now() - 7 * 60 * 60 * 1000).toISOString().split("T")[0]
      }T16:00:00-07:00`
    ),
    url: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validation = AddEventFormSchema.safeParse(newEvent);

    if (!validation.success) {
      console.error(validation.error.flatten().fieldErrors);
      return;
    }

    try {
      const response = await fetch("/api/events/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(validation.data),
      });

      if (response.ok) {
        setIsOpen(false);
        setNewEvent({
          title: "",
          team: "",
          age: "",
          date: new Date(
            `${
              new Date(Date.now() - 7 * 60 * 60 * 1000)
                .toISOString()
                .split("T")[0]
            }T16:00:00-07:00`
          ),
          url: "",
        });
      }
    } catch (error) {
      console.error("Failed to submit event", error);
    }
  };

  console.log("newEvent", newEvent);
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
                value={newEvent.title}
                onChange={(event) =>
                  setNewEvent((prev) => ({
                    ...prev,
                    title: event.target.value,
                  }))
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
                value={newEvent.team}
                onChange={(event) =>
                  setNewEvent((prev) => ({
                    ...prev,
                    team: event.target.value,
                  }))
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
                value={newEvent.age}
                onChange={(event) =>
                  setNewEvent((prev) => ({
                    ...prev,
                    age: event.target.value,
                  }))
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
                value={newEvent.date.toISOString().split("T")[0]}
                onChange={(event) =>
                  setNewEvent((prev) => ({
                    ...prev,
                    date: new Date(`${event.target.value}T16:00:00-07:00`),
                  }))
                }
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
                value={newEvent.url}
                onChange={(event) =>
                  setNewEvent((prev) => ({
                    ...prev,
                    url: event.target.value,
                  }))
                }
              />
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button type="submit">Add Event</Button>
          <Button variant="outline" onClick={() => setIsOpen(false)}>
            Cancel
          </Button>
        </ModalFooter>
      </form>
    </Modal>
  );
}
