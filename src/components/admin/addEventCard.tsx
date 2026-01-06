"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "flowbite-react";

interface Props {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export function AddEventCard({ isOpen, setIsOpen }: Props) {
  return (
    <Modal
      dismissible
      show={isOpen}
      onClose={() => setIsOpen(false)}
      size="2xl"
    >
      <form>
        <ModalHeader>Add Event</ModalHeader>
        <ModalBody>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                name="username"
                type="text"
                placeholder="Username"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
              </div>
              <Input id="password" name="password" type="password" required />
            </div>
          </div>
          <div className="mt-6">
            <Button type="submit" className="w-full">
              Add Event
            </Button>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button type="submit" className="w-full">
            Add Event
          </Button>
          <Button variant="outline" onClick={() => setIsOpen(false)}>
            Cancel
          </Button>
        </ModalFooter>
      </form>
    </Modal>
  );
}
