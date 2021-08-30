'use strict';
const { Model } = require('sequelize');
const db = require('./');
module.exports = (sequelize, DataTypes) => {
  class Velouser extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // Velouser.hasMany(db.Route, { foreignKey: 'userId'});
      // db.Route.belongsTo(db.Velouser, { foreignKey: 'userId'});
    }
  }
  Velouser.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  },
  {
    sequelize,
    modelName: 'velouser',
    freezeTableName: true
  });
  return Velouser;
};
