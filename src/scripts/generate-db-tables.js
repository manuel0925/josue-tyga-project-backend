const CategoryModel = require('../model/categoria/category.model');
const DeviceModel = require('../model/dispositivos/device.model');
const PetitionStateModel = require('../model/solicitudes-dispositivo/device-petition.model');
const PetitionModel = require('../model/solicitudes/petition.model');
const DevicePetitionModel = require('../model/solicitudes-dispositivo/device-petition.model');
const UserModel = require('../model/usuarios/user.model');


const generateDBTables = async ()=>{
  try {
    await UserModel.sync()
    await CategoryModel.sync()
    await DeviceModel.sync()
    await PetitionModel.sync()
    await PetitionStateModel.sync()
    await DevicePetitionModel.sync()
    
  } catch (error) {
    console.log('error', error)
  }
}

module.exports = generateDBTables