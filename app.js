const express = require('express');
const apicontroller = require('./controller');
const {Sequelize,connectToDB} = require('./db');




// creating our server 
const app = express();

// this will enable the display of result on our body
app.use = express.json();


// url routing to work




const PORT = 4900;
app.listen(PORT, async() => {
  console.log(`server running at http://localhost:${PORT}`);
  await connectToDB();
})

