const express = require('express');
const morgan = require('morgan')
const path = require('path');
const cors = require('cors');






class App {
  app = express();
  PORT = process.env.PORT || 3004

  async init(){
  
    try {

      this.app.listen(this.PORT)
      console.log(`Server running on port ${this.PORT}`)
    } catch (error) {
      console.log(error)
    }
  }
}


module.exports = App