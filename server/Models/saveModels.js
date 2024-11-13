const mongoose = require('mongoose');


const saveSchema = new mongoose.Schema({
    to : {
        type : String,
        required :true
    },
    subject : {
        type : String,
        required :true
    },
    text : {
        type : String,
        required :true
    }
},
{
    timestamps : true
})

module.exports = mongoose.model("Data",saveSchema);