const { DataTypes } = require("sequelize")

const globalDefinition = require('../global-columns-definition');
const DeviceModel = require('../dispositivos/device.model');
const PetitionModel = require('../solicitudes-dispositivo/device-petition.model');

module.exports  = {
  id:{
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  name: DataTypes.STRING,
  description: DataTypes.STRING,
  device_id: {
    type: DataTypes.INTEGER,
    references: {
      model: DeviceModel,
      key: 'id'
    }
  },
  petition_id: {
    type: DataTypes.INTEGER,
    references: {
      model: PetitionModel,
      key: 'id'
    }
  },
  ...globalDefinition
}