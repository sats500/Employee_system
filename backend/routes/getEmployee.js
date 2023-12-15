const express = require('express')
const router = express.Router()
let Employees=require('../schemas/Employees')


router.get('/',async(req,res)=>{
    try{
       const response = await Employees.find();
       res.json(respinse) 
    }
    catch(err){
        res.status(500).sendDate(`Error adding employee: ${err.message}`);
    }
})

module.exports = router;