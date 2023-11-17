import connectMongoDB from "@/libs/mongodb";
import Participant from "@/models/participant";
import { NextResponse } from "next/server";

export async function POST(request: any) {
  const { firstname, lastname, email, phonenumber, agency } =
    await request.json();

  await connectMongoDB();
  await Participant.create({ firstname, lastname, email, phonenumber, agency });
  return NextResponse.json(
    { message: "Participants Created" },
    { status: 201 }
  );
}

export async function GET() {
    await connectMongoDB();
    const participants = await Participant.find();
    return NextResponse.json({ participants });
};
