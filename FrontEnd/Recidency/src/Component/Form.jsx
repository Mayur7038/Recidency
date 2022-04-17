import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import{ useDispatch , useSelector } from "react-redux"
import axios from "axios"


 
export const Form = ()=>{

    const user = useSelector((store)=> store.user);

    const [Data , setData] = useState({
        type : "",
        block : "",
        no : "",
        manager : "",
    })

    const handleChange = (e)=>{

        const {id,value} = e.target;

        setData({
            ...Data,
            [id] : value
        })
    }

    const handleSubmit = ()=>{

        if(user === null){
            alert("login first to create list")
        }
        else if(user.role !== "manager" ){
            alert("Only manager can create a list")
        }
        else{
            
            axios.post("http://localhost:5000/flat" , Data ).then(({data})=>{
                console.log(data);
            })
        }


        
        
    }


    return <>

        <h2> Type </h2>
        <select  id="type" onClick={(e)=> handleChange(e) } >
            <option value="">  </option>
            <option value="owner"> Owner </option>
            <option value="tenent"> Tenant  </option>

        </select>
        <br />
        <br />

        <TextField id="block" onChange={(e)=> handleChange(e) }  label="Block"   variant="filled" />
        <br />
        <br />

        <TextField id="no" onChange={(e)=> handleChange(e) }  label="Number"   variant="filled" />
        <br />
        <br />

        <TextField id="manager" onChange={(e)=> handleChange(e) }  label="Manager"   variant="filled" />
        <br />
        <br />


        <Button variant="contained" onClick={ ()=> handleSubmit() }  > Submit </Button>

    
    </>

}