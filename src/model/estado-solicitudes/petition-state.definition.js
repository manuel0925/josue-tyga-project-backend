const { DataTypes } = require("sequelize")
const globalDefinition = require('../global-columns-definition');

module.exports  = {
  id:{
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  name: DataTypes.STRING,
  description: DataTypes.STRING,
  ...globalDefinition
}