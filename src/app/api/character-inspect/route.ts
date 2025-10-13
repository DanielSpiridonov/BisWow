import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const name = searchParams.get("name");
  if (!name) {
    return NextResponse.json(
      { error: "Missing character name" },
      { status: 400 }
    );
  }

  const apiUrl = `http://armory.warmane.com/api/character/${encodeURIComponent(
    name
  )}/Icecrown/summary`;

  try {
    const res = await fetch(apiUrl);
    if (!res.ok) {
      return NextResponse.json(
        { error: "Character not found or API error" },
        { status: res.status }
      );
    }
    const data = await res.json();
    return NextResponse.json(data);
  } catch (err) {
    return NextResponse.json(
      { error: "Failed to fetch from Warmane API" },
      { status: 500 }
    );
  }
}
