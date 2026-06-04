export default function Protocol() {
  return (
    <section className="protocol" id="export">
      <div className="wrap">
        <div className="plate-head">
          <div>
            <div className="plate-num">Plate III / The Export</div>
            <h2 className="plate-h">
              One scan, <em>every</em> format your models speak.
            </h2>
          </div>
          <div className="plate-meta">
            Standard / MCP 1.0
            <br />
            REST / v0.4.2
          </div>
        </div>

        <div className="protocol-grid">
          <div className="proto-copy">
            <h3>
              Real rooms, exported <em>natively</em> into the robotics and
              reconstruction stacks.
            </h3>
            <p>
              Every scene is reconstructed once and exported into the formats
              the ecosystem already runs on. No custom adapters, no lossy
              conversions. Pull it over a plain REST call, or subscribe to live
              phones as{" "}
              <span className="mono" style={{ color: "var(--color-ink)" }}>
                spatial://
              </span>{" "}
              resources over MCP.
            </p>
            <ul className="proto-list">
              <li>
                <span className="k">.bag</span>
                <span className="v">
                  <b>ROS bag</b>
                  <small>
                    sensor_msgs/PointCloud2 + nav_msgs/Path, ready to replay.
                  </small>
                </span>
                <span className="use">robot nav / sim</span>
              </li>
              <li>
                <span className="k">.ply/.pcd</span>
                <span className="v">
                  <b>Open3D</b>
                  <small>
                    Dense, voxel-normalised clouds with estimated normals.
                  </small>
                </span>
                <span className="use">processing / viz</span>
              </li>
              <li>
                <span className="k">/sparse</span>
                <span className="v">
                  <b>COLMAP</b>
                  <small>Sparse + dense folders, LiDAR-anchored scale.</small>
                </span>
                <span className="use">nerfstudio / ngp</span>
              </li>
              <li>
                <span className="k">.json</span>
                <span className="v">
                  <b>Metadata</b>
                  <small>
                    Device, depth_source, 0 to 100 quality score per scene.
                  </small>
                </span>
                <span className="use">indexing / QA</span>
              </li>
            </ul>
          </div>

          <div className="specimen-sheet">
            <header>
              <span>
                <b>export.sh</b> / reference client
              </span>
              <span className="lang-tabs">
                <span className="on">rest</span>{" "}
                <span style={{ marginLeft: 10 }}>python</span>{" "}
                <span style={{ marginLeft: 10 }}>mcp</span>
              </span>
            </header>
            <pre className="code">
              <span className="ln">1</span>
              <span className="com"># 1 / create a session, stream keyframe chunks</span>
              {"\n"}
              <span className="ln">2</span>
              <span className="fn">POST</span> /sessions                      <span className="com"># to id</span>
              {"\n"}
              <span className="ln">3</span>
              <span className="fn">POST</span> /sessions/<span className="prop">{"{id}"}</span>/chunks         <span className="com"># gzip, 5 MB</span>
              {"\n"}
              <span className="ln">4</span>
              <span className="fn">POST</span> /sessions/<span className="prop">{"{id}"}</span>/complete       <span className="com"># trigger fuse</span>
              {"\n"}
              <span className="ln">5</span>
              {"\n"}
              <span className="ln">6</span>
              <span className="com"># 2 / poll until the scene is reconstructed</span>
              {"\n"}
              <span className="ln">7</span>
              <span className="fn">GET</span>  /sessions/<span className="prop">{"{id}"}</span>/status
              {"\n"}
              <span className="ln">8</span>
              <span className="com"># score 87 / accepted / 218,440 pts / lidar</span>
              {"\n"}
              <span className="ln">9</span>
              {"\n"}
              <span className="ln">10</span>
              <span className="com"># 3 / export in the format you need</span>
              {"\n"}
              <span className="ln">11</span>
              <span className="fn">GET</span>  /sessions/<span className="prop">{"{id}"}</span>/export/<span className="str">ros</span>
              {"\n"}
              <span className="ln">12</span>
              <span className="fn">GET</span>  /sessions/<span className="prop">{"{id}"}</span>/export/<span className="str">ply</span>
              {"\n"}
              <span className="ln">13</span>
              <span className="fn">GET</span>  /sessions/<span className="prop">{"{id}"}</span>/export/<span className="str">colmap</span>   <span className="com"># NeRF-ready</span>
              {"\n"}
              <span className="ln">14</span>
              {"\n"}
              <span className="ln">15</span>
              <span className="com"># or, live, over MCP:</span>
              {"\n"}
              <span className="ln">16</span>
              <span className="kw">subscribe</span>{" "}
              <span className="str">spatial://hub.local/scn_4a7c</span>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
