"use client";

import { useEffect, useRef, useState } from "react";

type City = { name: string; lat: number; lng: number };

const CITIES: City[] = [
  { name: "Tokyo", lat: 35.7, lng: 139.7 },
  { name: "Berlin", lat: 52.5, lng: 13.4 },
  { name: "Austin", lat: 30.3, lng: -97.7 },
  { name: "Seattle", lat: 47.6, lng: -122.3 },
  { name: "São Paulo", lat: -23.5, lng: -46.6 },
];

const COUNT_TARGET = 328;
const COUNT_FRAMES = 60;

function formatCoord(lat: number, lng: number): string {
  const latH = lat >= 0 ? "N" : "S";
  const lngH = lng >= 0 ? "E" : "W";
  return `${Math.abs(lat).toFixed(1)}°${latH} ${Math.abs(lng).toFixed(1)}°${lngH}`;
}

export default function GlobePlate() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [activeCity, setActiveCity] = useState<City>(CITIES[0]);
  const [count, setCount] = useState(0);

    useEffect(() => {
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setCount(COUNT_TARGET);
      return;
    }
    let frame = 0;
    let raf = 0;
    const tick = () => {
      frame += 1;
      const t = Math.min(frame / COUNT_FRAMES, 1);
            const eased = 1 - Math.pow(1 - t, 3);
      setCount(Math.round(eased * COUNT_TARGET));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

    useEffect(() => {
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    let i = 0;
    const id = window.setInterval(() => {
      i = (i + 1) % CITIES.length;
      setActiveCity(CITIES[i]);
    }, 3500);
    return () => window.clearInterval(id);
  }, []);

    useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;
    let start = performance.now();

    const draw = (now: number) => {
      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      const W = Math.max(1, Math.floor(rect.width * dpr));
      const H = Math.max(1, Math.floor(rect.height * dpr));
      if (canvas.width !== W || canvas.height !== H) {
        canvas.width = W;
        canvas.height = H;
      }
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const w = rect.width;
      const h = rect.height;
      ctx.clearRect(0, 0, w, h);

      const cx = w / 2;
      const cy = h / 2;
      const r = Math.min(w, h) * 0.36;
      const elapsed = (now - start) / 1000;
      const rot = reduce ? 0 : (elapsed * Math.PI * 2) / 24;

            ctx.strokeStyle = "rgba(21,17,13,0.55)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(cx, cy, r, 0, Math.PI * 2);
      ctx.stroke();

            ctx.strokeStyle = "rgba(21,17,13,0.18)";
      ctx.lineWidth = 0.7;
      for (let i = 1; i <= 5; i++) {
        const ry = r * Math.cos((i * Math.PI) / 12);
        ctx.beginPath();
        ctx.ellipse(cx, cy, r, ry, 0, 0, Math.PI * 2);
        ctx.stroke();
      }
            ctx.strokeStyle = "rgba(21,17,13,0.32)";
      ctx.beginPath();
      ctx.moveTo(cx - r, cy);
      ctx.lineTo(cx + r, cy);
      ctx.stroke();

            ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(rot);
      ctx.strokeStyle = "rgba(21,17,13,0.18)";
      ctx.lineWidth = 0.7;
      for (let i = 0; i < 6; i++) {
        const a = (i * Math.PI) / 6;
        const rx = r;
        const ry = r * 0.45;
        ctx.beginPath();
        ctx.ellipse(0, 0, rx, ry, a, 0, Math.PI * 2);
        ctx.stroke();
      }
      ctx.restore();

            ctx.fillStyle = "#c8412a";
      CITIES.forEach((c) => {
                const phi = (c.lat * Math.PI) / 180;
        const lambda = (c.lng * Math.PI) / 180 + rot * 0.3;
        const x = cx + r * Math.cos(phi) * Math.sin(lambda) * 0.85;
        const y = cy - r * Math.sin(phi) * 0.85;
        ctx.beginPath();
        ctx.arc(x, y, 2.4, 0, Math.PI * 2);
        ctx.fill();
                ctx.strokeStyle = "rgba(200,65,42,0.35)";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(x, y, 5, 0, Math.PI * 2);
        ctx.stroke();
      });

            ctx.strokeStyle = "rgba(21,17,13,0.5)";
      ctx.lineWidth = 0.6;
      const t = 10;
      ctx.beginPath();
      ctx.moveTo(12, 12);
      ctx.lineTo(12 + t, 12);
      ctx.moveTo(12, 12);
      ctx.lineTo(12, 12 + t);
      ctx.moveTo(w - 12, 12);
      ctx.lineTo(w - 12 - t, 12);
      ctx.moveTo(w - 12, 12);
      ctx.lineTo(w - 12, 12 + t);
      ctx.stroke();

      if (!reduce) raf = requestAnimationFrame(draw);
    };

    raf = requestAnimationFrame(draw);

    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div style={{ position: "relative" }}>
      <span className="reg tl" />
      <span className="reg tr" />
      <span className="reg bl" />
      <span className="reg br" />
      <span className="stamp" style={{ top: -10, right: 28 }}>
        Live Edition
      </span>
      <div className="globe-plate">
        <span className="gp-corner tl">Plate 00 / The World, surveyed</span>
        <span className="gp-corner tr">
          orthographic
          <br />
          graticule 30°
        </span>
        <div className="globe-stage">
          <canvas ref={canvasRef} aria-label="Rotating editorial scan globe" />
        </div>
        <div className="gp-readout">
          active device / <span className="city">{activeCity.name}</span>
          <br />
          <span className="lat">{formatCoord(activeCity.lat, activeCity.lng)}</span>
        </div>
        <div className="gp-count">
          <div className="n">{count.toLocaleString("en-US")}</div>
          <div className="l">scans / 12 cities</div>
        </div>
        <div className="gp-label">
          <span>
            <b>Fig. 00</b> / Devices in the field, live
          </span>
          <span>● recording</span>
        </div>
      </div>
    </div>
  );
}
