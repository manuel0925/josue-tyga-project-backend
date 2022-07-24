const { DataTypes } = require("sequelize");
const globalDefinition = require('../global-columns-definition');

const CategoryModel = require("../categoria/category.model");
const StatusModel = require("../estado-solicitudes/petition-state.model");

module.exports  = {
  id:{
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  description: DataTypes.STRING,
  status_id:  {
    type: DataTypes.INTEGER,
    unique: true,
    references: {
      model: StatusModel,
      key: 'id'
    }
  },
  category_id:   {
    type: DataTypes.INTEGER,
    unique: true,
    references: {
      model: CategoryModel,
      key: 'id'
    }
  },
  ...globalDefinition
}