const express = require('express');
const morgan = require('morgan')
const path = require('path');
const cors = require('cors');

const Sequelize = require('./database/index')




class App {
  app = express();
  PORT = process.env.PORT || 3004

  middleware(){

    // * iniciar middleware para preparar la aplicación y su funcionamiento
    
    this.app.use(express.json()); // * toma la información que se envía en el body
                                  // * y los transforma en un tipo de dato json para funcionar
                                  // * con la aplicación
                                  
    this.app.use(express.urlencoded({ extended: true })); // * hace que las informaciones que se envían
                                                          // * sean de un tipo de dato en particular
                                                          
    this.app.use(express.static(path.join(__dirname,'public'))); // * hace que el archivo public en el 
                                                      // * inicio del proyecto sea visible cuando se intente acceder
    
    this.app.use(morgan('dev')); // * crear un log en la consola, por cada request que se envia
    
    this.app.use(cors("*")) // * permite que se manden request al backend desde una misma computadora

  }

  async initRoutes (){

    // * 404 error
    // * global route for all the 404 request
    this.app.use(function(req,res){
      res.status(404).json({ error: 'nop baby' });
    });

    // * 500 error
    // * para cada error 500, quiere decir, que la aplicacion deja de funcionar, se maneja aqui
    this.app.use(function(error, req, res, next) {
      console.log(`error`, error)
      res.status(500).send('500: Internal Server Error');
    });
  }

  async init(){
  
    try {

      this.middleware();
      this.initRoutes();
      
      this.app.listen(this.PORT)
      console.log(`Server running on port ${this.PORT}`)
    } catch (error) {
      console.log(error)
    }
  }
}


module.exports = App