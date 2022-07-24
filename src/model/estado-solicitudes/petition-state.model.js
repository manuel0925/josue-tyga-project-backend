const sequelize = require('../../database/index').bootstrap();
const globalSqlOptions = require('../global-sequelize-options');
const PetitionStateDefinition = require('./petition-state.definition');


const PetitionStateModel = sequelize.define(
  'users',
  PetitionStateDefinition,{ 
  ...globalSqlOptions
})


module.exports = PetitionStateModel