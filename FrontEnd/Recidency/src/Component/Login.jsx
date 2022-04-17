import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import axios from "axios";
import {useNavigate} from "react-router-dom";

import {login} from "../Redux/action"
import{ useDispatch , useSelector } from "react-redux"



export const Login = ()=>{

    const user = useSelector((store)=> store.user);

    const navigate = useNavigate();

    const dispatch = useDispatch();


    const [Data , setData] = useState({
        email : "",
        password : ""
    })


    const handleChange = (e)=>{

        const {id,value} = e.target;

        setData({
            ...Data,
            [id] : value
        })

        
    }
    
    const handleSubmit = ()=>{
        
        axios.post("http://localhost:5000/user/login" , Data ).then(({data})=>{
            
            
            if(data === false){
                
                alert("Email Id or Password is wrong");
                
            }else{
                dispatch(login(data))
                navigate("/")
            }
            
        }).catch((e)=>{
            console.log(e);
        })
        
    }



    return <>

        <h1> Log In  </h1>

        <TextField id="email" onChange={(e)=> handleChange(e) } className='email' label="email"   variant="filled" sx={{marginTop : "50px"}} />
        <br />
        <br />
        <TextField id="password" className='password'  onChange={(e)=> handleChange(e) }  label="password" variant="filled" />
        <br />
        <br />
        <Button variant="contained" onClick={ ()=> handleSubmit() }  > Login </Button>


    
    </>
}