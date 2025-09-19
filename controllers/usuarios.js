const Usuarios = require('../models/usuarios');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const sendEmail = require('../utils/sendEmail');
const crypto = require('crypto');

exports.getAllUsuarios = async (req, res) => {
    try {
        const usuarios = await Usuarios.findAll();
        res.json(usuarios);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los usuarios', detalle: error.message  });
    }
};

exports.getUsuarioById = async (req, res) => {
    try {
        const usuario = await Usuarios.findByPk(req.params.id);
        if (usuario) {
            res.json(usuario);
        } else {
            res.status(404).json({ error: 'Usuario no encontrado', detalle: error.message  });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al buscar el usuario', detalle: error.message  });
    }
};

exports.createUsuario = async (req, res) => {
  
    try {
        const nuevoUsuario = await Usuarios.create(req.body);
        res.status(201).json({ message: 'Usuario creado correctamente', data: nuevoUsuario });
    } catch (error) {
        if (error.name === 'SequelizeUniqueConstraintError') {
            return res.status(400).json({ error: 'Ya existe un usuario registrado con ese correo' });
        }

        res.status(500).json({ error: 'Error al registrar usuario' });
    }
};

exports.updateUsuario = async (req, res) => {
    try {
        const usuario = await Usuarios.findByPk(req.params.id);
        if (usuario) {
            await usuario.update(req.body);
            res.status(200).json({ message: 'Usuario actualizado correctamente', data: usuario });
        } else {
            res.status(404).json({ error: 'Usuario no encontrado', detalle: error.message  });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar el usuario', detalle: error.message  });
    }
};

exports.deleteUsuario = async (req, res) => {
    try {
        const usuario = await Usuarios.findByPk(req.params.id);
        if (usuario) {
            await usuario.destroy();
            res.json({ message: 'Usuario eliminado' });
        } else {
            res.status(404).json({ error: 'Usuario no encontrado', detalle: error.message  });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar el usuario', detalle: error.message  });
    }
};

exports.registrarUsuario = async (req, res) => {
    const { contrasena } = req.body;
  
    try {
        const hashedPassword = await bcrypt.hash(contrasena, 10);

        const usuarioCreado = await Usuarios.create({
            ...req.body,
            contrasena: hashedPassword
        });

        res.status(201).json({ message: 'Usuario registrado exitosamente', id_usuario: usuarioCreado.id_usuario });
    } catch (error) {
        if (error.name === 'SequelizeUniqueConstraintError') {
            return res.status(400).json({ error: 'Ya existe un usuario registrado con ese correo' });
        }

        res.status(500).json({ error: 'Error al registrar usuario' });
    }
};

exports.iniciarSesion = async (req, res) => {
    const { correo, contrasena } = req.body;
  
    try {
        const usuario = await Usuarios.findOne({ where: { correo } });

        if (!usuario) return res.status(404).json({ error: 'Usuario no encontrado', detalle: error.message });

        const match = await bcrypt.compare(contrasena, usuario.contrasena);

        if (!match) return res.status(401).json({ error: 'Contraseña incorrecta', detalle: error.message });

        const token = jwt.sign({ id: usuario.id, correo: usuario.correo }, 'SECRETO_JWT', { expiresIn: '1h' });

        res.status(201).json({ message: 'Inicio de sesión exitoso', token, id_usuario: usuario.id_usuario });
    } catch (error) {
        res.status(500).json({ error: 'Error al iniciar sesión', detalle: error.message });
    }
};

/*exports.actualizarContraseña = async (req, res) => {
    const { contraseñaActual, nuevaContraseña } = req.body;
    const userId = req.user.id; // Asignado por el middleware de autenticación

    try {
        const usuario = await Usuarios.findByPk(userId);

        const coincide = await bcrypt.compare(contraseñaActual, usuario.contrasena);
        if (!coincide) return res.status(401).json({ error: 'Contraseña actual incorrecta', detalle: error.message });

        const nuevaHash = await bcrypt.hash(nuevaContraseña, 10);
        usuario.contrasena = nuevaHash;
        await usuario.save();

        res.status(201).json({ message: 'Contraseña actualizada correctamente' });
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar contrasena', detalle: error.message });
    }
};

exports.enviarEnlaceRecuperacion = async (req, res) => {
    const { correo } = req.body;
  
    try {
      const usuario = await Usuarios.findOne({ where: { correo } });
      if (!usuario) return res.status(404).json({ error: 'Usuario no encontrado', detalle: error.message });
  
      // Crear token JWT de recuperación válido por 15 minutos
      const token = jwt.sign({ id: usuario.id, correo }, 'SECRETO_RECUPERACION', { expiresIn: '15m' });
  
      // Enlace que enviarías desde frontend
      const enlace = `https://tusitio.com/restablecer?token=${token}`;
  
      await sendEmail(
        correo,
        'Restablecer contrasena',
        `<p>Haz clic en el siguiente enlace para restablecer tu contrasena. Este enlace expirará en 15 minutos:</p>
         <a href="${enlace}">${enlace}</a>`
      );
  
      res.status(201).json({ message: 'Enlace de recuperación enviado al correo' });
    } catch (error) {
      res.status(500).json({ error: 'Error al enviar el enlace', detalle: error.message });
    }
};

exports.restablecerContraseña = async (req, res) => {
    const { token, nuevaContraseña } = req.body;
  
    try {
      const decoded = jwt.verify(token, 'SECRETO_RECUPERACION');
  
      const usuario = await Usuarios.findByPk(decoded.id);
      if (!usuario) return res.status(404).json({ error: 'Usuario no encontrado', detalle: error.message });
  
      const hashedPassword = await bcrypt.hash(nuevaContraseña, 10);
      usuario.contrasena = hashedPassword;
      await usuario.save();
  
      res.status(201).json({ message: 'Contraseña restablecida exitosamente' });
    } catch (error) {
      if (error.name === 'TokenExpiredError') {
        return res.status(400).json({ error: 'El enlace ha expirado', detalle: error.message });
      }
      res.status(400).json({ error: 'Token inválido' });
    }
};*/