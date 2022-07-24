const Sequelize = require('sequelize');
const DBConfig = require('../config/database.config');

class DB {
  connection = {}

  constructor(){
    this.bootstrap();
  }

  bootstrap(){
    
    // * configuracion de la base de datos para poder funcionar
    // * aqui se le asigna la informacion que tenemos en las " variables de ambiente "
    // * y de esa manera se protege la informacion del exterior 
    
    return this.connection = new Sequelize(
      DBConfig.DB_NAME, 
      DBConfig.DB_USER, 
      DBConfig.DB_PASS, {
        host: DBConfig.DB_HOST,
        dialect: 'postgres',
        logging: false, 
      },
    )
  }

  async initDatabase(){
    
    // * una vez la configuracion esta hecha, se usa la configuracion para realizar la conexion 
    // * a la base de datos y asegurar que todo funciona correctamente 
    
    try {
      await this.connection.authenticate()
      console.log(`Database connected`)
    } catch (err) {
      console.log(`Database not connected`)
      console.log(err)
    }
  }

}

module.exports = new DB()