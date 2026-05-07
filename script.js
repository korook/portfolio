/* ═══════════════════════════════════════════════════════════
   DATA
════════════════════════════════════════════════════════════ */
const REGIONS = [
  {
    id: "industrial",
    name: "Industrial District",
    description: "Industrial Design Portfolio",
    position: { x: 20, y: 25 },
    color: "#E87040",
    pdf: "assets/pdfs/industrial.pdf",
    animations: ["smoke"],
    structure: { width: "70px", height: "90px" }
  },
  {
    id: "graph",
    name: "Graph City",
    description: "Posters, Graphics & Illustrations",
    position: { x: 72, y: 20 },
    color: "#9B5DE5",
    pdf: "assets/pdfs/graph.pdf",
    animations: ["blink"],
    structure: { width: "80px", height: "80px" }
  },
  {
    id: "signal",
    name: "Signal Bay",
    description: "Sound Projects & Music",
    position: { x: 22, y: 70 },
    color: "#00C2C7",
    pdf: "assets/pdfs/signal.pdf",
    animations: ["blink-tower", "wave"],
    structure: { width: "14px", height: "100px" }
  },
  {
    id: "archive",
    name: "Archive Tower",
    description: "CV and Personal Info",
    position: { x: 74, y: 65 },
    color: "#F4C842",
    pdf: "assets/pdfs/archive.pdf",
    animations: ["beacon"],
    structure: { width: "36px", height: "110px" }
  }
];

/* Path connections: [fromId, toId] */
const PATHS = [
  ["industrial", "graph"],
  ["industrial", "signal"],
  ["graph",      "archive"],
  ["signal",     "archive"]
];

/* Cloud definitions */
const CLOUDS = [
  { width: 140, height: 52, top: 8,  duration: 60,  delay: 0   },
  { width: 100, height: 38, top: 22, duration: 90,  delay: -30 },
  { width: 160, height: 60, top: 42, duration: 120, delay: -60 },
  { width: 90,  height: 34, top: 68, duration: 80,  delay: -20 }
];

/* ═══════════════════════════════════════════════════════════
   HELPERS
════════════════════════════════════════════════════════════ */
function hex2rgba(hex, alpha) {
  const r = parseInt(hex.slice(1,3),16);
  const g = parseInt(hex.slice(3,5),16);
  const b = parseInt(hex.slice(5,7),16);
  return `rgba(${r},${g},${b},${alpha})`;
}

/* Returns {x, y} in pixels from percent position */
function pctToPx(pct) {
  return {
    x: (pct.x / 100) * window.innerWidth,
    y: (pct.y / 100) * window.innerHeight
  };
}

/* ═══════════════════════════════════════════════════════════
   RENDER CLOUDS
════════════════════════════════════════════════════════════ */
function renderClouds() {
  const layer = document.getElementById("clouds-layer");
  CLOUDS.forEach((c, i) => {
    const el = document.createElement("div");
    el.className = "cloud";
    el.style.cssText = `
      width: ${c.width}px;
      height: ${c.height}px;
      top: ${c.top}%;
      left: -${c.width}px;
      animation: cloudDrift${Math.round(c.duration / 30) * 30 > 90 ? 120 : Math.round(c.duration / 30) * 30 < 90 ? 60 : 90} ${c.duration}s linear ${c.delay}s infinite;
    `;
    /* Make clouds look puffy with pseudo-puffs via box-shadow */
    const hw = Math.round(c.width  * 0.35);
    const hh = Math.round(c.height * 0.6);
    el.style.boxShadow = `
      ${hw}px -${Math.round(hh*0.5)}px 0 ${Math.round(hh*0.15)}px rgba(255,255,255,0.82),
      -${hw}px -${Math.round(hh*0.3)}px 0 0 rgba(255,255,255,0.75)
    `;
    layer.appendChild(el);
  });
}

/* ═══════════════════════════════════════════════════════════
   RENDER REGIONS
════════════════════════════════════════════════════════════ */
function renderRegions() {
  const layer = document.getElementById("regions-layer");

  REGIONS.forEach(region => {
    const el = document.createElement("div");
    el.className = "region";
    el.id = `region-${region.id}`;
    el.dataset.id = region.id;
    el.style.left = `${region.position.x}%`;
    el.style.top  = `${region.position.y}%`;

    /* Glow on hover */
    el.addEventListener("mouseenter", () => {
      el.style.filter = `drop-shadow(0 0 18px ${region.color})`;
    });
    el.addEventListener("mouseleave", () => {
      el.style.filter = "";
    });

    /* Island base */
    const base = document.createElement("div");
    base.className = "island-base";
    base.style.background = hex2rgba(region.color, 0.28);
    base.style.border = `2.5px solid ${hex2rgba(region.color, 0.55)}`;

    /* Structure */
    const structure = document.createElement("div");
    structure.className = "island-structure";
    structure.style.width  = region.structure.width;
    structure.style.height = region.structure.height;
    structure.style.background = region.color;

    /* Animations */
    const animEls = buildAnimations(region);

    /* Label — flip below the island for regions near the top of the viewport */
    const label = document.createElement("div");
    label.className = "region-label";
    if (region.position.y < 35) label.classList.add("label-below");
    label.innerHTML = `
      <span class="label-name"><span class="label-icon">📍</span>${region.name}</span>
      <span class="label-desc">${region.description}</span>
    `;

    el.appendChild(base);
    el.appendChild(structure);
    animEls.forEach(a => el.appendChild(a));
    el.appendChild(label);

    /* Click → open PDF overlay */
    el.addEventListener("click", () => openPanel(region));

    layer.appendChild(el);
  });
}

