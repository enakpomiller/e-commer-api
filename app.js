const express = require('express');
const apiRoutes = require('./controller');
const {Sequelize,connectToDB} = require('./db');
const Joi = require('joi');
//const body_parser = require('body-parser');

const { response } = require('express');
const { string } = require("joi");


// creating our server
const app = express();

app.use(express.json());

    //app.use(body_parser);
// url routing to work use the api in your url
app.use('/api', apiRoutes);










const PORT = 4900;
app.listen(PORT, async() => {
  console.log(`server running at http://localhost:${PORT}`);
    await connectToDB();
})
