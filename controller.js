const express = require('express');
const router = express.Router();
const user = require('./models');
const bcrypt = require('bcrypt');

const {validatecreateuser} = require('./validator');




router.post("/createuser",async (req,res) =>{
  try{

    const {error,value} = validatecreateuser(req.body);
    if(error){
        return res.status(400).json({ 
        'status':false,
        'statuscode':400,
        'message':error.details[0]['message']
        })//send({ message: error.details });
    }

    const {name,country,email,userfile,verify_code,date} = req.body;
    const password = await bcrypt.hash(req.body.password,10);
    const checkuser = await user.findOne({where:{email:req.body.email}});
    if(checkuser){
       return res.status(200).json({message:"" +checkuser.name+ "Already Exist With  This Email"});
     }else{
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
      }
  }catch(error){
   console.log({message:error});
  }



 })

 router.post('/createuser',(req,res) => {
    return res.json({message:" display all users "});
  })











module.exports = router;
