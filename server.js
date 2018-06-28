var express = require('express'),
      path = require('path'),
      bodyParser = require('body-parser'),
      cors = require('cors'),
      mongoose = require('mongoose');
      config = require('./db');
      
      mongoose.Promise = global.Promise;
mongoose.connect(config.DB).then(
    () => {console.log('Database is connected') },
    err => { console.log('Can not connect to the database'+ err)}
  );
  coinRoutes = require('./server/controller/coinController');
  categoriesRoutes = require('./server/controller/categoriesController');
  
  console.log("coinRoutes",coinRoutes)
  const app = express();
  app.use(bodyParser.json());
  app.use(cors());
  const port = process.env.PORT || 4000;
  app.use('/coins', coinRoutes);
  app.use("/categories",categoriesRoutes)
  const server = app.listen(port, function(){
    console.log('Listening on port ' + port);
  });