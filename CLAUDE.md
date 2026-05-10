# Portfolio World Map — Project Handoff

## What this project is
An interactive 2D world map portfolio website built with vanilla HTML + CSS + JS (no frameworks, no build tools). It looks and feels like a Mario World map — hand-drawn islands sitting on an ocean, connected by dotted paths. The owner is an Industrial Design + Communication Design student and 3D artist.

Opens directly via `index.html`. Deployed to GitHub Pages at github.com/korook/portfolio.

---

## File structure
```
/portfolio
  index.html
  style.css
  script.js
  CLAUDE.md          ← this file
  .gitignore
  /assets
    /map
      background.png ← DROP CUSTOM BACKGROUND HERE (not added yet)
    /regions
      /industrial
        base.png     ← hand-drawn island art ✅
      /graph
        base.png     ← hand-drawn island art ✅
      /signal
        base.png     ← hand-drawn island art ✅
        /projects
          lost.in.space.thumb.jpg
          lost.in.space.mp4
      /archive
        base.png     ← hand-drawn island art ✅
    /pdfs
      industrial.pdf ← portfolio PDF ✅
      archive.pdf    ← CV PDF ✅
```

---

## The 4 regions (in script.js REGIONS array)

| ID | Name | Panel type | Color | Status |
|---|---|---|---|---|
| industrial | Industrial District | PDF → `assets/pdfs/industrial.pdf` | #E87040 | ✅ Complete |
| graph | Graph City | Feed (empty, no projects yet) | #9B5DE5 | 🟡 Needs projects |
| signal | Signal Bay | Feed (1 project: Lost in Space) | #00C2C7 | 🟡 Can add more |
| archive | The Archive | PDF → `assets/pdfs/archive.pdf` | #F4C842 | ✅ Complete |

---

## Active animations per region

### Industrial District
- Smoke puffs rising from factory chimney pipe
- Position: `left: calc(50% - 75px)`, `bottom: 268px`
- Still being fine-tuned for exact pipe alignment

### Signal Bay
- Two blinking red dots:
  - Left tower tip: `left: calc(50% - 135px)`, `bottom: 328px`
  - Satellite dish tip: `left: calc(50% + 42px)`, `bottom: 312px`
- Still being fine-tuned (user was sending screenshots to align them)

### Graph City
- No animations (removed blink — had real art)

### The Archive
- No animations (removed beacon — had real art)

---

## How PNG art works
When a region has `base: "assets/regions/xxx/base.png"` in its data:
- An `<img class="island-base--art">` is rendered instead of the CSS placeholder
- Width: 420px, height: auto (all 4 PNGs are 560×400px → display as 420×300px)
- No box-shadow, no border-radius — raw PNG on ocean

When no `base` field: CSS placeholder blob shape renders instead.

---

## How the feed panel works (Graph City & Signal Bay)
Clicking these regions opens a scrollable feed instead of a PDF.
Each project card: thumbnail on left, name + description on right.
Clicking a card opens a lightbox:
- `.mp4` files → video player with autoplay
- Image files → full-size image view

### To add a project to the feed:
1. Drop files into `assets/regions/signal/projects/` or `assets/regions/graph/projects/`
2. Add an entry to the `projects: []` array in that region in `script.js`:
```javascript
{
  name: "Project Name",
  description: "Description text",
  thumbnail: "assets/regions/signal/projects/thumb.jpg",
  media: "assets/regions/signal/projects/media.mp4"  // or .jpg/.png
}
```

---

## Background swap
`assets/map/background.png` — drop any PNG here and it replaces the CSS ocean instantly.
No code changes needed.
The animated water-ripple overlay stays on top at low opacity.
To disable the ripple once art is added: set `#map::before, #map::after { display: none; }` in style.css.

---

## Git / GitHub
- Repo: github.com/korook/portfolio (private)
- SSH key set up at `~/.ssh/id_ed25519`
- Remote: `git@github.com:korook/portfolio.git`
- Branch: `main`
- Tag `checkpoint-blue` = stable state with all 4 islands drawn, Lost in Space added, animations relocated

### To commit changes:
```bash
cd "/Users/baranay/Desktop/claude code/portfolio"
git add <files>
git commit -m "message"
git push
```

### To revert to checkpoint-blue:
```bash
git checkout checkpoint-blue
```

---

## Fonts
- **Fredoka One** — island names, panel titles, mobile message
- **Nunito** — descriptions, body text
- Loaded via Google Fonts in `<head>` of index.html

---

## Known issues / in progress
- Smoke and blinking dot positions still being fine-tuned to match artwork (user sending screenshots)
- Graph City feed has no projects yet
- Background artwork not drawn yet
- industrial.pdf is 29MB — user was advised to compress it

---

## Things NOT to change
- The `panelType: "feed"` is only on Graph City and Signal Bay — Industrial and Archive use PDFs
- All 4 island PNGs are 560×400px displayed at 420px wide — keep this consistent
- The `buildAnimations()` function accepts both plain strings and `{ type, left, bottom }` objects
- `checkpoint-blue` git tag should not be moved
