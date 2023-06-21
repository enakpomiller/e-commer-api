const express = require('express');
const router = express.Router();
const user = require('./models');


router.post("/createuser",async (req,res) =>{
      const {name,country,email,password,userfile,verify_code,date} = req.body;
      const checkuser = await user.findOne({email:email});
      if(checkuser){
        return res.status(301).json({message:" that user already exist"});
       }else{
          try{
            const createuser =  user.build(
              {
              name,
              country,
              email,
              password,
              userfile,
              verify_code,
              date
              })
              await createuser.save();
              return res.status(201).json(createuser);
          
          }catch(error){
            console.log({message:error});
          }
      }

 
 })
   
 router.post('/createuser',(req,res) => { 
    return res.json({message:" display all users "});
  })











module.exports = router;