export default function Register() {
  return (
    <section className="register" id="register">
      <div className="wrap">
        <div className="plate-head">
          <div>
            <div className="plate-num">Plate V / The Register</div>
            <h2 className="plate-h">
              Scan more. Unlock more. Keep the <em>credit.</em>
            </h2>
          </div>
          <div className="plate-meta">
            Tiers / four
            <br />
            Attribution / perpetual
          </div>
        </div>

        <div className="reg-grid">
          <div className="tier t-bronze">
            <div className="badge">i</div>
            <h4>Bronze</h4>
            <div className="cond">on sign-up</div>
            <div className="perk">Read-only API access, rate limited.</div>
          </div>
          <div className="tier t-silver">
            <div className="badge">ii</div>
            <h4>Silver</h4>
            <div className="cond">10+ sessions / avg &gt; 60</div>
            <div className="perk">Full read &amp; export of the dataset.</div>
          </div>
          <div className="tier t-gold">
            <div className="badge">iii</div>
            <h4>Gold</h4>
            <div className="cond">50+ sessions / avg &gt; 75</div>
            <div className="perk">Early access to new dataset drops.</div>
          </div>
          <div className="tier t-verified">
            <div className="badge">✓</div>
            <h4>Verified</h4>
            <div className="cond">team reviewed</div>
            <div className="perk">Named attribution credit in the data.</div>
          </div>
        </div>

        <div className="board">
          <div className="board-head">
            <span>
              Regional register / <b>this week</b>
            </span>
            <span className="live">live</span>
          </div>
          <div className="brow lead">
            <div className="rank">i</div>
            <div className="who">
              <div className="nm">depthwalker</div>
              <div className="rg">Tokyo, JP / Gold</div>
            </div>
            <div className="sess">214 sessions</div>
            <div className="area">
              <em>48.6</em> km²
            </div>
          </div>
          <div className="brow">
            <div className="rank">ii</div>
            <div className="who">
              <div className="nm">lidar_lena</div>
              <div className="rg">Berlin, DE / Gold</div>
            </div>
            <div className="sess">187 sessions</div>
            <div className="area">
              <em>41.2</em> km²
            </div>
          </div>
          <div className="brow">
            <div className="rank">iii</div>
            <div className="who">
              <div className="nm">mapmaker_q</div>
              <div className="rg">Austin, US / Silver</div>
            </div>
            <div className="sess">163 sessions</div>
            <div className="area">
              <em>37.9</em> km²
            </div>
          </div>
          <div className="brow">
            <div className="rank">iv</div>
            <div className="who">
              <div className="nm">voxel.vu</div>
              <div className="rg">Hanoi, VN / Silver</div>
            </div>
            <div className="sess">142 sessions</div>
            <div className="area">
              <em>33.4</em> km²
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
