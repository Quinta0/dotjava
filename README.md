A quick, code-first Java tutorial site, built with [Vite](https://vitejs.dev/) + React.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to see it.

Content lives in `src/data/java_tutorial.json` — each entry in `sections` becomes a topic page at `/topic/:id`. Edit that file to add or change tutorial content.

## Build

```bash
npm run build
```

Outputs a static site to `dist/`, deployed automatically to GitHub Pages on push to `main` via `.github/workflows/deploy.yml`.

## License

MIT
