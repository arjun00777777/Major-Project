const asyncHandler = require("express-async-handler");
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const Merchant = require('../Models/merchantModels');

const registerMerchant = asyncHandler( async(req,res) =>{
    const {username,email,password} = req.body;

    if(!username || !email || !password){
        res.status(404);
        throw new Error("All Fileds Are NOt Empty")
    }

    const findMerchant = await Merchant.findOne({email});

    const hashPassword = await bcrypt.hash(password,10);
    if(!findMerchant){
        const createMerchant = await Merchant.create({
            username,
            email,
            password : hashPassword
        })
        res.status(201).send("Merchant Created")
        console.log(createMerchant);
    }
    else{
        res.status(404);
        throw new Error("Merchant Alredy Exists");
    }

})


const loginMerchant = asyncHandler ( async (req,res)=>{
    const {username,email,password} = req.body;

    if(!username || !email || !password){
        res.status(404);
        throw new Error("All Fileds Are NOt Empty")
    }

    const findMerchant = await Merchant.findOne({email});

    if(findMerchant && (await bcrypt.compare(password,findMerchant.password))){
        const accessToken = jwt.sign(
            {
                merchant : findMerchant
            },
            process.env.MERCHANT_TOKEN,
            {expiresIn : "1d"}
        )

        res.status(201).json({accessToken})
    }
    else{
        res.status(404);
        throw new Error("Merchant Not Found")
    }

})

module.exports ={registerMerchant, loginMerchant};