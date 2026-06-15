import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "OmniWTMS - AI-Powered UK Warehouse & Transport Management System";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          background: "linear-gradient(135deg, #1e3a8a 0%, #1d4ed8 40%, #7c3aed 100%)",
          fontFamily: "system-ui, -apple-system, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background decorative circles */}
        <div
          style={{
            position: "absolute",
            top: "-120px",
            right: "-120px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "rgba(255,255,255,0.06)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-160px",
            left: "-80px",
            width: "420px",
            height: "420px",
            borderRadius: "50%",
            background: "rgba(255,255,255,0.04)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "160px",
            right: "80px",
            width: "200px",
            height: "200px",
            borderRadius: "50%",
            background: "rgba(255,255,255,0.05)",
            display: "flex",
          }}
        />

        {/* Main content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "64px 80px",
            height: "100%",
            justifyContent: "space-between",
          }}
        >
          {/* Top: Logo + Badge */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              <div
                style={{
                  width: "56px",
                  height: "56px",
                  background: "rgba(255,255,255,0.2)",
                  borderRadius: "14px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    width: "32px",
                    height: "32px",
                    background: "white",
                    borderRadius: "6px",
                    display: "flex",
                  }}
                />
              </div>
              <span style={{ color: "white", fontSize: "32px", fontWeight: "800", letterSpacing: "-0.5px" }}>
                OmniWTMS
              </span>
            </div>
            <div
              style={{
                background: "rgba(255,255,255,0.15)",
                border: "1px solid rgba(255,255,255,0.3)",
                borderRadius: "100px",
                padding: "8px 20px",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <div
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  background: "#4ade80",
                  display: "flex",
                }}
              />
              <span style={{ color: "white", fontSize: "16px", fontWeight: "600" }}>
                250+ UK Companies
              </span>
            </div>
          </div>

          {/* Middle: Headline */}
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                background: "rgba(255,255,255,0.12)",
                borderRadius: "100px",
                padding: "8px 18px",
                width: "fit-content",
              }}
            >
              <span style={{ color: "#fbbf24", fontSize: "20px" }}>★</span>
              <span style={{ color: "rgba(255,255,255,0.9)", fontSize: "17px", fontWeight: "600" }}>
                UK's #1 AI-Powered Logistics Platform
              </span>
            </div>
            <h1
              style={{
                color: "white",
                fontSize: "64px",
                fontWeight: "900",
                lineHeight: "1.05",
                margin: "0",
                letterSpacing: "-1.5px",
              }}
            >
              Warehouse &amp; Transport
              <br />
              <span style={{ color: "#93c5fd" }}>Management System</span>
            </h1>
            <p
              style={{
                color: "rgba(255,255,255,0.8)",
                fontSize: "24px",
                margin: "0",
                lineHeight: "1.4",
                maxWidth: "700px",
              }}
            >
              Real-time tracking · AI route optimisation · 48-hour setup
            </p>
          </div>

          {/* Bottom: Stats */}
          <div style={{ display: "flex", gap: "32px" }}>
            {[
              { value: "38%", label: "Faster Deliveries" },
              { value: "99.9%", label: "Pick Accuracy" },
              { value: "48hrs", label: "Go-Live Time" },
              { value: "£0", label: "Setup Fee" },
            ].map((stat) => (
              <div
                key={stat.label}
                style={{
                  background: "rgba(255,255,255,0.1)",
                  border: "1px solid rgba(255,255,255,0.2)",
                  borderRadius: "16px",
                  padding: "20px 28px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "4px",
                  minWidth: "140px",
                }}
              >
                <span style={{ color: "white", fontSize: "36px", fontWeight: "800", lineHeight: "1" }}>
                  {stat.value}
                </span>
                <span style={{ color: "rgba(255,255,255,0.7)", fontSize: "15px", fontWeight: "500" }}>
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
