"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "flowbite-react";

interface Props {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export function AddNewsPostCard({ isOpen, setIsOpen }: Props) {
  return (
    <Modal
      dismissible
      show={isOpen}
      onClose={() => setIsOpen(false)}
      size="2xl"
    >
      <form>
        <ModalHeader>Add News Post</ModalHeader>
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
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="author">Author</Label>
              <Input
                id="author"
                name="author"
                type="text"
                placeholder="Author"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="content">Content</Label>
              <Textarea
                id="content"
                name="content"
                placeholder="Content"
                rows={10}
                required
              />
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button type="submit">Add News Post</Button>
          <Button variant="outline" onClick={() => setIsOpen(false)}>
            Cancel
          </Button>
        </ModalFooter>
      </form>
    </Modal>
  );
}
