const app = require('./server');

const startApp = async ()=>{
  
  await new app().init()
  
}

startApp()