/* ═══════════════════════════════════════════════════════════
   BUILD ANIMATION ELEMENTS PER REGION
════════════════════════════════════════════════════════════ */
function buildAnimations(region) {
  const els = [];

  region.animations.forEach(anim => {
    switch (anim) {

      case "smoke": {
        const container = document.createElement("div");
        container.className = "smoke-container";
        container.style.bottom = "258px";
        for (let i = 0; i < 3; i++) {
          const puff = document.createElement("div");
          puff.className = "smoke-puff";
          container.appendChild(puff);
        }
        els.push(container);
        break;
      }

      case "blink": {
        /* Neon dot on building top */
        const dot = document.createElement("div");
        dot.className = "blink-dot";
        dot.style.cssText = `
          bottom: 262px;
          left: 50%;
          transform: translateX(-50%);
        `;
        els.push(dot);
        break;
      }

      case "blink-tower": {
        /* Tower tip blink for Signal Bay */
        const dot = document.createElement("div");
        dot.className = "tower-blink";
        dot.style.cssText = `
          bottom: 288px;
          left: 50%;
          transform: translateX(-50%);
        `;
        els.push(dot);
        break;
      }

      case "wave": {
        const wave = document.createElement("div");
        wave.className = "wave-shimmer";
        els.push(wave);
        break;
      }

      case "beacon": {
        const beacon = document.createElement("div");
        beacon.className = "beacon";
        beacon.style.cssText = `
          bottom: 298px;
          left: 50%;
          transform: translateX(-50%);
        `;
        els.push(beacon);
        break;
      }
    }
  });

  return els;
}

/* ═══════════════════════════════════════════════════════════
   RENDER DOTTED PATHS (SVG)
════════════════════════════════════════════════════════════ */
function renderPaths() {
  const svg = document.getElementById("paths-svg");

  PATHS.forEach(([fromId, toId]) => {
    const fromRegion = REGIONS.find(r => r.id === fromId);
    const toRegion   = REGIONS.find(r => r.id === toId);

    const from = pctToPx(fromRegion.position);
    const to   = pctToPx(toRegion.position);

    /* Quadratic curve: control point pulled perpendicular to the path */
    const dx = to.x - from.x;
    const dy = to.y - from.y;
    const len = Math.sqrt(dx*dx + dy*dy);
    /* Perpendicular offset — 18% of path length, alternating side per pair */
    const perp = len * 0.18;
    const mx = (from.x + to.x) / 2 + (-dy / len) * perp;
    const my = (from.y + to.y) / 2 + ( dx / len) * perp;

    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("class", "map-path");
    path.setAttribute("d", `M ${from.x} ${from.y} Q ${mx} ${my} ${to.x} ${to.y}`);
    svg.appendChild(path);
  });
}

/* Re-render paths on resize so they stay aligned */
function refreshPaths() {
  const svg = document.getElementById("paths-svg");
  svg.innerHTML = "";
  renderPaths();
}

/* ═══════════════════════════════════════════════════════════
   PDF OVERLAY PANEL
════════════════════════════════════════════════════════════ */
const overlay  = document.getElementById("pdf-overlay");
const topbar   = document.getElementById("pdf-topbar");
const nameEl   = document.getElementById("pdf-region-name");
const descEl   = document.getElementById("pdf-region-desc");
const frame    = document.getElementById("pdf-frame");
const closeBtn = document.getElementById("pdf-close");

function openPanel(region) {
  nameEl.textContent  = region.name;
  descEl.textContent  = region.description;
  topbar.style.background = region.color;
  frame.src = region.pdf;

  overlay.classList.add("open");
  overlay.setAttribute("aria-hidden", "false");
}

function closePanel() {
  overlay.classList.remove("open");
  overlay.setAttribute("aria-hidden", "true");
  /* Delay src clear so iframe doesn't flash blank during slide-out */
  setTimeout(() => { frame.src = ""; }, 420);
}

closeBtn.addEventListener("click", closePanel);

document.addEventListener("keydown", e => {
  if (e.key === "Escape") closePanel();
});

/* Click on dark backdrop (outside panel) closes */
overlay.addEventListener("click", e => {
  if (e.target === overlay) closePanel();
});

/* ═══════════════════════════════════════════════════════════
   INIT
════════════════════════════════════════════════════════════ */
renderClouds();
renderRegions();
renderPaths();

window.addEventListener("resize", refreshPaths);
