const express = require('express');
const app = express();
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 5001
const bodyParser = require("body-parser");
const cors = require("cors");
const connectDB = require('./Config/dbConnection');

connectDB();

app.use(cors())
app.use(bodyParser.urlencoded({extended : true}));
app.use(express.json());

app.use("/api/user",require("./Router/userRouters"));
app.use("/api/merchant",require("./Router/merchantRouter"));
app.use("/api/admin",require("./Router/adminRouters"));

app.use("/api/merchants",require("./Router/merchantDetailsRouters"));
app.use("/api/users",require("./Router/userDetailsRouters"));

app.use("/api/send",require("./Router/mailRouter"));

app.use("/api/email",require("./Router/saveRouters"))

app.listen(PORT , ()=>{
    console.log(`Server Running In The PORT Of ${PORT}`)
})