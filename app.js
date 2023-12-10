const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const socialMediaRoutes = require('./routes/socialMediaRoutes');
const sequelize = require('./config/database');
const axios = require('axios')


app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', socialMediaRoutes);


sequelize
    // .sync({ force: true })
    .sync()
    .then(result => {
      app.listen(3000, () => {
        console.log(`Server is running on port 3000`)
      });
    })
    .catch(err => console.log(err));


