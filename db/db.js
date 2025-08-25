require('dotenv').config();
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "postgres",
    port: process.env.DB_PORT,
    logging: false,
  }
);

// Verificar conexión a PostgreSQL al iniciar
(async () => {
  try {
    await sequelize.authenticate();
    console.log("✅ Conexión establecida con PostgreSQL");
  } catch (error) {
    console.error("❌ Error conectando a PostgreSQL:", error);
  }
})();

module.exports = sequelize;