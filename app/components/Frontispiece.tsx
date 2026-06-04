import GlobePlate from "./GlobePlate";

export default function Frontispiece() {
  return (
    <section className="frontispiece" id="top">
      <div className="wrap">
        <div className="fp-grid">
          <div>
            <div
              className="plate-num fade-up"
              data-d="0"
              style={{ marginBottom: 22 }}
            >
              Plate 00 / Frontispiece
            </div>
            <h1 className="fp-title fade-up" data-d="1">
              Field atlas of <em>interior</em> geometries.
            </h1>
            <p className="fp-subtitle fade-up" data-d="2">
              Crowdsourced LiDAR scans from any phone, reconstructed into
              robotics-ready datasets.
            </p>
            <div className="fp-cta fade-up" data-d="3">
              <a className="btn btn-primary" href="#instrument">
                <span>Read the atlas</span>
                <span aria-hidden="true">→</span>
              </a>
              <a className="btn btn-ghost" href="https://github.com/spatialhq/home">
                <span>★ Star on GitHub</span>
              </a>
            </div>
            <div className="fp-tags fade-up" data-d="3">
              <span className="tag">
                <span className="b">●</span> iOS / Android
              </span>
              <span className="tag">
                <span className="b">●</span> ROS / PLY / COLMAP / NeRF
              </span>
              <span className="tag">
                <span className="b">●</span> on-device privacy
              </span>
            </div>
          </div>

          <GlobePlate />
        </div>
      </div>
    </section>
  );
}
