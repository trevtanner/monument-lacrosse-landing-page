"use client";

import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <div className="py-4 bg-tertiary-100">
        <p className="text-center text-md m-auto">
          North Springs Lacrosse © {currentYear}
        </p>
      </div>
    </>
  );
}
