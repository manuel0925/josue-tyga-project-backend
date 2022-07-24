const bcrypt = require('bcrypt');
const sequelize = require('../../database/index').bootstrap();

const UserDefinition = require('./user.definition');
const globalSqlOptions = require('../global-sequelize-options');


const UserModel = sequelize.define('users',UserDefinition,{ 
  hooks:{
    beforeCreate: async (user,options)=>{
      try {
        const hashedPassword = await bcrypt.hash(user.user_password,10);
        user.user_password = hashedPassword;
      } catch (error) {
        console.log(error)
      }
    },
    beforeUpdate: async (user,options)=>{
      try {
        const hashedPassword = await bcrypt.hash(user.user_password,10);
        user.user_password = hashedPassword;
      } catch (error) {
        console.log(error)
      }
    }
  },
  ...globalSqlOptions
})


module.exports = UserModel