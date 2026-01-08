import { NextResponse } from "next/server";
// import { prisma } from "@/lib/prisma";
import { AddEventFormSchema } from "@/lib/definitions";

export async function POST(request: Request) {
  // try {
  //   const body = await request.json();
  //   // Convert date string back to Date object for Zod validation
  //   // JSON serialization converts Dates to strings, so we must parse them back
  //   if (body.date) {
  //     body.date = new Date(body.date);
  //   }
  //   const validation = AddEventFormSchema.safeParse(body);
  //   if (!validation.success) {
  //     return NextResponse.json(
  //       { errors: validation.error.flatten().fieldErrors },
  //       { status: 400 }
  //     );
  //   }
  //   const { title, team, age, date, url } = validation.data;
  //   const newEvent = await prisma.event.create({
  //     data: {
  //       title,
  //       team,
  //       age,
  //       date,
  //       url,
  //     },
  //   });
  //   return NextResponse.json(newEvent, { status: 201 });
  // } catch (error) {
  //   console.error("Error creating event:", error);
  //   return NextResponse.json(
  //     { error: "Internal Server Error" },
  //     { status: 500 }
  //   );
  // }
}
