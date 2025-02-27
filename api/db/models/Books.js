const db = require("../db");
const Sequelize = require("sequelize");

let Books = db.sequelize.define("books", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  isbn13: {
    type: Sequelize.CHAR(13),
    allowNull: false,
  },
  title: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  author: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  img_url: {
    type: Sequelize.STRING,
    allowNull: true,
  },
});

module.exports = Books;
