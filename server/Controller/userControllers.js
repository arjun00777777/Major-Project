const asyncHandler = require("express-async-handler");
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const User = require('../Models/userModels');

const registerUser = asyncHandler( async(req,res) =>{
    const {username,email,password} = req.body;

    if(!username || !email || !password){
        res.status(404);
        throw new Error("All Fileds Are NOt Empty")
    }

    const findUser = await User.findOne({email});

    const hashPassword = await bcrypt.hash(password,10);
    if(!findUser){
        const createUser = await User.create({
            username,
            email,
            password : hashPassword
        })
        res.status(201).send("User Created")
        console.log(createUser);
    }
    else{
        res.status(404);
        throw new Error("User Alredy Exists");
    }

})


const loginUser = asyncHandler ( async (req,res)=>{
    const {username,email,password} = req.body;

    if(!username || !email || !password){
        res.status(404);
        throw new Error("All Fileds Are NOt Empty")
    }

    const findUser = await User.findOne({email});

    if(findUser && (await bcrypt.compare(password,findUser.password))){
        const accessToken = jwt.sign(
            {
                user : findUser
            },
            process.env.USER_TOKEN,
            {expiresIn : "1d"}
        )

        res.status(201).json({accessToken})
    }
    else{
        res.status(404);
        throw new Error("User Not Found")
    }

})

module.exports ={registerUser, loginUser};