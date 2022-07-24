const sequelize = require('../../database/index').bootstrap();
const globalSqlOptions = require('../global-sequelize-options');
const CategoryDefinition = require('./category.definition');


const CategoryModel = sequelize.define(
  'users',
  CategoryDefinition,{ 
  ...globalSqlOptions
})


module.exports = CategoryModel