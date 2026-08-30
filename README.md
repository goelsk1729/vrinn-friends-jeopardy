# Vrinnn's Friends Jeopardy 🎂☕

A polished, zero-dependency birthday Jeopardy game inspired by *Friends*.

## What it includes

- 2 boards × 5 categories × 5 clues
- Clickable $200–$1000 clue tiles
- Question view → reveal answer → return to board
- Played tiles visibly marked and disabled
- Progress saved locally in the browser
- Responsive desktop / tablet / mobile layout
- Reset / replay controls
- Birthday landing page and end-game celebration

## Run locally

No build step is required. Open `index.html` directly, or serve the folder with any static server.

For example:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Publish with GitHub Pages

This repo includes a Pages workflow. In GitHub:

1. Open **Settings → Pages**.
2. Under **Build and deployment**, set **Source** to **GitHub Actions**.
3. The included workflow will deploy the site on pushes to `main`.

The game uses only static HTML, CSS and JavaScript. No account, database or server is required.
