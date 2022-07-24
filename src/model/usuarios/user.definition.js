const { DataTypes } = require("sequelize");
const CategoryModel = require("../categoria/category.model");
const globalDefinition = require('../global-columns-definition');

module.exports  = {
  id:{
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  username:   {
    type:DataTypes.STRING,
    unique: true,
  },
  first_name: {
    allowNull: false,
    type:  DataTypes.STRING,
    validate:{
      isLowercase: true, 
    }
  },
  last_name:{
    allowNull: false,
    type:  DataTypes.STRING,
    validate:{
      isLowercase: true, 
    }
  },
  cedula:  {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true
  },
  user_email: {
    allowNull: false,
    type:  DataTypes.STRING,
    unique: true
  },
  password: {
    allowNull: false,
    type:  DataTypes.STRING
  },
  verified: {
    type:DataTypes.BOOLEAN,
    defaultValue: false
  },
  categoryId: {
    type: DataTypes.INTEGER,
    references: {
      model: CategoryModel,
      key: 'id'
    }
  },
  ...globalDefinition
}