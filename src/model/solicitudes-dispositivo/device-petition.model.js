const sequelize = require('../../database/index').bootstrap();
const globalSqlOptions = require('../global-sequelize-options');
const DevicePetitionDefinition = require('./device-petition.definition');


const DevicePetitionModel = sequelize.define(
  'users',
  DevicePetitionDefinition,{ 
  ...globalSqlOptions
})


module.exports = DevicePetitionModel