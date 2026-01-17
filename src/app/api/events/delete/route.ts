import { NextResponse } from "next/server";
import { turso } from "@/lib/turso";

export async function DELETE(request: Request) {
  try {
    const { id } = await request.json();

    // return NextResponse.json({ id }, { status: 200 });

    await turso.execute({
      sql: "DELETE FROM Events WHERE id = ?",
      args: [id],
    });
    return NextResponse.json("Event Deleted", { status: 200 });
  } catch (error) {
    console.error("Error deleting event:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
