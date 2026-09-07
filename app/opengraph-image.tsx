import { ImageResponse } from "next/og";

export const alt =
  "SpatialOS — Field Atlas of Interior Geometries. Crowdsourced LiDAR scans reconstructed into robotics-ready datasets.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const FONT_BASE = "https://cdn.jsdelivr.net/npm/@fontsource";

async function loadFont(path: string) {
  const res = await fetch(`${FONT_BASE}/${path}`);
  if (!res.ok) throw new Error(`Font fetch failed: ${path} (${res.status})`);
  return res.arrayBuffer();
}

export default async function Image() {
  const [plexBold, plexReg, tinosItalic, plexMono] = await Promise.all([
    loadFont("ibm-plex-sans@latest/files/ibm-plex-sans-latin-700-normal.woff"),
    loadFont("ibm-plex-sans@latest/files/ibm-plex-sans-latin-400-normal.woff"),
    loadFont("tinos@latest/files/tinos-latin-400-italic.woff"),
    loadFont("ibm-plex-mono@latest/files/ibm-plex-mono-latin-400-normal.woff"),
  ]);

  const paper = "#efe7d6";
  const paper2 = "#e7debe";
  const ink = "#15110d";
  const ink3 = "#5e574a";
  const cinnabar = "#c8412a";
  const rule = "rgba(21,17,13,0.10)";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: `linear-gradient(180deg, ${paper} 0%, ${paper2} 100%)`,
          fontFamily: "PlexReg",
          color: ink,
        }}
      >
        <div style={{ width: "100%", height: 6, background: cinnabar }} />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "52px 72px 44px",
            flex: 1,
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div
                style={{
                  fontFamily: "Mono",
                  fontSize: 16,
                  letterSpacing: 3.5,
                  textTransform: "uppercase",
                  color: cinnabar,
                }}
              >
                Plate 00 · Field Atlas
              </div>
              <div
                style={{
                  fontFamily: "PlexReg",
                  fontSize: 18,
                  color: ink3,
                  letterSpacing: 0.6,
                  marginTop: 8,
                }}
              >
                Vol. I · Edition 04
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                fontFamily: "Mono",
                fontSize: 14,
                letterSpacing: 2,
                textTransform: "uppercase",
                color: ink3,
                textAlign: "right",
              }}
            >
              <div>Orthographic Survey</div>
              <div style={{ marginTop: 6 }}>38 cities · live edition</div>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flex: 1,
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: 28,
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                maxWidth: 780,
              }}
            >
              <div
                style={{
                  fontFamily: "Plex",
                  fontWeight: 700,
                  fontSize: 148,
                  lineHeight: 0.88,
                  letterSpacing: -5,
                  color: ink,
                }}
              >
                SpatialOS
              </div>
              <div
                style={{
                  fontFamily: "Tinos",
                  fontStyle: "italic",
                  fontSize: 50,
                  lineHeight: 1.1,
                  letterSpacing: -0.6,
                  color: cinnabar,
                  marginTop: 22,
                }}
              >
                Field Atlas of Interior Geometries
              </div>
              <div
                style={{
                  fontFamily: "PlexReg",
                  fontSize: 22,
                  lineHeight: 1.42,
                  color: ink3,
                  marginTop: 26,
                  maxWidth: 640,
                }}
              >
                Crowdsourced LiDAR scans from any phone, reconstructed into
                robotics-ready datasets.
              </div>
            </div>

            <svg
              width="260"
              height="260"
              viewBox="0 0 260 260"
              style={{ flexShrink: 0 }}
            >
              <circle
                cx="130"
                cy="130"
                r="120"
                fill="none"
                stroke={ink}
                strokeWidth="1.4"
              />
              <ellipse
                cx="130"
                cy="130"
                rx="120"
                ry="30"
                fill="none"
                stroke={ink}
                strokeOpacity="0.32"
              />
              <ellipse
                cx="130"
                cy="130"
                rx="120"
                ry="60"
                fill="none"
                stroke={ink}
                strokeOpacity="0.32"
              />
              <ellipse
                cx="130"
                cy="130"
                rx="120"
                ry="90"
                fill="none"
                stroke={ink}
                strokeOpacity="0.32"
              />
              <ellipse
                cx="130"
                cy="130"
                rx="30"
                ry="120"
                fill="none"
                stroke={ink}
                strokeOpacity="0.32"
              />
              <ellipse
                cx="130"
                cy="130"
                rx="60"
                ry="120"
                fill="none"
                stroke={ink}
                strokeOpacity="0.32"
              />
              <ellipse
                cx="130"
                cy="130"
                rx="90"
                ry="120"
                fill="none"
                stroke={ink}
                strokeOpacity="0.32"
              />
              <line
                x1="10"
                y1="130"
                x2="250"
                y2="130"
                stroke={ink}
                strokeOpacity="0.5"
              />
              <circle cx="90" cy="80" r="4.5" fill={cinnabar} />
              <circle
                cx="90"
                cy="80"
                r="10"
                fill="none"
                stroke={cinnabar}
                strokeOpacity="0.4"
              />
              <circle cx="172" cy="108" r="4.5" fill={cinnabar} />
              <circle cx="146" cy="182" r="4.5" fill={cinnabar} />
              <circle cx="72" cy="164" r="4.5" fill={cinnabar} />
              <circle cx="188" cy="168" r="4.5" fill={cinnabar} />
            </svg>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              borderTop: `1px solid ${rule}`,
              paddingTop: 20,
              fontFamily: "Mono",
              fontSize: 14,
              letterSpacing: 2,
              textTransform: "uppercase",
              color: ink3,
            }}
          >
            <div>Apache-2.0 · MCP-native · Built in Public</div>
            <div style={{ color: cinnabar }}>github.com/spatialhq</div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Plex", data: plexBold, weight: 700, style: "normal" },
        { name: "PlexReg", data: plexReg, weight: 400, style: "normal" },
        { name: "Tinos", data: tinosItalic, weight: 400, style: "italic" },
        { name: "Mono", data: plexMono, weight: 400, style: "normal" },
      ],
    },
  );
}
