const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Comments = sequelize.define('comments', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  post_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  comments: {
    type: DataTypes.STRING,
    allowNull: false,
  }
},{
    tableName: 'comments', 
    timestamps: true, 
  });
//   comments: {
//     type: DataTypes.STRING,
//     allowNull: true,
//   },

module.exports = Comments;
