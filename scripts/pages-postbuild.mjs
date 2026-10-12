// Finishing touches for the static export in ./out (GitHub Pages build).
import { copyFileSync, existsSync, readdirSync, statSync, writeFileSync } from "node:fs";
import { join, relative, sep } from "node:path";

const OUT = "out";

// 1. A static export has no redirects, so the site root forwards to Spanish itself.
writeFileSync(
  join(OUT, "index.html"),
  `<!doctype html>
<html lang="es">
<head>
<meta charset="utf-8">
<title>Cap Cana Dental Clinic</title>
<meta http-equiv="refresh" content="0; url=es/">
<link rel="canonical" href="es/">
<script>location.replace("es/" + location.search + location.hash)</script>
</head>
<body><p><a href="es/">Español</a> · <a href="en/">English</a></p></body>
</html>
`,
);

// 2. The export writes per-segment navigation payloads as nested folders
//    (page/__next.$d$lang/treatments/__PAGE__.txt) while the router requests them
//    dot-joined (page/__next.$d$lang.treatments.__PAGE__.txt). A static host cannot
//    rewrite, so each payload is also written under the name the router asks for.
let copied = 0;
const files = (dir) =>
  readdirSync(dir).flatMap((name) => {
    const p = join(dir, name);
    return statSync(p).isDirectory() ? files(p) : [p];
  });

const walk = (dir) => {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (!statSync(p).isDirectory()) continue;
    if (name.startsWith("__next.")) {
      for (const f of files(p)) {
        const flat = join(dir, `${name}.${relative(p, f).split(sep).join(".")}`);
        if (!existsSync(flat)) {
          copyFileSync(f, flat);
          copied++;
        }
      }
    } else {
      walk(p);
    }
  }
};
walk(OUT);

console.log(`pages-postbuild: root redirect written, ${copied} segment payloads flattened`);
