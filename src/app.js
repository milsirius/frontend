const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mongoose = require('mongoose');

const app = express();
// connecting to bd
mongoose.connect('mongodb://jaume1:jaume1@ds155845.mlab.com:55845/cheap_2')
  .then(db => console.log('DB connected'))
  .catch(err => console.log(err));

//importing routes
const indexRoutes = require('./routes/index');
const prodsmarquesRoutes = require('./routes/prodsmarques');
const marquesRoutes = require('./routes/marques');

//settings
app.set('port',process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/static', express.static(path.join(__dirname, 'public')))
//app.use('/static', express.static('public'))


//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));

//routes
app.use('/', indexRoutes);
app.use('/', prodsmarquesRoutes);
app.use('/', marquesRoutes);


//starting the server
app.listen(app.get('port'), function(){
  console.log(`Server started on port ${app.get('port')}`);
});
