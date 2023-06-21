const express = require('express');
const apiRoutes = require('./routes');
const {Sequelize,connectToDB} = require('./db');
//const body_parser = require('body-parser');




// creating our server 
const app = express();

// this will enable the display of result on our body
      // app.use = express.json();

     app.use(express.json()); //

    //app.use(body_parser);
// url routing to work use the api in your url
    app.use('/api', apiRoutes);

  // app.get('/',(req,res) => {
  //   return res.json(" hello");
  // })






  

const PORT = 4900;  
console.log("heheh");
app.listen(PORT, async() => {
  console.log(`server running at http://localhost:${PORT}`);
    await connectToDB();
})

