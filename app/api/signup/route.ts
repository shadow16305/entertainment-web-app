import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/user";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

interface CustomRequest {
  json: () => Promise<{ email: string; password: string; repeatedPassword: string }>;
}

export const POST = async (req: CustomRequest) => {
  try {
    const { email, password, repeatedPassword } = await req.json();
    const hashedPassword = await bcrypt.hash(password, 10);
    const hashedRepeatedPassword = await bcrypt.hash(repeatedPassword, 10);
    await connectMongoDB();
    await User.create({ email, password: hashedPassword, repeatedPassword: hashedRepeatedPassword });

    return NextResponse.json({ message: "user registered." }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "An error occured while registering the user." }, { status: 500 });
  }
};
