export default function Collection() {
  return (
    <section className="collection" id="collection">
      <div className="wrap">
        <div className="plate-head">
          <div>
            <div className="plate-num">Plate I / The Collection</div>
            <h2 className="plate-h">
              Four <em>specimens</em> from a single walk through one room.
            </h2>
          </div>
          <div className="plate-meta">
            Recorded / 14 May 2026
            <br />
            Location / 47.6°N 122.3°W
          </div>
        </div>

        <div className="collection-grid">
                    <div className="specimen">
            <div>
              <div className="spec-num">Spec. 001 / Depth</div>
              <h3 className="spec-title">
                Depth <em>maps</em>.
              </h3>
              <p className="spec-desc">
                Per-pixel distance to the world, registered against device
                pose. Fused from on-device LiDAR and photogrammetric stereo.
              </p>
              <div className="spec-meta">
                <span className="k">range</span>
                <span className="v">0.3 to 5.0 m</span>
                <span className="k">source</span>
                <span className="v">lidar / tof / ml</span>
                <span className="k">compress</span>
                <span className="v">zlib / LZ4</span>
                <span className="k">rate</span>
                <span className="v">60 Hz</span>
              </div>
            </div>
            <div className="spec-visual">
              <svg viewBox="0 0 200 200" aria-hidden="true">
                <rect width="200" height="200" fill="#e7debe" />
                <g fill="none" stroke="#15110d" strokeWidth="0.8">
                  <path d="M 30 170 Q 60 100 120 90 Q 170 80 180 30" />
                  <path d="M 40 160 Q 70 110 120 100 Q 165 90 175 40" />
                  <path d="M 55 150 Q 80 120 125 110 Q 160 100 170 55" />
                  <path d="M 70 140 Q 92 125 130 120 Q 155 110 160 70" />
                  <path d="M 88 132 Q 110 124 138 122 Q 150 118 152 88" />
                  <path d="M 100 128 Q 120 124 138 124 Q 144 122 146 102" />
                  <path d="M 112 126 Q 124 124 134 124 Q 140 124 142 114" />
                  <path d="M 10 60 Q 30 35 60 30" />
                  <path d="M 15 65 Q 30 45 55 40" />
                  <path d="M 22 68 Q 32 55 50 50" />
                </g>
                <g fontFamily="IBM Plex Mono, monospace" fontSize="6" fill="#5e574a">
                  <text x="135" y="124">1.2</text>
                  <text x="105" y="100">2.4</text>
                  <text x="70" y="80">3.6</text>
                  <text x="32" y="60">4.8</text>
                </g>
                <circle cx="138" cy="124" r="1.4" fill="#c8412a" />
                <text x="142" y="120" fontFamily="IBM Plex Mono, monospace" fontSize="6" fill="#c8412a">
                  ×0.86
                </text>
                <g stroke="#15110d" strokeWidth="0.6" opacity="0.7">
                  <line x1="10" y1="10" x2="22" y2="10" />
                  <line x1="10" y1="10" x2="10" y2="22" />
                  <line x1="190" y1="10" x2="178" y2="10" />
                  <line x1="190" y1="10" x2="190" y2="22" />
                </g>
              </svg>
              <span className="scale">contour 0.6 m</span>
            </div>
          </div>

                    <div className="specimen">
            <div>
              <div className="spec-num">Spec. 002 / Layout</div>
              <h3 className="spec-title">
                Spatial <em>layouts</em>.
              </h3>
              <p className="spec-desc">
                Watertight room geometry, walls, doors, openings, with
                semantic room labels and per-room area in SI units.
              </p>
              <div className="spec-meta">
                <span className="k">format</span>
                <span className="v">PLY + JSON</span>
                <span className="k">classes</span>
                <span className="v">12 room types</span>
                <span className="k">accuracy</span>
                <span className="v">± 2.0 cm</span>
                <span className="k">topology</span>
                <span className="v">manifold</span>
              </div>
            </div>
            <div className="spec-visual">
              <svg viewBox="0 0 200 200" aria-hidden="true">
                <rect width="200" height="200" fill="#e7debe" />
                <g stroke="#15110d" strokeWidth="1.6" fill="none">
                  <path d="M 28 38 L 172 38 L 172 110 L 130 110 L 130 162 L 28 162 Z" />
                  <line x1="100" y1="38" x2="100" y2="110" />
                  <line x1="28" y1="110" x2="100" y2="110" />
                </g>
                <g stroke="#e7debe" strokeWidth="3">
                  <line x1="100" y1="56" x2="100" y2="74" />
                  <line x1="58" y1="110" x2="76" y2="110" />
                </g>
                <g stroke="#15110d" strokeWidth="0.6" fill="none">
                  <path d="M 100 56 a 18 18 0 0 1 18 18" />
                  <path d="M 58 110 a 18 18 0 0 0 -18 -18" />
                </g>
                <g opacity="0.18">
                  <rect x="29" y="39" width="70" height="70" fill="#c8412a" />
                  <rect x="101" y="39" width="70" height="70" fill="#1c3b8a" />
                  <rect x="29" y="111" width="70" height="50" fill="#b48a2a" />
                  <rect x="101" y="111" width="28" height="50" fill="#1c3b8a" />
                </g>
                <g fontFamily="Tinos, serif" fontStyle="italic" fontSize="8" fill="#15110d">
                  <text x="63" y="76" textAnchor="middle">bedroom</text>
                  <text x="135" y="76" textAnchor="middle">living</text>
                  <text x="63" y="142" textAnchor="middle">kitchen</text>
                  <text x="115" y="142" textAnchor="middle" fontSize="6">bath</text>
                </g>
                <g stroke="#15110d" strokeWidth="0.6" opacity="0.7">
                  <line x1="10" y1="10" x2="22" y2="10" />
                  <line x1="10" y1="10" x2="10" y2="22" />
                  <line x1="190" y1="10" x2="178" y2="10" />
                  <line x1="190" y1="10" x2="190" y2="22" />
                </g>
              </svg>
              <span className="scale">scale 1 : 80</span>
            </div>
          </div>

                    <div className="specimen">
            <div>
              <div className="spec-num">Spec. 003 / Environment</div>
              <h3 className="spec-title">
                Indoor <em>scenes</em>.
              </h3>
              <p className="spec-desc">
                Furniture, surfaces, and objects, dense-reconstructed and
                labelled in 3D, anchored to a single right-handed room frame.
              </p>
              <div className="spec-meta">
                <span className="k">format</span>
                <span className="v">mesh + NeRF</span>
                <span className="k">pipeline</span>
                <span className="v">COLMAP / Open3D</span>
                <span className="k">density</span>
                <span className="v">1.2 M tri</span>
                <span className="k">frame</span>
                <span className="v">Z-up, SI</span>
              </div>
            </div>
            <div className="spec-visual">
              <svg viewBox="0 0 200 200" aria-hidden="true">
                <rect width="200" height="200" fill="#e7debe" />
                <g fill="none" stroke="#15110d" strokeWidth="1">
                  <path d="M 100 50 L 170 90 L 100 130 L 30 90 Z" />
                  <path d="M 100 50 L 100 16 L 170 56 L 170 90" />
                  <path d="M 100 50 L 100 16 L 30 56 L 30 90" />
                  <line x1="100" y1="16" x2="100" y2="50" strokeDasharray="2 2" />
                </g>
                <g stroke="#c8412a" strokeWidth="1" fill="#c8412a" fillOpacity="0.15">
                  <path d="M 50 90 L 80 105 L 80 96 L 50 81 Z" />
                  <path d="M 50 81 L 65 73 L 95 88 L 80 96 Z" />
                </g>
                <g stroke="#1c3b8a" strokeWidth="1" fill="#1c3b8a" fillOpacity="0.15">
                  <path d="M 95 110 L 125 124 L 125 116 L 95 102 Z" />
                  <path d="M 95 102 L 110 96 L 140 110 L 125 116 Z" />
                </g>
                <g stroke="#15110d" strokeWidth="1" fill="#15110d" fillOpacity="0.12">
                  <path d="M 130 88 L 148 96 L 148 82 L 130 74 Z" />
                  <path d="M 130 74 L 142 70 L 158 78 L 148 82 Z" />
                  <line x1="158" y1="78" x2="158" y2="60" />
                  <line x1="148" y1="82" x2="148" y2="64" />
                </g>
                <g fontFamily="IBM Plex Mono, monospace" fontSize="6" fill="#15110d">
                  <text x="20" y="78">[02]</text>
                  <text x="92" y="100">[14]</text>
                  <text x="160" y="74">[27]</text>
                </g>
                <g stroke="#15110d" strokeWidth="0.4" fill="none">
                  <line x1="30" y1="80" x2="50" y2="86" />
                  <line x1="92" y1="103" x2="108" y2="108" />
                  <line x1="158" y1="74" x2="146" y2="78" />
                </g>
                <g fontFamily="Tinos, serif" fontStyle="italic" fontSize="7" fill="#5e574a">
                  <text x="14" y="180">02 sofa / 14 table / 27 lamp</text>
                </g>
                <g stroke="#15110d" strokeWidth="0.6" opacity="0.7">
                  <line x1="10" y1="10" x2="22" y2="10" />
                  <line x1="10" y1="10" x2="10" y2="22" />
                  <line x1="190" y1="10" x2="178" y2="10" />
                  <line x1="190" y1="10" x2="190" y2="22" />
                </g>
              </svg>
              <span className="scale">iso / 1 : 40</span>
            </div>
          </div>

                    <div className="specimen">
            <div>
              <div className="spec-num">Spec. 004 / Motion</div>
              <h3 className="spec-title">
                Movement <em>trajectories</em>.
              </h3>
              <p className="spec-desc">
                6-DOF pose at 60 Hz. Every step, turn, and gesture, calibrated
                against the scene with IMU sensor fusion and loop closure.
              </p>
              <div className="spec-meta">
                <span className="k">format</span>
                <span className="v">ROS / nav_msgs</span>
                <span className="k">rate</span>
                <span className="v">60 Hz, IMU-fused</span>
                <span className="k">accuracy</span>
                <span className="v">± 0.4 cm</span>
                <span className="k">duration</span>
                <span className="v">32.4 s</span>
              </div>
            </div>
            <div className="spec-visual">
              <svg viewBox="0 0 200 200" aria-hidden="true">
                <rect width="200" height="200" fill="#e7debe" />
                <defs>
                  <pattern id="td" width="8" height="8" patternUnits="userSpaceOnUse">
                    <circle cx="1" cy="1" r="0.4" fill="#968f7e" />
                  </pattern>
                </defs>
                <rect width="200" height="200" fill="url(#td)" opacity="0.7" />
                <path
                  d="M 20 170 C 50 170, 60 110, 100 105 S 160 140, 178 60"
                  fill="none"
                  stroke="#15110d"
                  strokeWidth="1.4"
                />
                <g stroke="#c8412a" strokeWidth="0.8" fill="none">
                  <path d="M 50 150 L 56 145 L 50 142" />
                  <path d="M 85 118 L 92 115 L 89 121" />
                  <path d="M 130 124 L 135 119 L 140 124" />
                  <path d="M 170 80 L 175 76 L 178 82" />
                </g>
                <circle cx="20" cy="170" r="3" fill="#c8412a" />
                <circle cx="178" cy="60" r="3" fill="#1c3b8a" />
                <g fontFamily="IBM Plex Mono, monospace" fontSize="6" fill="#15110d">
                  <text x="10" y="186">t=0.0s</text>
                  <text x="158" y="50">t=32.4s</text>
                </g>
                <g fill="#15110d">
                  <circle cx="50" cy="150" r="1.2" />
                  <circle cx="78" cy="125" r="1.2" />
                  <circle cx="105" cy="106" r="1.2" />
                  <circle cx="132" cy="122" r="1.2" />
                  <circle cx="158" cy="100" r="1.2" />
                </g>
                <g stroke="#15110d" strokeWidth="0.4">
                  <line x1="14" y1="20" x2="14" y2="34" />
                  <line x1="14" y1="20" x2="186" y2="20" />
                  <line x1="186" y1="20" x2="186" y2="34" />
                  <line x1="100" y1="20" x2="100" y2="28" />
                  <line x1="58" y1="20" x2="58" y2="28" />
                  <line x1="142" y1="20" x2="142" y2="28" />
                </g>
                <g fontFamily="IBM Plex Mono, monospace" fontSize="6" fill="#5e574a">
                  <text x="14" y="14">0</text>
                  <text x="98" y="14">16s</text>
                  <text x="178" y="14">32s</text>
                </g>
                <g stroke="#15110d" strokeWidth="0.6" opacity="0.7">
                  <line x1="10" y1="180" x2="22" y2="180" />
                  <line x1="10" y1="180" x2="10" y2="168" />
                  <line x1="190" y1="180" x2="178" y2="180" />
                  <line x1="190" y1="180" x2="190" y2="168" />
                </g>
              </svg>
              <span className="scale">SE(3) / 60 Hz</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
