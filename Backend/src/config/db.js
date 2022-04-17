const mongoose = require("mongoose");


const connect = ()=>{

    return mongoose.connect("mongodb+srv://recidency:recidency_123@cluster0.meifd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");

}

module.exports = connect;