export default function Instrument() {
  return (
    <section className="instrument" id="instrument">
      <div className="wrap">
        <div className="plate-head">
          <div>
            <div className="plate-num">Plate II / The Instrument</div>
            <h2 className="plate-h">
              From <em>a phone in a pocket</em> to a tensor in a training run.
            </h2>
          </div>
          <div className="plate-meta">
            Workflow / three stages
            <br />
            Avg. cycle / 2 to 5 min/scene
          </div>
        </div>

        <div className="inst-grid">
          <div className="step">
            <div className="step-roman">I.</div>
            <h3>
              Walk the <em>space.</em>
            </h3>
            <p>
              Press record and walk the room. On-device ARKit / ARCore runs
              lightweight SLAM. Only keyframes, sparse cloud, and pose graph are
              kept. Faces and plates are blurred before anything leaves the
              phone.
            </p>
            <div className="step-illus">
              <svg viewBox="0 0 280 140" aria-hidden="true">
                <rect
                  x="118"
                  y="30"
                  width="44"
                  height="80"
                  rx="5"
                  fill="none"
                  stroke="#15110d"
                  strokeWidth="1.4"
                />
                <rect x="125" y="38" width="30" height="48" fill="#15110d" opacity="0.05" />
                <g fill="none" stroke="#c8412a" strokeWidth="0.8">
                  <path d="M 140 110 L 200 130" />
                  <path d="M 140 110 L 200 100" />
                  <path d="M 140 110 L 200 115" />
                </g>
                <g fill="#c8412a">
                  <circle cx="200" cy="100" r="1.2" />
                  <circle cx="200" cy="115" r="1.2" />
                  <circle cx="200" cy="130" r="1.2" />
                  <circle cx="218" cy="106" r="1" />
                  <circle cx="218" cy="124" r="1" />
                  <circle cx="232" cy="118" r="0.8" />
                </g>
                <g fill="none" stroke="#15110d" strokeWidth="1.2">
                  <circle cx="80" cy="40" r="6" />
                  <path d="M 80 47 L 80 78" />
                  <path d="M 80 60 L 95 70" />
                  <path d="M 80 60 L 70 75" />
                  <path d="M 80 78 L 92 100" />
                  <path d="M 80 78 L 70 102" />
                </g>
                <g fontFamily="Tinos, serif" fontStyle="italic" fontSize="9" fill="#15110d">
                  <text x="124" y="22">phone</text>
                  <text x="64" y="124">surveyor</text>
                </g>
              </svg>
            </div>
            <div className="step-foot">
              <span>Client</span>
              <b>SpatialOS.app</b>
            </div>
          </div>

          <div className="step">
            <div className="step-roman">II.</div>
            <h3>
              Reconstruct in the <em>cloud.</em>
            </h3>
            <p>
              Chunks arrive and dense-reconstruct with COLMAP + Open3D, anchored
              to scale by LiDAR depth. Multi-session fusion merges every scan of
              the same place via ICP into one scene. On T4 GPUs, 2 to 5 minutes
              each.
            </p>
            <div className="step-illus">
              <svg viewBox="0 0 280 140" aria-hidden="true">
                <g fill="none" stroke="#15110d" strokeWidth="0.8">
                  <rect x="20" y="34" width="50" height="36" />
                  <rect x="24" y="38" width="50" height="36" />
                  <rect x="28" y="42" width="50" height="36" />
                </g>
                <g fill="#15110d" opacity="0.1">
                  <rect x="28" y="42" width="50" height="36" />
                </g>
                <g stroke="#c8412a" strokeWidth="1" fill="none">
                  <line x1="92" y1="60" x2="130" y2="60" />
                  <path d="M 124 56 L 130 60 L 124 64" />
                </g>
                <g fill="none" stroke="#1c3b8a" strokeWidth="0.8">
                  <path d="M 145 35 L 215 35 L 250 60 L 250 100 L 180 100 L 145 75 Z" />
                  <line x1="145" y1="35" x2="180" y2="60" />
                  <line x1="180" y1="60" x2="215" y2="35" />
                  <line x1="180" y1="60" x2="180" y2="100" />
                  <line x1="180" y1="60" x2="250" y2="60" />
                  <line x1="145" y1="75" x2="180" y2="60" />
                </g>
                <g fontFamily="Tinos, serif" fontStyle="italic" fontSize="9" fill="#15110d">
                  <text x="20" y="92">raw frames</text>
                  <text x="180" y="120">fused scene</text>
                </g>
                <g fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#c8412a">
                  <text x="98" y="50">fuse</text>
                </g>
              </svg>
            </div>
            <div className="step-foot">
              <span>GPU workers</span>
              <b>colmap / open3d</b>
            </div>
          </div>

          <div className="step">
            <div className="step-roman">III.</div>
            <h3>
              Export to your <em>stack.</em>
            </h3>
            <p>
              Pull the unified scene as a ROS bag, PLY/PCD, or NeRF-ready COLMAP
              folder, each with a quality-scored JSON sidecar. Served over REST
              and as live MCP resources for agents.
            </p>
            <div className="step-illus">
              <svg viewBox="0 0 280 140" aria-hidden="true">
                <circle cx="80" cy="70" r="22" fill="none" stroke="#15110d" strokeWidth="1.4" />
                <text
                  x="80"
                  y="74"
                  textAnchor="middle"
                  fontFamily="Tinos, serif"
                  fontStyle="italic"
                  fontSize="11"
                  fill="#c8412a"
                >
                  scene
                </text>
                <g fill="none" stroke="#15110d" strokeWidth="0.8">
                  <line x1="102" y1="58" x2="172" y2="28" />
                  <line x1="102" y1="66" x2="172" y2="56" />
                  <line x1="102" y1="74" x2="172" y2="84" />
                  <line x1="102" y1="82" x2="172" y2="112" />
                </g>
                <g fontFamily="IBM Plex Mono, monospace" fontSize="8.5" fill="#15110d">
                  <text x="178" y="31">ROS bag</text>
                  <text x="178" y="59">PLY / PCD</text>
                  <text x="178" y="87">COLMAP</text>
                  <text x="178" y="115">NeRF</text>
                </g>
                <g fill="#c8412a">
                  <circle cx="174" cy="27" r="1.6" />
                  <circle cx="174" cy="55" r="1.6" />
                  <circle cx="174" cy="83" r="1.6" />
                  <circle cx="174" cy="111" r="1.6" />
                </g>
              </svg>
            </div>
            <div className="step-foot">
              <span>Protocol</span>
              <b>rest / mcp/spatial</b>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
