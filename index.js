const express = require("express");
const cors = require("cors");
const path = require("path");
const pool = require("./db/db.js");

const app = express();
const PORT = process.env.PORT || 55303;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configuración de CORS
app.use(
  cors({
    origin: [
      "http://localhost:3000", // frontend local
      "http://localhost:3001", // otro puerto local
      `http://localhost:${PORT}`, // backend local
      "http://cards-transfer.gl.at.ply.gg:55303", // backend público
    ],
    credentials: true,
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "X-HTTP-Method-Override",
      "Accept",
    ],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  })
);

// Rutas principales
const usuariosRoutes = require("./routes/usuarios");
const generosRoutes = require("./routes/generos");
const usuarioGenerosRoutes = require("./routes/usuario_generos");
const tramasRoutes = require("./routes/tramas");
const objetosDeseoRoutes = require("./routes/objetos_deseo");
const tiempoEspacioRoutes = require("./routes/tiempo_espacio");
const estructurasRoutes = require("./routes/estructuras_narrativas");
const pasosEstructuraRoutes = require("./routes/pasos_estructura_narrativa");
const historiasRoutes = require("./routes/historias");
const pasosHistoriaRoutes = require("./routes/pasos_estructura_narrativa_historia");
const personalidadesRoutes = require("./routes/personalidades");
const personajesRoutes = require("./routes/personajes");
const rolesRoutes = require("./routes/roles");
const personajeRolesRoutes = require("./routes/personaje_roles");
const logrosRoutes = require("./routes/logros");
const logrosUsuariosRoutes = require("./routes/logros_usuarios");
const tipsConsejosRoutes = require("./routes/tips_consejos");

// Usar rutas
app.use("/rakonti/usuarios", usuariosRoutes);
app.use("/rakonti/generos", generosRoutes);
app.use("/rakonti/usuario-generos", usuarioGenerosRoutes);
app.use("/rakonti/tramas", tramasRoutes);
app.use("/rakonti/objetos-deseo", objetosDeseoRoutes);
app.use("/rakonti/tiempo-espacio", tiempoEspacioRoutes);
app.use("/rakonti/estructuras-narrativas", estructurasRoutes);
app.use("/rakonti/pasos-estructura-narrativa", pasosEstructuraRoutes);
app.use("/rakonti/historias", historiasRoutes);
app.use("/rakonti/pasos-estructura-narrativa-historia", pasosHistoriaRoutes);
app.use("/rakonti/personalidades", personalidadesRoutes);
app.use("/rakonti/personajes", personajesRoutes);
app.use("/rakonti/roles", rolesRoutes);
app.use("/rakonti/personaje-roles", personajeRolesRoutes);
app.use("/rakonti/logros", logrosRoutes);
app.use("/rakonti/logros-usuarios", logrosUsuariosRoutes);
app.use("/rakonti/tips-consejos", tipsConsejosRoutes);

// Servir frontend build en producción (si usas React en el mismo servidor)
app.use(express.static(path.join(__dirname, "../build")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../build", "index.html"));
});

// Probar conexión a DB
app.get("/rakonti/test-db", async (req, res) => {
  try {
    const result = await pool.query("SELECT NOW()");
    res.json({ success: true, time: result.rows[0] });
  } catch (err) {
    console.error("❌ Error DB:", err);
    res.status(500).json({ error: "Error conectando a la base de datos" });
  }
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
