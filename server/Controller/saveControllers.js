const asyncHandler = require('express-async-handler');
const Data = require('../Models/saveModels')

const secureData = asyncHandler (async (req,res)=>{
    const {to,subject,text} =req.body;

    if(!to || !subject || !text){
        res.status(404);
        throw new Error("All Fields Are Not Empty");
    }

    const createData = await Data.create({
        to,
        subject,
        text
    })

    res.status(201).send("Data Saved");
    console.log(createData)
})

const paymentsData = asyncHandler ( async (req,res)=>{
    const allTransaction = await Data.find({})
    res.status(201).send(allTransaction)
})

module.exports = {secureData,paymentsData};