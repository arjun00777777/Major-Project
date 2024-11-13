const mongoose = require('mongoose');


const merchantDetailsSchema = new mongoose.Schema({
    username : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    img : {
        type : String,
        required : true
    },
    limit : {
        type : String,
        required : true
    },
    number : {
        type : String,
        required : true
    },
    card : {
        type : String,
        required : true
    }
},
{
    timestamps : true
}
)

module.exports = mongoose.model("MerchantDetails",merchantDetailsSchema);