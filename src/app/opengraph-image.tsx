import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import path from "node:path";

export const alt =
  "Joro Sullivan Rakotoniaina — Accompagnateur Digital";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";
export const runtime = "nodejs";

export default async function OpenGraphImage() {
  const portrait = await readFile(
    path.join(process.cwd(), "public", "sullivan-icon.png")
  );
  const portraitDataUrl = `data:image/png;base64,${portrait.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background:
            "linear-gradient(135deg, #0d0a1a 0%, #1e143c 65%, #5b21b6 100%)",
          color: "#f8f9fa",
          display: "flex",
          height: "100%",
          justifyContent: "space-between",
          padding: "72px 84px",
          width: "100%",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", width: 760 }}>
          <div
            style={{
              color: "#d4af37",
              display: "flex",
              fontSize: 24,
              fontWeight: 600,
              letterSpacing: "0.04em",
            }}
          >
            ACCOMPAGNATEUR DIGITAL · MADAGASCAR
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 68,
              fontWeight: 800,
              letterSpacing: "-0.04em",
              lineHeight: 1.08,
              marginTop: 30,
            }}
          >
            J’aide les PME à grandir grâce au digital.
          </div>
          <div
            style={{
              color: "#c4b5fd",
              display: "flex",
              fontSize: 27,
              marginTop: 34,
            }}
          >
            Web · Social Media · IA · Contenu stratégique
          </div>
          <div
            style={{
              color: "#f87171",
              display: "flex",
              fontSize: 25,
              fontWeight: 700,
              marginTop: 44,
            }}
          >
            Sullivan Joro
          </div>
        </div>

        {/* ImageResponse requires a native image element. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={portraitDataUrl}
          alt=""
          width="270"
          height="270"
          style={{
            border: "8px solid rgba(212, 175, 55, 0.75)",
            borderRadius: "50%",
            objectFit: "cover",
          }}
        />
      </div>
    ),
    size
  );
}
