"use client";
import { Button } from "@/components/ui/button";

export default function AdminPage() {
  return (
    <div className="container mx-auto px-12 py-16 bg-slate-200">
      <h1 className="text-center">Admin Options</h1>
      <div className="flex justify-between w-1/2 mx-auto mt-4">
        <Button>Add Event</Button>

        <Button>Add News Post</Button>
      </div>
    </div>
  );
}
