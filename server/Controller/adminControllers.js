const asyncHandler = require("express-async-handler");
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const Admin = require('../Models/adminModels');

const registerAdmin = asyncHandler( async(req,res) =>{
    const {username,email,password} = req.body;

    if(!username || !email || !password){
        res.status(404);
        throw new Error("All Fileds Are NOt Empty")
    }

    const findAdmin = await Admin.findOne({email});

    const hashPassword = await bcrypt.hash(password,10);
    if(!findAdmin){
        const createUser = await Admin.create({
            username,
            email,
            password : hashPassword
        })
        res.status(201).send("Admin Created")
        console.log(createUser);
    }
    else{
        res.status(404);
        throw new Error("Admin Alredy Exists");
    }

})


const loginAdmin = asyncHandler ( async (req,res)=>{
    const {username,email,password} = req.body;

    if(!username || !email || !password){
        res.status(404);
        throw new Error("All Fileds Are NOt Empty")
    }

    const findAdmin = await Admin.findOne({email});

    if(findAdmin && (await bcrypt.compare(password,findAdmin.password))){
        const accessToken = jwt.sign(
            {
                admin : findAdmin
            },
            process.env.ADMIN_TOKEN,
            {expiresIn : "1d"}
        )

        res.status(201).json({accessToken})
    }
    else{
        res.status(404);
        throw new Error("Admin Not Found")
    }

})

module.exports ={registerAdmin, loginAdmin};