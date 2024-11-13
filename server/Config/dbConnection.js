const mongoose = require("mongoose");


const connectDB = async () =>{
try {
    const connection = await mongoose.connect(process.env.DBCONNECTIONURL);
    console.log(`Host - ${connection.connection.host} , DBName - ${connection.connection.name}`)
} catch (error) {
    console.log(error);
    process.exit(1);
}
}

module.exports = connectDB;