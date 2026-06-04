"use client";

import { useEffect, useRef, useState } from "react";

const SCORE_TARGET = 86;
const ROWS: { name: string; weight: string; pct: number }[] = [
  { name: "Coverage", weight: "30%", pct: 92 },
  { name: "Depth quality", weight: "25%", pct: 88 },
  { name: "Trajectory", weight: "25%", pct: 84 },
  { name: "Point density", weight: "20%", pct: 81 },
];

export default function Quality() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [animate, setAnimate] = useState(false);
  const [score, setScore] = useState(0);

    useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setAnimate(true);
      setScore(SCORE_TARGET);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setAnimate(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0.2 },
    );
    io.observe(node);
    return () => io.disconnect();
  }, []);

    useEffect(() => {
    if (!animate) return;
    let frame = 0;
    const FRAMES = 60;
    let raf = 0;
    const tick = () => {
      frame += 1;
      const t = Math.min(frame / FRAMES, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setScore(Math.round(eased * SCORE_TARGET));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [animate]);

  const ringPathLen = 1;
    const ringDash = `${(score / 100) * ringPathLen} ${ringPathLen}`;

  return (
    <section className="quality" id="quality" ref={sectionRef}>
      <div className="wrap">
        <div className="plate-head">
          <div>
            <div className="plate-num">Plate IV / Quality &amp; Provenance</div>
            <h2 className="plate-h">
              Every scene is <em>scored</em> before it ships.
            </h2>
          </div>
          <div className="plate-meta">
            Scoring / 0 to 100
            <br />
            Weighted / four axes
          </div>
        </div>

        <div className="qual-grid">
          <div className="qual-gauge">
            <div className="gauge">
              <svg width="170" height="170" viewBox="0 0 170 170" aria-hidden="true">
                <circle cx="85" cy="85" r="74" fill="none" stroke="#ddd1ad" strokeWidth="9" />
                <circle
                  className="ring"
                  cx="85"
                  cy="85"
                  r="74"
                  fill="none"
                  stroke="#c8412a"
                  strokeWidth="9"
                  strokeLinecap="butt"
                  pathLength={ringPathLen}
                  strokeDasharray={ringDash}
                  style={{ transition: "stroke-dasharray 1.1s cubic-bezier(.2,.7,.3,1)" }}
                />
              </svg>
              <div className="val">
                <div className="n">{score}</div>
                <div className="of">score</div>
              </div>
            </div>
            <div className="verdict">✓ training-ready</div>
            <div className="scene">living_room / 3 merged sessions / lidar</div>
          </div>
          <div className="qual-rows">
            {ROWS.map((row) => (
              <div className="srow" key={row.name}>
                <div className="top">
                  <div className="name">
                    {row.name} <span>{row.weight}</span>
                  </div>
                  <div className="pct">{row.pct}</div>
                </div>
                <div className="track">
                  <i style={{ width: animate ? `${row.pct}%` : 0 }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="qual-thresholds">
          <div className="thr bad">
            <div className="r">&lt; 40 / reject</div>
            <div className="t">
              Auto-rejected. The contributor is nudged to re-scan the gaps.
            </div>
          </div>
          <div className="thr mid">
            <div className="r">40 to 70 / flagged</div>
            <div className="t">
              Accepted but marked low-quality; held back from robotics training.
            </div>
          </div>
          <div className="thr good">
            <div className="r">&gt; 70 / accept</div>
            <div className="t">
              Full accept, training-ready and published to the corpus.
            </div>
          </div>
        </div>

        <div className="privacy-note">
          <div className="pn keep">
            <div className="h">
              <span className="sym">✓</span> We collect
            </div>
            <ul>
              <li>Point-cloud geometry &amp; depth maps</li>
              <li>Pose trajectory</li>
              <li>Device model &amp; depth_source</li>
            </ul>
          </div>
          <div className="pn drop">
            <div className="h">
              <span className="sym">×</span> Never leaves the phone
            </div>
            <ul>
              <li>Human faces, blurred on-device</li>
              <li>License plates, blurred on-device</li>
              <li>Precise GPS (city-level only) &amp; personal info</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
