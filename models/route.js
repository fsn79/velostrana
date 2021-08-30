'use strict';
const { Model } = require('sequelize');
const db = require('./');
module.exports = (sequelize, DataTypes) => {
  class Route extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
     
      // Route.belongsTo(db.Velouser, { foreignKey: 'userId'});
      // db.Velouser.hasMany(db.Route, { foreignKey: 'userId'});
    }
  }
  Route.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING
    },
    likes: {
      type: DataTypes.INTEGER
    },
    comment: {
      type: DataTypes.STRING,
    },
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'velouser',
        key: 'id',
        onUpdate: 'cascade',
        onCreate: 'cascade',
      },
    },
    startPoint: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    endPoint: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    }},
  {
    sequelize,
    modelName: 'route',
    freezeTableName: true
  });
  return Route;
};
