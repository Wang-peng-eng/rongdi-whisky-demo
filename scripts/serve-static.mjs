import { createServer } from "node:http";
import { createReadStream, existsSync, statSync } from "node:fs";
import { extname, join, normalize, resolve } from "node:path";

const port = Number(process.argv[3] || process.env.PORT || 5210);
const host = process.env.HOST || "127.0.0.1";
const root = resolve(process.argv[2] || "dist");

const types = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon"
};

function fileForUrl(url) {
  const rawPath = decodeURIComponent(new URL(url, `http://${host}:${port}`).pathname);
  const safePath = normalize(rawPath).replace(/^(\.\.[/\\])+/, "");
  const candidate = resolve(join(root, safePath));
  if (!candidate.startsWith(root)) return join(root, "index.html");
  if (existsSync(candidate) && statSync(candidate).isFile()) return candidate;
  if (existsSync(join(candidate, "index.html"))) return join(candidate, "index.html");
  return join(root, "index.html");
}

createServer((req, res) => {
  const file = fileForUrl(req.url || "/");
  const type = types[extname(file)] || "application/octet-stream";
  res.writeHead(200, {
    "Content-Type": type,
    "Cache-Control": "no-store"
  });
  createReadStream(file).pipe(res);
}).listen(port, host, () => {
  console.log(`Rongdi demo running at http://${host}:${port}/`);
});
