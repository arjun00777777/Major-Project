const asyncHandler = require("express-async-handler");
const MerchantDetails = require("../Models/merchantDetailsModels");


const merchantDetails = asyncHandler( async(req,res)=>{
    const {username,email,img,limit,number,card} = req.body;

    if(!username || !email || !img || !limit || !number || !card){
        res.status(404);
        throw new Error("All Fields Are Not Empty")
    }

    const findMerchantDetails = await MerchantDetails.findOne({email});

    if(findMerchantDetails){
        res.status(400);
        throw new Error("Merchant Already Exists")
    }
    else{
        const createNewMerchant = await MerchantDetails.create({
            username,
            email,
            img,
            limit,
            number,
            card
        })

        res.status(201).send("Merchant Created");
        console.log(createNewMerchant);
    }
})

const allMerchantDetails = asyncHandler( async(req,res) =>{

    const findAllMerchants = await MerchantDetails.find({})
    res.status(201).send(findAllMerchants);
    
})


module.exports = {merchantDetails,allMerchantDetails};