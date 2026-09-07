export default function Applications() {
  return (
    <section className="apps" id="apps">
      <div className="wrap">
        <div className="plate-head">
          <div>
            <div className="plate-num">Plate VI / Applications</div>
            <h2 className="plate-h">
              For everything that has to <em>move</em> through space.
            </h2>
          </div>
          <div className="plate-meta">
            Domains / 04 surveyed
            <br />
            Adjacent fields / many
          </div>
        </div>

        <div className="apps-grid">
          <div className="app feature">
            <div className="app-tag">Robotics training</div>
            <h3 className="app-title">
              Pretrain manipulation policies on the rooms they will{" "}
              <em>actually</em> work in.
            </h3>
            <p className="app-desc">
              Crowd-captured scans as a domain-randomization source for
              imitation learning, behavior cloning, and sim-to-real bridges.
              Real rooms, not synthetic ones.
            </p>
            <div className="app-illus">
              <svg viewBox="0 0 600 110" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
                <g fill="none" stroke="#15110d" strokeWidth="1.2">
                  <circle cx="80" cy="80" r="14" />
                  <line x1="80" y1="80" x2="130" y2="40" />
                  <line x1="130" y1="40" x2="180" y2="60" />
                  <circle cx="130" cy="40" r="4" fill="#c8412a" />
                  <circle cx="180" cy="60" r="3" fill="#c8412a" />
                  <path d="M 180 60 L 192 50 L 192 70 Z" fill="#c8412a" fillOpacity="0.2" />
                </g>
                <g fill="none" stroke="#15110d" strokeWidth="0.8">
                  <line x1="220" y1="92" x2="540" y2="92" />
                  <rect x="260" y="68" width="22" height="24" />
                  <ellipse cx="320" cy="86" rx="14" ry="6" />
                  <path d="M 360 92 L 374 70 L 388 92 Z" />
                  <circle cx="420" cy="82" r="10" />
                  <rect x="450" y="74" width="18" height="18" />
                </g>
                <g stroke="#1c3b8a" strokeWidth="0.8" fill="none" strokeDasharray="3 3">
                  <path d="M 190 60 Q 240 30 320 80" />
                </g>
              </svg>
            </div>
            <div className="app-stat">
              <span className="v">
                328
                <span style={{ fontSize: 18, color: "var(--color-ink-3)" }}>
                  {" "}
                  scans
                </span>
              </span>
              <span className="l">
                across 12 cities
                <br />
                home / office / café / warehouse
              </span>
            </div>
          </div>

          <div className="app side">
            <div className="app-tag">Embodied AI</div>
            <h3 className="app-title">
              Ground a model in the room <em>it is standing in.</em>
            </h3>
            <p className="app-desc">
              Stream the active scan into an agent&apos;s context via MCP. &ldquo;Where
              is the coffee mug?&rdquo; becomes a question the model can actually
              answer.
            </p>
            <div className="app-stat">
              <span className="v italic-serif">spatial://</span>
              <span className="l">
                addressable
                <br />
                resources
              </span>
            </div>
          </div>

          <div className="app half">
            <div className="app-tag">Navigation</div>
            <h3 className="app-title">
              Indoor maps without <em>GPS.</em>
            </h3>
            <p className="app-desc">
              Trajectory and layout data train routing policies for delivery
              bots, vacuums, and AR wayfinding through real homes and offices.
            </p>
            <div className="app-illus">
              <svg viewBox="0 0 600 110" aria-hidden="true">
                <g fill="none" stroke="#15110d" strokeWidth="1">
                  <path d="M 40 18 L 280 18 L 280 88 L 200 88 L 200 96 L 40 96 Z" />
                  <line x1="160" y1="18" x2="160" y2="60" />
                  <line x1="40" y1="60" x2="160" y2="60" />
                </g>
                <g stroke="#1c3b8a" strokeWidth="1" fill="none" strokeDasharray="3 3">
                  <path d="M 60 80 Q 100 60 100 40 Q 140 30 200 40 Q 250 60 260 80" />
                </g>
                <circle cx="60" cy="80" r="3" fill="#c8412a" />
                <circle cx="260" cy="80" r="3" fill="#1c3b8a" />
                <g fill="none" stroke="#15110d" strokeWidth="0.8">
                  <line x1="320" y1="55" x2="560" y2="55" />
                </g>
                <g fill="#c8412a">
                  <circle cx="335" cy="55" r="3" />
                  <circle cx="395" cy="55" r="2" />
                  <circle cx="455" cy="55" r="2" />
                  <circle cx="515" cy="55" r="2" />
                  <circle cx="555" cy="55" r="3" />
                </g>
                <g fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#5e574a">
                  <text x="332" y="74">start</text>
                  <text x="545" y="74">goal</text>
                  <text x="380" y="44">waypoint</text>
                </g>
              </svg>
            </div>
          </div>

          <div className="app half">
            <div className="app-tag">Spatial models</div>
            <h3 className="app-title">
              A foundation model for <em>space itself.</em>
            </h3>
            <p className="app-desc">
              Geometry-native pretraining at scale, the way language models
              treated the open web, but for the volumetric structure of every
              human environment.
            </p>
            <div className="app-illus">
              <svg viewBox="0 0 600 110" aria-hidden="true">
                <g fill="none" stroke="#15110d" strokeWidth="0.9">
                  <rect x="40" y="20" width="60" height="70" />
                  <rect x="120" y="32" width="60" height="58" />
                  <rect x="200" y="14" width="60" height="76" />
                  <rect x="280" y="28" width="60" height="62" />
                  <rect x="360" y="20" width="60" height="70" />
                  <rect x="440" y="36" width="60" height="54" />
                  <rect x="520" y="22" width="60" height="68" />
                </g>
                <g opacity="0.18">
                  <rect x="40" y="20" width="60" height="70" fill="#c8412a" />
                  <rect x="200" y="14" width="60" height="76" fill="#1c3b8a" />
                  <rect x="360" y="20" width="60" height="70" fill="#b48a2a" />
                  <rect x="520" y="22" width="60" height="68" fill="#1c3b8a" />
                </g>
                <g
                  fontFamily="IBM Plex Mono, monospace"
                  fontSize="7"
                  fill="#5e574a"
                  textAnchor="middle"
                >
                  <text x="70" y="100">scn_01</text>
                  <text x="150" y="100">scn_02</text>
                  <text x="230" y="100">scn_03</text>
                  <text x="310" y="100">.</text>
                  <text x="390" y="100">.</text>
                  <text x="470" y="100">.</text>
                  <text x="550" y="100">scn_n</text>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
