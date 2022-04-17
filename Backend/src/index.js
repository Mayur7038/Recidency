const express = require("express");

const connect = require("./config/db");

const cors = require("cors")

const app = express();


app.use(express.json());

app.use(cors())

const userController = require("./controller/User.controller");
const flatController = require("./controller/Flat.controller");
app.use("/user", userController);
app.use("/flat" , flatController);


app.listen(5000  , async()=>{

    try{

        await connect();
        console.log("listening to 5000");

    }
    catch(e){
        console.log(e)
    }

} )