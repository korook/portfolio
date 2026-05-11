/* ═══════════════════════════════════════════════════════════
   DATA
════════════════════════════════════════════════════════════ */
const REGIONS = [
  {
    id: "industrial",
    name: "Industrial District",
    description: "Industrial Design Portfolio",
    position: { x: 28, y: 35 },
    color: "#E87040",
    pdf: "assets/pdfs/industrial.pdf",
    animations: [
      { type: "smoke", left: "calc(50% - 75px)", bottom: "258px" },
      { type: "smoke", left: "calc(50% - 85px)", bottom: "258px" }
    ],
    structure: { width: "70px", height: "90px" },
    base: "assets/regions/industrial/base.png"
  },
  {
    id: "graph",
    name: "Graph City",
    description: "Posters, Graphics & Illustrations",
    position: { x: 69, y: 39 },
    color: "#9B5DE5",
    panelType: "feed",
    projects: [
      {
        name: "Xenomorph",
        description: "An ink pen and alcohol marker study of the Xenomorph from the movie: \"Alien\", drawn from a reference image. The figure is built up through dense hatching and crosshatching, mixing mechanical and organic forms entirely by hand on paper.",
        thumbnail: "assets/regions/graph/projects/alien.JPG",
        media: "assets/regions/graph/projects/alien.JPG"
      },
      {
        name: "IG-88",
        description: "An ink pen and marker study of IG-88 from Star Wars, drawn from reference by hand. The bounty hunter droid is captured with all its mechanical complexity — layered armor plating, heavy weaponry, and industrial detailing built up through dense hatching.",
        thumbnail: "assets/regions/graph/projects/IG-88.JPG",
        media: "assets/regions/graph/projects/IG-88.JPG"
      },
      {
        name: "Chainsaw Man - Pochita",
        description: "A manga panel recreation from Chainsaw Man, drawn in ink pen and marker by hand. The figure is largely covered in heavy black fills while the background is filled with loose, frantic linework. The approach stays close to the raw energy of the original manga style.",
        thumbnail: "assets/regions/graph/projects/chainsaw.JPG",
        media: "assets/regions/graph/projects/chainsaw.JPG"
      },
      {
        name: "Fallout T-45 Helmet",
        description: "An ink pen study of the T-45 power armor helmet from the Fallout series, drawn from reference by hand. The focus is on capturing all the surface detail — the vents, lenses, panels, and layered components — through dense hatching and confident linework.",
        thumbnail: "assets/regions/graph/projects/fallout.JPG",
        media: "assets/regions/graph/projects/fallout.JPG"
      },
      {
        name: "Guitarist from Distant Lands",
        description: "A stylishly dressed alien shredding on electric guitar, surrounded by lightning bolts and sharp radiating lines. Drawn entirely in ink pen with loose, energetic linework filling the whole composition.",
        thumbnail: "assets/regions/graph/projects/guitarist.JPG",
        media: "assets/regions/graph/projects/guitarist.JPG"
      },
      {
        name: "The Ringmaster",
        description: "An ink pen drawing of a shaman-like sorcerer character. She stands centered within a large ring, holding and manipulating several energy rings with her clawed hands. Her skull-like face and layered outfit give her a ritualistic feel, all drawn with detailed hatching and loose linework.",
        thumbnail: "assets/regions/graph/projects/ringmaster.jpg",
        media: "assets/regions/graph/projects/ringmaster.jpg"
      }
    ],
    animations: [],
    structure: { width: "80px", height: "80px" },
    base: "assets/regions/graph/base.png"
  },
  {
    id: "signal",
    name: "Signal Bay",
    description: "Sound Projects & Music",
    position: { x: 27, y: 81 },
    color: "#00C2C7",
    panelType: "feed",
    projects: [
      {
        name: "Lost in Space",
        description: "Lost in Space is an original audiovisual project combining hand-drawn illustration and sound design. The piece follows an astronaut who arrives at a space casino, stepping into its lively and chaotic atmosphere. As the astronaut settles in and begins to play, the world around them slowly fades. The noise and energy of the casino give way to something more internal — a quiet drift into thought. From there, the music takes over, gradually expanding into a spacey, cinematic soundscape that grows more majestic as it unfolds, mirroring the astronaut's journey deeper into their own mind. The illustration and soundscape were designed together as a single experience, where the visual anchors the story and the audio carries the emotional arc.",
        thumbnail: "assets/regions/signal/projects/lost.in.space.thumb.jpg",
        media: "assets/regions/signal/projects/lost.in.space.mp4"
      },
      {
        name: "Uncanny Dream",
        description: "Uncanny Dream is an original audiovisual project combining hand-drawn illustration and sound design. The piece drops you into a long, dimly lit corridor — the kind of place that feels like it shouldn't exist. Flooded with water for no clear reason, stretching endlessly forward, with a figure standing in the distance doing nothing but staring back at you. The sound begins as a dreamy, drifting liminal soundscape, the kind that feels familiar but slightly wrong. Slowly, almost without you noticing, it starts to darken. A strange melody creeps in and takes over, pulling the atmosphere further away from anything comfortable. Then it collapses into near silence — just the sound of water dripping somewhere in the dark. And then, a girl starts humming. It's not quite comforting, not quite threatening — it's somewhere in between, which makes it worse. The humming lingers for a while, then quietly fades out. That's where it ends.",
        thumbnail: "assets/regions/signal/projects/uncanny.dream.thumb.jpg",
        media: "assets/regions/signal/projects/uncanny.dream.mp4"
      },
      {
        name: "Desert Bazaar",
        description: "Desert Bazaar is an original audiovisual project combining hand-drawn illustration and sound design. The piece places you in the middle of a busy oriental bazaar, alive with the sounds of street drummers, vendors calling out to passersby, and the constant hum of crowd chatter — all wrapped in the distant whisper of an approaching sandstorm. Then, somewhere in the middle of all that noise, a flute begins to play. At first it's just another sound in the crowd, easy to miss. But something about it pulls you in. The market noise slowly falls away as you follow the melody deeper, losing yourself in it. The drums find their rhythm around the flute, cleaner and more intentional now, and the flute opens up into a full solo — the two weaving together as the music takes over completely. It ends with a single oriental guitar riff, like snapping back to reality for just a moment before everything goes quiet.",
        thumbnail: "assets/regions/signal/projects/desert.bazaar.thumb.jpg",
        media: "assets/regions/signal/projects/desert.bazaar.mp4"
      },
      {
        name: "Spider-Man Into the Spider-Verse Prowler Scene Sound Design",
        description: "This project is a sound redesign of the scene from Spider-Man: Into the Spider-Verse where Miles realizes the Prowler is his uncle and has to hide from him. Every sound in the scene was replaced from scratch — using self-recorded foley, free sound sources, and original composition. The core of the sound design is built around drums that start quiet and controlled, then slowly get tighter and more intense as the scene builds, following the tension beat by beat. The vibe of the original scene stays intact, but the whole soundscape is rebuilt in a completely personal way.",
        thumbnail: "assets/regions/signal/projects/prowler.thumb.png",
        media: "assets/regions/signal/projects/prowler.baran.ay.mp4"
      },
      {
        name: "Kon - Chainsaw Man Scene Sound Design",
        description: "This project is a sound redesign of a scene from Chainsaw Man, made entirely with self-recorded foley, free sounds, and original dubbing. It opens with a heavy ambient that slowly makes you feel like something is about to go wrong. The Leech Devil's voice was dubbed and run through a filter to get it deeper and more unsettling. Right before the big moment, the sound drops into silence — just for a second — and then everything hits at once with a massive earthquake sound. The scene's original pacing is kept intact, the sound design just wraps around it in a completely personal way.",
        thumbnail: "assets/regions/signal/projects/kon.thumb.png",
        media: "assets/regions/signal/projects/chainsawman.kon.mp4"
      },
      {
        name: "Charge Rifle - Sound Redesign",
        description: "The Charge Rifle from the game Apex Legends, taken apart and rebuilt from scratch. Using self-recorded foley and free sound samples, the goal was to give the weapon two distinct moments — the slow build of the charge, and the hit of the shot. The vibe of the original is still recognizable, just made with completely different materials.",
        thumbnail: "assets/regions/signal/projects/apex.thumb.png",
        media: "assets/regions/signal/projects/apex.charge.rifle.mp4"
      }
    ],
    animations: [
      { type: "blink-tower", left: "calc(50% - 121px)", bottom: "330px" },
      { type: "blink-dish",  left: "calc(50% + 60px)",  bottom: "335px" }
    ],
    structure: { width: "14px", height: "100px" },
    base: "assets/regions/signal/base.png"
  },
  {
    id: "archive",
    name: "The Archive",
    description: "CV and Personal Info",
    position: { x: 80, y: 82 },
    color: "#F4C842",
    pdf: "assets/pdfs/archive.pdf",
    animations: [],
    structure: { width: "36px", height: "110px" },
    base: "assets/regions/archive/base.png"
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
    el.style.setProperty('--rc', region.color);

    /* Glow on hover */
    el.addEventListener("mouseenter", () => {
      el.style.filter = `drop-shadow(0 0 18px ${region.color})`;
    });
    el.addEventListener("mouseleave", () => {
      el.style.filter = "";
    });

    /* Island base — PNG art if available, otherwise CSS placeholder */
    let base, structure;
    if (region.base) {
      base = document.createElement("img");
      base.className = "island-base--art";
      base.src = region.base;
      base.alt = region.name;
      base.draggable = false;
      /* No structure placeholder when real art is present */
      structure = null;
    } else {
      base = document.createElement("div");
      base.className = "island-base";
      base.style.background = hex2rgba(region.color, 0.28);
      base.style.border = `2.5px solid ${hex2rgba(region.color, 0.55)}`;

      structure = document.createElement("div");
      structure.className = "island-structure";
      structure.style.width  = region.structure.width;
      structure.style.height = region.structure.height;
      structure.style.background = region.color;
    }

    /* Animations */
    const animEls = buildAnimations(region);

    /* Label — flip below the island for regions near the top of the viewport */
    const label = document.createElement("div");
    label.className = "region-label";
    if (region.position.y < 35) label.classList.add("label-below");
    label.innerHTML = `
      <span class="label-name">${region.name}</span>
      <span class="label-desc">${region.description}</span>
    `;

    el.appendChild(base);
    if (structure) el.appendChild(structure);
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

  region.animations.forEach(entry => {
    /* Support both plain strings ("smoke") and objects ({ type, left, bottom }) */
    const type = typeof entry === "string" ? entry : entry.type;
    const left = (typeof entry === "object" && entry.left)   ? entry.left   : "50%";
    const bot  = (typeof entry === "object" && entry.bottom) ? entry.bottom : null;
    const useTransform = left === "50%"; /* only centre-align when left is 50% */

    switch (type) {

      case "smoke": {
        const container = document.createElement("div");
        container.className = "smoke-container";
        container.style.bottom = bot || "258px";
        container.style.left   = left;
        if (!useTransform) container.style.transform = "none";
        for (let i = 0; i < 3; i++) {
          const puff = document.createElement("div");
          puff.className = "smoke-puff";
          container.appendChild(puff);
        }
        els.push(container);
        break;
      }

      case "blink": {
        const dot = document.createElement("div");
        dot.className = "blink-dot";
        dot.style.cssText = `
          bottom: ${bot || "262px"};
          left: ${left};
          transform: ${useTransform ? "translateX(-50%)" : "none"};
        `;
        els.push(dot);
        break;
      }

      case "blink-tower": {
        const dot = document.createElement("div");
        dot.className = "tower-blink";
        dot.style.cssText = `bottom:${bot||"288px"};left:${left};transform:${useTransform?"translateX(-50%)":"none"};`;
        const dbgT = document.createElement("div");
        dbgT.style.cssText = "position:absolute;top:-18px;left:0;background:blue;color:#fff;font:bold 10px monospace;padding:2px 5px;border-radius:3px;white-space:nowrap;z-index:999;pointer-events:none;";
        dbgT.textContent = `T: ${(left.match(/-?\d+px/) || [left])[0]} / ${bot}`;
        dot.appendChild(dbgT);
        els.push(dot);
        break;
      }

      case "blink-dish": {
        const dot = document.createElement("div");
        dot.className = "tower-blink";
        dot.style.cssText = `bottom:${bot||"288px"};left:${left};transform:${useTransform?"translateX(-50%)":"none"};`;
        const dbgD = document.createElement("div");
        dbgD.style.cssText = "position:absolute;top:-18px;left:0;background:green;color:#fff;font:bold 10px monospace;padding:2px 5px;border-radius:3px;white-space:nowrap;z-index:999;pointer-events:none;";
        dbgD.textContent = `D: ${(left.match(/-?\d+px/) || [left])[0]} / ${bot}`;
        dot.appendChild(dbgD);
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
          bottom: ${bot || "298px"};
          left: ${left};
          transform: ${useTransform ? "translateX(-50%)" : "none"};
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
   MAIN OVERLAY PANEL
════════════════════════════════════════════════════════════ */
const overlay  = document.getElementById("pdf-overlay");
const topbar   = document.getElementById("pdf-topbar");
const nameEl   = document.getElementById("pdf-region-name");
const descEl   = document.getElementById("pdf-region-desc");
const panelBody = document.getElementById("panel-body");
const closeBtn  = document.getElementById("pdf-close");

function openPanel(region) {
  nameEl.textContent = region.name;
  descEl.textContent = region.description;
  topbar.style.background = region.color;

  /* Clear previous content */
  panelBody.innerHTML = "";

  if (region.panelType === "feed") {
    renderFeed(region);
  } else {
    renderPDF(region.pdf);
  }

  overlay.classList.add("open");
  overlay.setAttribute("aria-hidden", "false");
}

function closePanel() {
  overlay.classList.remove("open");
  overlay.setAttribute("aria-hidden", "true");
  setTimeout(() => { panelBody.innerHTML = ""; }, 420);
}

/* ── PDF renderer ─────────────────────────────────────────── */
function renderPDF(src) {
  const frame = document.createElement("iframe");
  frame.src = src;
  frame.title = "Portfolio PDF";
  panelBody.appendChild(frame);
}

/* ── Feed renderer ────────────────────────────────────────── */
function renderFeed(region) {
  const list = document.createElement("div");
  list.className = "feed-list";

  if (!region.projects || region.projects.length === 0) {
    const empty = document.createElement("div");
    empty.className = "feed-empty";
    empty.innerHTML = `
      <span class="feed-empty-icon">🗂️</span>
      <span>No projects yet</span>
    `;
    list.appendChild(empty);
  } else {
    region.projects.forEach(project => {
      const card = document.createElement("div");
      card.className = "feed-card";

      const isVideo = /\.mp4$/i.test(project.media);

      /* Left: thumbnail */
      const thumbWrap = document.createElement("div");
      thumbWrap.className = "feed-thumb-wrap";

      const thumb = document.createElement("img");
      thumb.src = project.thumbnail;
      thumb.alt = project.name;
      thumbWrap.appendChild(thumb);

      /* Badge: VIDEO or IMG */
      const badge = document.createElement("span");
      badge.className = `feed-badge feed-badge--${isVideo ? "video" : "image"}`;
      badge.textContent = isVideo ? "VIDEO" : "IMAGE";
      thumbWrap.appendChild(badge);

      /* Play icon overlay for videos */
      if (isVideo) {
        const play = document.createElement("div");
        play.className = "feed-play-icon";
        play.textContent = "▶";
        thumbWrap.appendChild(play);
      }

      /* Right: text */
      const info = document.createElement("div");
      info.className = "feed-info";
      info.innerHTML = `
        <span class="feed-project-name">${project.name}</span>
        <span class="feed-project-desc">${project.description}</span>
      `;

      card.appendChild(thumbWrap);
      card.appendChild(info);

      /* Click → open lightbox */
      card.addEventListener("click", () => openLightbox(project.media, isVideo));

      list.appendChild(card);
    });
  }

  panelBody.appendChild(list);
}

/* ═══════════════════════════════════════════════════════════
   LIGHTBOX
════════════════════════════════════════════════════════════ */
const lightbox        = document.getElementById("lightbox");
const lightboxContent = document.getElementById("lightbox-content");
const lightboxClose   = document.getElementById("lightbox-close");

function openLightbox(src, isVideo) {
  lightboxContent.innerHTML = "";

  if (isVideo) {
    const video = document.createElement("video");
    video.src = src;
    video.controls = true;
    video.autoplay = true;
    lightboxContent.appendChild(video);
  } else {
    const img = document.createElement("img");
    img.src = src;
    lightboxContent.appendChild(img);
  }

  lightbox.classList.add("open");
  lightbox.setAttribute("aria-hidden", "false");
}

function closeLightbox() {
  lightbox.classList.remove("open");
  lightbox.setAttribute("aria-hidden", "true");
  /* Stop video playback before clearing */
  const video = lightboxContent.querySelector("video");
  if (video) video.pause();
  setTimeout(() => { lightboxContent.innerHTML = ""; }, 220);
}

lightboxClose.addEventListener("click", closeLightbox);
lightbox.addEventListener("click", e => {
  if (e.target === lightbox) closeLightbox();
});

/* Panel close */
closeBtn.addEventListener("click", closePanel);

document.addEventListener("keydown", e => {
  if (e.key === "Escape") {
    if (lightbox.classList.contains("open")) closeLightbox();
    else closePanel();
  }
});

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
