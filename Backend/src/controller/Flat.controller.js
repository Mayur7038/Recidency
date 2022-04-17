const express = require("express");

const Flat = require("../model/Flat.model");

const router = express.Router();



router.post("" , async(req,res)=>{

    try{
        const response = await Flat.create(req.body);
        return res.status(200).send(response);
    }
    catch(e){
        return res.send(e.message);
    }

})



router.get("" , async (req,res)=>{

    try{

        const flats = await Flat.find().lean().exec();
        return res.status(200).send(flats);

    }
    catch(e){

        return res.status(400).send(e);
    }

})


module.exports = router;