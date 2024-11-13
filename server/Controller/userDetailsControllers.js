const asyncHandler = require("express-async-handler");
const UserDetails = require("../Models/userDetailsModels");


const userDetails = asyncHandler( async(req,res)=>{
    const {username,email,img,limit,number,card} = req.body;

    if(!username || !email || !img || !limit || !number || !card){
        res.status(404);
        throw new Error("All Fields Are Not Empty")
    }

    const findUserDetails = await UserDetails.findOne({email});

    if(!findUserDetails){
        const createNewUser = await UserDetails.create({
            username,
            email,
            img,
            limit,
            number,
            card
        })

        res.status(201).send("User Created");
        console.log(createNewUser);
    }
    else{
       res.status(404)
       throw new Error("User Already Exists")
    }
})

const allUserDetails = asyncHandler( async(req,res) =>{

    const findAllUsers = await UserDetails.find({})
    res.status(201).send(findAllUsers);
    
})


module.exports = {userDetails,allUserDetails};