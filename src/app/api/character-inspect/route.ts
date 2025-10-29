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

  const apiUrl = `https://armory.warmane.com/api/character/${encodeURIComponent(
    name
  )}/Icecrown/summary`;

  try {
    const res = await fetch(apiUrl, {
      // Some public APIs reject requests without a browser-like UA
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36",
        Accept: "application/json",
      },
      cache: "no-store",
      // Disable Next.js caching just in case
      next: { revalidate: 0 },
    });
    if (!res.ok) {
      let details: any = undefined;
      try {
        details = await res.json();
      } catch {
        // ignore body parse errors
      }
      return NextResponse.json(
        {
          error:
            details?.error ||
            details?.message ||
            "Character not found or API error",
          status: res.status,
        },
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
