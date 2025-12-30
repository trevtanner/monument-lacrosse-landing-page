"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { Modal, ModalHeader, ModalBody, ModalFooter } from "flowbite-react";

interface Props {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  eventDetails: {
    title: string;
    age: string;
    url: string;
    date: string;
    team: string;
  };
}

export function EventCard({ isOpen, setIsOpen, eventDetails }: Props) {
  const eventDate = new Date(eventDetails.date);

  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    month: "long",
    day: "numeric",
    timeZone: "America/Denver",
  };

  const openUrl = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <Modal
      dismissible
      show={isOpen}
      onClose={() => setIsOpen(false)}
      size="2xl"
    >
      <ModalHeader>{eventDetails.title}</ModalHeader>
      <ModalBody>
        <div className="grid gap-4">
          <h2>{eventDate.toLocaleString("en-US", options)}</h2>
          <div className="grid gap-3">Team: {eventDetails.team}</div>
          <div className="grid gap-3">Age: {eventDetails.age}</div>
          <Button className="w-1/3" onClick={() => openUrl(eventDetails.url)}>
            More Details
          </Button>
        </div>
      </ModalBody>

      <ModalFooter>
        {/* <Button variant="outline" onClick={() => setIsOpen(false)}>
          Cancel
        </Button> */}
      </ModalFooter>
    </Modal>
  );
}
