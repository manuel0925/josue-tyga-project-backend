const { DataTypes } = require("sequelize")

const globalDefinition = require('../global-columns-definition');
const CategoryModel = require('../categoria/category.model');

module.exports  = {
  id:{
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  brand: DataTypes.STRING,
  serial_number: DataTypes.STRING,
  comment_description: DataTypes.STRING,
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