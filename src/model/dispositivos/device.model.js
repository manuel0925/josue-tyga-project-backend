const sequelize = require('../../database/index').bootstrap();

const DeviceDefinition = require('./device.definition');
const globalSqlOptions = require('../global-sequelize-options');


const DeviceModel = sequelize.define(
  'users',
  DeviceDefinition,{ 
  ...globalSqlOptions
})


module.exports = DeviceModel