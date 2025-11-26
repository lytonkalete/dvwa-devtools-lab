import express from "express";
import path from "path";
import fs from "fs";
import https from "https";

const app = express({ "x-powered-by": false });
const port = process.env.PORT|| 3443;


const certPath = path.resolve("./cert.pem");
const keyPath = path.resolve("./key.pem");

app.use((req, res, next) => {
  res.set({
    "Server": "dvwa-express/1.0",
    "X-Powered-By": "Express/4.18.2",
    "Content-Security-Policy": "default-src 'self' 'unsafe-inline' https://code.jquery.com https://unpkg.com https://cdn.jsdelivr.net; object-src 'none'"
  });
  next();
});

app.get("/", (req, res) => {
  res.set("Content-Type", "text/html");
  res.sendFile(path.join(process.cwd(), "public", "index.html"));
});

app.use(express.static(path.join(process.cwd(), "public")));

app.get("/api/info", (req, res) => {
  res.type("application/json");
  res.json({ status: "ok", ts: Date.now() });
});

app.listen(port, () => {
  console.log(`DVWA lab running on port ${port}`);
});

