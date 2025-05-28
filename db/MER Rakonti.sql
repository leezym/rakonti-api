-- Crear tipo ENUM para sexo
CREATE TYPE sexo_enum AS ENUM ('Masculino', 'Femenino', 'Otro');

-- Tabla Usuarios
CREATE TABLE Usuarios (
    id_usuario SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    apellido VARCHAR(100) NOT NULL,
    fecha_nacimiento DATE NOT NULL,
    sexo sexo_enum NOT NULL,
    correo VARCHAR(100) UNIQUE NOT NULL,
    contrasena VARCHAR(255) NOT NULL,
    experiencia TEXT NOT NULL
);

-- Tabla Generos
CREATE TABLE Generos (
    id_genero SERIAL PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    descripcion TEXT NOT NULL,
    imagen BYTEA NOT NULL
);

-- Tabla Usuario_Generos
CREATE TABLE Usuario_Generos (
    id_usuario INT,
    id_genero INT,
    PRIMARY KEY (id_usuario, id_genero),
    FOREIGN KEY (id_usuario) REFERENCES Usuarios(id_usuario),
    FOREIGN KEY (id_genero) REFERENCES Generos(id_genero)
);

-- Tabla Tramas
CREATE TABLE Tramas (
    id_trama SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    descripcion TEXT NOT NULL,
    imagen BYTEA NOT NULL
);

-- Tabla Objetos_Deseo
CREATE TABLE Objetos_Deseo (
    id_objeto SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    descripcion TEXT NOT NULL,
    imagen BYTEA NOT NULL
);

-- Tabla Tiempo_Espacio
CREATE TABLE Tiempo_Espacio (
    id_tiempo_espacio SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    descripcion TEXT NOT NULL,
    imagen BYTEA NOT NULL
);

-- Tabla Estructuras_Narrativas
CREATE TABLE Estructuras_Narrativas (
    id_estructura SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL
);

-- Tabla Pasos_Estructura_Narrativa
CREATE TABLE Pasos_Estructura_Narrativa (
    id_paso_estructura SERIAL PRIMARY KEY,
    id_estructura INT,
    nombre_paso VARCHAR(100) NOT NULL,
    FOREIGN KEY (id_estructura) REFERENCES Estructuras_Narrativas(id_estructura)
);

-- Tabla Historias
CREATE TABLE Historias (
    id_historia SERIAL PRIMARY KEY,
    id_usuario INT,
    titulo VARCHAR(255) NOT NULL,
    id_genero INT,
    id_trama INT,
    id_objeto INT,
    id_tiempo_espacio INT,
    id_estructura INT,
    fecha_creacion DATE NOT NULL,
    fecha_edicion DATE NOT NULL,
    FOREIGN KEY (id_usuario) REFERENCES Usuarios(id_usuario),
    FOREIGN KEY (id_genero) REFERENCES Generos(id_genero),
    FOREIGN KEY (id_trama) REFERENCES Tramas(id_trama),
    FOREIGN KEY (id_objeto) REFERENCES Objetos_Deseo(id_objeto),
    FOREIGN KEY (id_tiempo_espacio) REFERENCES Tiempo_Espacio(id_tiempo_espacio),
    FOREIGN KEY (id_estructura) REFERENCES Estructuras_Narrativas(id_estructura)
);

-- Tabla Pasos_Estructura_Narrativa_Historia
CREATE TABLE Pasos_Estructura_Narrativa_Historia (
    id_paso_historia SERIAL PRIMARY KEY,
    id_historia INT,
    id_paso_estructura INT,
    contenido TEXT NOT NULL,
    FOREIGN KEY (id_historia) REFERENCES Historias(id_historia),
    FOREIGN KEY (id_paso_estructura) REFERENCES Pasos_Estructura_Narrativa(id_paso_estructura)
);

-- Tabla Personalidades (debe ir antes de Personajes)
CREATE TABLE Personalidades (
    id_personalidad SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    descripcion TEXT NOT NULL
);

-- Tabla Personajes
CREATE TABLE Personajes (
    id_personaje SERIAL PRIMARY KEY,
    id_historia INT,
    nombre VARCHAR(100) NOT NULL,
    apellido VARCHAR(100) NOT NULL,
    edad INT NOT NULL,
    sexo sexo_enum NOT NULL,
    plan INT NOT NULL,
    decision INT NOT NULL,
    id_personalidad INT NOT NULL,
    apariencia TEXT NOT NULL,
    intereses TEXT NOT NULL,
    creencias_religiosas TEXT NOT NULL,
    ocupacion TEXT NOT NULL,
    estatus_social TEXT NOT NULL,
    antecedentes TEXT NOT NULL,
    FOREIGN KEY (id_historia) REFERENCES Historias(id_historia),
    FOREIGN KEY (id_personalidad) REFERENCES Personalidades(id_personalidad)
);

-- Tabla Logros
CREATE TABLE Logros (
    id_logro SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    descripcion TEXT NOT NULL,
    categoria VARCHAR(100) NOT NULL
);

-- Tabla Logros_Usuarios
CREATE TABLE Logros_Usuarios (
    id_usuario INT,
    id_logro INT,
    fecha DATE NOT NULL,
    PRIMARY KEY (id_usuario, id_logro),
    FOREIGN KEY (id_usuario) REFERENCES Usuarios(id_usuario),
    FOREIGN KEY (id_logro) REFERENCES Logros(id_logro)
);

-- Tabla Tips_Consejos
CREATE TABLE Tips_Consejos (
    id_tip SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    descripcion TEXT NOT NULL,
    id_estructura INT NOT NULL,
    id_paso_estructura INT NOT NULL,
    FOREIGN KEY (id_estructura) REFERENCES Estructuras_Narrativas(id_estructura),
    FOREIGN KEY (id_paso_estructura) REFERENCES Pasos_Estructura_Narrativa(id_paso_estructura)
);