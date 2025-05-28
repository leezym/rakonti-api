const express = require("express");
const app = express();
const cors = require("cors");
const port = 5001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors({
    origin: [
        'http://localhost:3000',
        'http://localhost:3001',
        'http://localhost:5001'
    ],
    allowedHeaders: [
        'X-HTTP-Method-Override', 'Content-Type', 'Accept', 'X-Access-Token', '*'
    ]
}));

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});

const usuariosRoutes = require('./routes/usuarios');
const generosRoutes = require('./routes/generos');
const usuarioGenerosRoutes = require('./routes/usuario_generos');
const tramasRoutes = require('./routes/tramas');
const objetosDeseoRoutes = require('./routes/objetos_deseo');
const tiempoEspacioRoutes = require('./routes/tiempo_espacio');
const estructurasRoutes = require('./routes/estructuras_narrativas');
const pasosEstructuraRoutes = require('./routes/pasos_estructura_narrativa');
const historiasRoutes = require('./routes/historias');
const pasosHistoriaRoutes = require('./routes/pasos_estructura_narrativa_historia');
const personalidadesRoutes = require('./routes/personalidades');
const personajesRoutes = require('./routes/personajes');
const logrosRoutes = require('./routes/logros');
const logrosUsuariosRoutes = require('./routes/logros_usuarios');
const TipsConsejosRoutes = require('./routes/tips_consejos');

app.use('/rakonti/usuarios', usuariosRoutes);
app.use('/rakonti/generos', generosRoutes);
app.use('/rakonti/usuario-generos', usuarioGenerosRoutes);
app.use('/rakonti/tramas', tramasRoutes);
app.use('/rakonti/objetos-deseo', objetosDeseoRoutes);
app.use('/rakonti/tiempo-espacio', tiempoEspacioRoutes);
app.use('/rakonti/estructuras-narrativas', estructurasRoutes);
app.use('/rakonti/pasos-estructura-narrativa', pasosEstructuraRoutes);
app.use('/rakonti/historias', historiasRoutes);
app.use('/rakonti/pasos-estructura-narrativa-historia', pasosHistoriaRoutes);
app.use('/rakonti/personalidades', personalidadesRoutes);
app.use('/rakonti/personajes', personajesRoutes);
app.use('/rakonti/logros', logrosRoutes);
app.use('/rakonti/logros-usuarios', logrosUsuariosRoutes);
app.use('/rakonti/tips-consejos', TipsConsejosRoutes);