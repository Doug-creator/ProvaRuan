const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('postgresql://doug:0uikMu5dPIFpySCaP56V-A@doglas-1698.jxf.gcp-southamerica-east1.cockroachlabs.cloud:26257/defaultdb?sslmode=verify-full');

module.exports = sequelize;
