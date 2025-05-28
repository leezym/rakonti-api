const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('rakonti', 'admin', 'admin', {
  host: 'localhost',
  dialect: 'postgres'
});

module.exports = sequelize;