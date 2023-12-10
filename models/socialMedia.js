const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const SocialMedia = sequelize.define('socialmedia', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  imageURL: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
//   comments: {
//     type: DataTypes.STRING,
//     allowNull: true,
//   },
});

module.exports = SocialMedia;
