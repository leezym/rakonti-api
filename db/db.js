const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("rakonti", "admin", "admin", {
  host: "localhost",
  dialect: "postgres",
  port: 5432, // por defecto PostgreSQL usa este puerto
  logging: false, // apaga logs de Sequelize en consola
});

// Verificar conexión al iniciar
(async () => {
  try {
    await sequelize.authenticate();
    console.log("✅ Conexión establecida con PostgreSQL");
  } catch (error) {
    console.error("❌ Error conectando a PostgreSQL:", error);
  }
})();

module.exports = sequelize;
