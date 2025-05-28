const jwt = require('jsonwebtoken');

exports.verificarToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Token requerido' });
  }

  try {
    const decoded = jwt.verify(token, 'SECRETO_JWT'); // Usa el mismo secreto que en el login
    req.user = decoded; // Aquí se guarda la info del usuario autenticado
    next(); // Pasa a la siguiente función (por ejemplo, al controlador)
  } catch (error) {
    return res.status(401).json({ error: 'Token inválido o expirado' });
  }
};