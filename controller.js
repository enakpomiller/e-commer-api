const express = require('express');
const router = express.Router();
const user = require('./models');
const bcrypt = require('bcrypt');
const multer = require('multer');
const fs = require('fs');
const {validatecreateuser} = require('./validator');
const crypto = require("crypto");// random numbers importation





// const randomDecimal = Math.random();
// const min = 1;
// const max = 100000;
// const randomInt = Math.floor(Math.random() * (max - min + 1)) + min;


// Start file upload using multer
    const storage = multer.diskStorage({
      destination: (req, file, callback) => {
        const dir = "uploads/";
        !fs.existsSync(dir) && fs.mkdirSync(dir);
        callback(null, "uploads/");
      },
      filename: (req, file, callback) => {
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
        let ext = file.originalname.lastIndexOf(".");
        ext = file.originalname.substr(ext + 1);
        callback(null, `${file.fieldname}-${uniqueSuffix}.${ext}`);
      },
    });
    const upload = multer({ storage });


router.post("/createuser", upload.single("file"), async (req,res) =>{

  try{
    const {error,value} = validatecreateuser(req.body);
      if(error){
          return res.status(400).json({ 
          'status':false,
          'message':error.details[0]['message']
          })//send({ message: error.details });
      }

      const verifycode = crypto.randomInt(0, 1000000);
      const {name,country,email,date,confpassword} = req.body;
      const file = req.file;
      // if(!file){
      //   console.log(" please select file");
      //  }
   
      const hashpassword = await bcrypt.hash(req.body.password,10);
      const checkuser = await user.findOne({where:{email:req.body.email}});
      if(checkuser){
        return res.status(200).json({message:"" +checkuser.name+ " Already Exist With  This Email"});
       }else if(req.body.password!=confpassword){
          return res.status(400).json({
          message:" Password Does Not Match Confirm Password"
         });
       }else{
          const createuser =  user.build(
            {
            name,
            country,
            email,
            password:hashpassword,
            filename:file.originalname,
            verify_code:verifycode,
            date
            })
            console.log(createuser);
            await createuser.save();
            return res.status(201).json(createuser);
        }


    }catch(error){
      console.log({message:error});
    }



 })




 router.post('/createuser',(req,res) => {
    return res.json({message:" display all users "});
  })











module.exports = router;
