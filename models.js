const {sequelize} = require('./db');
// importing our datatype class from sequelize
const {DataTypes} = require('sequelize');

// creating table with sequelize



// creating table with sequelize
const user =  sequelize.define('tbl_user',{
    name:{
       type:DataTypes.STRING,
       validate:{
        max:150
    }
    },
    country:{
    type:DataTypes.STRING
    },
    email:{
     type:DataTypes.STRING
    },
    password:{
     type:DataTypes.STRING
    },
    userfile:{
     type:DataTypes.STRING
    },
    verify_code:{
     type:DataTypes.STRING
    },
    date:{
     type:DataTypes.STRING
    }


})

 //sequelize.sync() // to sync your tble, open a new terminal and type 'node models.js' then click enter


//  const users = sequelize.define('users_tbl',{
//     firstname:{
//     type:DataTypes.STRING,
//     validate:{
//         max:15
//     }
//     },
//     name:{
//     type:DataTypes.TEXT
//     },
//     country:{
//     type:DataTypes.BOOLEAN
//     },
//     email:{
//      type:DataType.STRING
//     },
//     password:{
//     type:DataType.STRING
//     },
//     userfile:{
//     type:DataType.STRING
//     }


// })




module.exports = user;