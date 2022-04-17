const mongoose = require("mongoose");

// flat schema;

const flatSchema = new mongoose.Schema({
    type : {type : String , required : true},
    block : {type : String , required : true},
    no : {type : String , required : true},
    manager : {type : String, ref : "user" }
    
})


// step 3 : - create a model

module.exports = mongoose.model("flat" , flatSchema);