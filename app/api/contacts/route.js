import connectDB from "@/app/lib/mongodb";
import { NextResponse } from "next/server";
import Contact from "@/app/models/contact";
import mongoose from "mongoose";

export async function POST(req) {
  const { firstname, lastname, email, phonenumber } = await req.json();

 try {
    await connectDB();
    await Contact.create({firstname, lastname, email, phonenumber})

    return NextResponse.json({
        msg: ["Message sent successfully"], success: true
    })
 } catch(error) {
  if(error instanceof mongoose.Error.ValidationError) {
    let errorList = [];

    for (let e in error.errors) {
      errorList.push(e.message);
    }

    return NextResponse.json({msg: errorList})
  } else {
     return NextResponse.json({ msg: ["Unable to send message."] });
  }

 }
  
}
