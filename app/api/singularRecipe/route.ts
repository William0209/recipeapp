import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";

export async function GET(request: Request) {
  const searchParams = new URL(request.url).searchParams;
  const id = searchParams.get("id");

  if (!id) {
    return NextResponse.json({ error: "Recipe ID is required" }, { status: 400 });
  }

  try {
    const client = await clientPromise;
    const db = client.db();

    const recipe = await db.collection("recipes").findOne({
      _id: new ObjectId(id),
    });

    if (!recipe) {
      return NextResponse.json({ error: "Recipe not found" }, { status: 404 });
    }

    return NextResponse.json({
      message: "Successfully fetched recipe",
      recipe,
      status: 200,
    });
  } catch (error) {
    console.error("MongoDB error:", error);
    return NextResponse.json({
      error: "Failed to fetch recipe",
      status: 500,
    });
  }
}
