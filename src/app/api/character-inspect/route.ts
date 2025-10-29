import { NextResponse } from "next/server";

async function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

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
    const referer = `https://armory.warmane.com/character/${encodeURIComponent(
      name
    )}/summary`;

    let res: Response | null = null;
    let lastErrBody: any = undefined;

    for (let attempt = 1; attempt <= 3; attempt++) {
      res = await fetch(apiUrl, {
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36",
          Accept: "application/json, text/plain, */*",
          "Accept-Language": "en-US,en;q=0.9",
          Referer: referer,
          Origin: "https://armory.warmane.com",
        },
        cache: "no-store",
        redirect: "follow",
        next: { revalidate: 0 },
      });

      if (res.ok) break;

      // Try to capture upstream message for debugging
      try {
        lastErrBody = await res.clone().json();
      } catch {
        try {
          lastErrBody = await res.clone().text();
        } catch {
          lastErrBody = undefined;
        }
      }

      // Retry on likely transient or policy statuses
      if (
        res.status === 401 ||
        res.status === 403 ||
        res.status === 429 ||
        res.status >= 500
      ) {
        // small backoff: 200ms, 500ms
        await delay(attempt === 1 ? 200 : 500);
        continue;
      }
      break;
    }

    if (!res || !res.ok) {
      const status = res?.status ?? 500;
      return NextResponse.json(
        {
          error:
            (typeof lastErrBody === "object" &&
              (lastErrBody?.error || lastErrBody?.message)) ||
            (typeof lastErrBody === "string" && lastErrBody.slice(0, 300)) ||
            "Character not found or API error",
          status,
        },
        { status }
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
