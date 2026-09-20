import { ImageResponse } from "next/og"

export const size = { width: 1200, height: 630 }
export const contentType = "image/png"
export const alt = "Y Dhanush - Software Developer"

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
        background: "#0a0a0a",
        color: "#fafafa",
      }}
    >
      <div style={{ fontSize: 72, fontWeight: 700 }}>Y Dhanush Sai Reddy</div>
      <div style={{ fontSize: 40, marginTop: 16, color: "#a1a1aa" }}>Software Engineer</div>
      <div style={{ fontSize: 28, marginTop: 40, color: "#71717a" }}>React · Next.js · Node · Hyderabad, India</div>
    </div>,
    size,
  )
}
