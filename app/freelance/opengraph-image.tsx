import { ImageResponse } from "next/og"

export const size = { width: 1200, height: 630 }
export const contentType = "image/png"
export const alt = "Get a website you actually want"

export default function OgImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "80px",
        background: "#0D1719",
        color: "#ECEFEA",
      }}
    >
      <div style={{ fontSize: 68, fontWeight: 700, lineHeight: 1.12, letterSpacing: "-0.03em" }}>
        Get a website
      </div>
      <div style={{ fontSize: 68, fontWeight: 700, lineHeight: 1.12, letterSpacing: "-0.03em" }}>
        you actually want
      </div>
      <div style={{ fontSize: 28, marginTop: 40, color: "#8FA09B" }}>
        Built one business at a time
      </div>
      <div style={{ width: 120, height: 5, marginTop: 44, background: "#B08D3F" }} />
    </div>,
    size,
  )
}
