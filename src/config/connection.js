const Sequelize = require("sequelize");

const sequelize = new Sequelize("postgres", "postgres", "Postgres#!123", {
  host: "localhost",
  dialect: "postgres",
});

module.exports = sequelize;
