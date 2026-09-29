const express = require("express");
const os = require("os");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    message: "El backend está funcionando",
    serverTime: new Date().toISOString(),
    hostname: os.hostname(),
    platform: process.platform,
    nodeVersion: process.version
  });
});

app.get("/api/info", (req, res) => {
  res.json({
    application: "App Web de Prueba",
    backend: "Node.js + Express",
    port: PORT,
    uptimeSeconds: Math.round(process.uptime())
  });
});

app.post("/api/message", (req, res) => {
  const message = String(req.body.message || "").trim();

  if (!message) {
    return res.status(400).json({
      success: false,
      error: "Debes enviar un mensaje."
    });
  }

  res.json({
    success: true,
    received: message,
    response: `El servidor recibió: ${message}`,
    serverTime: new Date().toISOString()
  });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Servidor iniciado en http://0.0.0.0:${PORT}`);
});
