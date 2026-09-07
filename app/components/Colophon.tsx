"use client";

import { useState } from "react";

const INSTALL = "pip install spatial-os";

export default function Colophon() {
  const [copied, setCopied] = useState(false);

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(INSTALL);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {}
  };

  return (
    <section className="colophon" id="colophon">
      <div className="wrap">
        <div className="col-cta">
          <h3>
            Open spatial data
            <br />
            belongs to <em>everyone.</em>
          </h3>
          <div className="right">
            <p>
              SpatialOS is Apache-2.0, MCP-native, and built in public. Bring a
              phone. Bring a robot. Help map the world for the machines that
              will live in it.
            </p>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <a className="btn btn-primary" href="https://github.com/spatialhq/home">
                <span>Get started</span>
                <span aria-hidden="true">→</span>
              </a>
              <a className="btn btn-ghost" href="https://discord.com">
                <span>Join Discord / 1.2k</span>
              </a>
            </div>
            <div className="install">
              <span className="prompt">$</span>
              <span>{INSTALL}</span>
              <button
                className="copybtn"
                type="button"
                onClick={onCopy}
                aria-label="Copy install command"
              >
                {copied ? "copied" : "copy"}
              </button>
            </div>
          </div>
        </div>

        <div className="colophon-info">
          <div className="col-block">
            <h4>About</h4>
            <p className="col-blurb">
              An open platform turning the phones in our pockets into the
              world&apos;s largest spatial-data corpus for robots and embodied
              AI.
            </p>
          </div>
          <div className="col-block">
            <h4>Atlas</h4>
            <ul>
              <li>
                <a href="#collection">The Collection</a>
              </li>
              <li>
                <a href="#instrument">The Instrument</a>
              </li>
              <li>
                <a href="#export">The Export</a>
              </li>
              <li>
                <a href="#register">The Register</a>
              </li>
            </ul>
          </div>
          <div className="col-block">
            <h4>Community</h4>
            <ul>
              <li>
                <a href="https://github.com/spatialhq">GitHub</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="col-foot">
          <span>
            SpatialOS / Field Atlas / Vol. I / Edition 04 / © 2026
          </span>
          <span className="status">
            14,237 active scans / all systems normal
          </span>
        </div>
      </div>
    </section>
  );
}
