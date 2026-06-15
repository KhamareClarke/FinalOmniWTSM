import { NextResponse } from "next/server";

export async function POST() {
  const clientId = process.env.AUTODESK_CLIENT_ID;
  const clientSecret = process.env.AUTODESK_CLIENT_SECRET;

  if (!clientId || !clientSecret) {
    return NextResponse.json(
      { error: "Autodesk credentials not configured" },
      { status: 503 }
    );
  }

  try {
    const response = await fetch(
      "https://developer.api.autodesk.com/authentication/v2/token",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          client_id: clientId,
          client_secret: clientSecret,
          grant_type: "client_credentials",
          scope: "data:read data:write data:create bucket:create bucket:read",
        }),
      }
    );

    if (!response.ok) {
      const text = await response.text();
      console.error("Autodesk auth error:", text);
      return NextResponse.json(
        { error: "Autodesk authentication failed" },
        { status: 502 }
      );
    }

    const data = await response.json();
    return NextResponse.json({ access_token: data.access_token });
  } catch (error) {
    console.error("Autodesk token error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
