import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db();
    const recipes = await db.collection("recipes").find({}).toArray();

    return NextResponse.json({
      message: "Successfully fetched recipes",
      recipes,
      count: recipes.length,
      status: 200,
    });
  } catch (error) {
    console.error("MongoDB error:", error);
    return NextResponse.json({
      error: "Failed to fetch recipes",
      status: 500,
    });
  }
}
