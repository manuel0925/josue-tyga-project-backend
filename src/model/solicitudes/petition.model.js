const sequelize = require('../../database/index').bootstrap();

const PetitionDefinition = require('./petition.definition');
const globalSqlOptions = require('../global-sequelize-options');


const PetitionModel = sequelize.define(
  'users',
  PetitionDefinition,{ 
  ...globalSqlOptions
})


module.exports = PetitionModel