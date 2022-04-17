const express = require("express");

const router = express.Router();

const User = require("../model/User.model");


router.post("/register" , async(req,res)=>{

    try{

        let user = await User.findOne({email : req.body.email}).lean().exec();
        if(user) return res.status(400).send({message : "please enter another email"});
        user = await User.create(req.body);
        return res.status(201).send(user);
    }
    catch(e){
        return res.status(400).send(e);
    }

})

router.post("/login" , async(req,res)=>{

    try{


        console.log(req)

        let user = await User.findOne({email : req.body.email});


        if(! user) return res.send("false");

        if(user.password !== req.body.password || !user){
            res.send(false);           
        }
        else{
            res.send(user);
        }

    }
    catch(e){
        return res.send(e)
    }

} )



router.get("" , async (req,res)=>{

    try{

        const user = await User.find().lean().exec();
        return res.send(user);

    }
    catch(e){

        return res.send("cannot get the data!!");

    }

    
})

module.exports = router;