import { NextResponse } from "next/server";

// GET /api/getItemImageUrl/:id
// - Reads the item ID from the dynamic route param
// - Fetches the Wowhead XML for that item
// - Extracts the first <icon>...</icon> and <inventorySlot>...</inventorySlot> values and returns them as JSON
export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id?: string }> }
) {
  try {
    const { id } = await params;

    if (!id || !/^\d+$/.test(id)) {
      return NextResponse.json(
        { error: "Invalid or missing item id" },
        { status: 400 }
      );
    }

    // Wowhead XML endpoint for WotLK (adjust if you need a different game version)
    const xmlUrl = `https://wotlk.wowhead.com/item=${id}&xml`;

    const res = await fetch(xmlUrl, {
      headers: {
        Accept: "application/xml,text/xml;q=0.9,*/*;q=0.8",
      },
      // Cache for a while on the server to avoid repeated lookups
      next: { revalidate: 60 * 60 },
    });

    if (!res.ok) {
      return NextResponse.json(
        { error: "Failed to fetch XML data", statusText: res.statusText },
        { status: res.status }
      );
    }

    const xml = await res.text();

    // Extract first <icon> value from the XML. Example: <icon>inv_sword_04</icon>
    const iconMatch = xml.match(/<icon\b[^>]*>([^<]*)<\/icon>/i);
    const icon = iconMatch?.[1]?.trim();

    // Extract inventory slot if available, e.g., <inventorySlot>Head</inventorySlot>
    const slotMatch = xml.match(
      /<inventorySlot\b[^>]*>([^<]*)<\/inventorySlot>/i
    );
    const slot = slotMatch?.[1]?.trim() || null;

    if (!icon) {
      return NextResponse.json(
        { error: "No <icon> tag found in XML" },
        { status: 404 }
      );
    }

    return NextResponse.json({ icon, slot });
  } catch (error) {
    console.error("Error in getItemImageUrl handler:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
