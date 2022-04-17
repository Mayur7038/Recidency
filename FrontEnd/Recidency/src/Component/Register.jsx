import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import axios from "axios"
import {useNavigate} from "react-router-dom"


export const Register = ()=>{

    const navigate = useNavigate();

    const [Data , setData] = useState({
        name : "",
        email : "",
        password : "",
        gender : "",
        age : "",
        role : ""

    })

    const handleChange = (e)=>{

        const {id,value} = e.target;

        setData({
            ...Data,
            [id] : value
        })
    }

    const handleSubmit = ()=>{

        axios.post("http://localhost:5000/user/register" , Data).then((data)=>{

          navigate("/")

        }).catch((e)=>{
            alert("user already Exist")
        })

        
        
    }

    return <>

        <h1> Register  </h1>
        <TextField id="name" onChange={(e)=> handleChange(e) }  label="name"   variant="filled" />
        <br />
        <br />
        <TextField id="email" onChange={(e)=> handleChange(e) }  label="email"   variant="filled"  />

        
        <br />
        <h3> Gender  </h3>
        <select  id="gender" onChange={(e)=> handleChange(e) }  >

            <option value=""> </option>
            <option value="Male"> Male </option>
            <option value="Female"> Female </option>

        </select>

        <br />
        <br />
        <TextField id="password" className='password'  onChange={(e)=> handleChange(e) }  label="password" variant="filled" />
        <br />
        <br />
        <TextField id="age" onChange={(e)=> handleChange(e) }  label="age"   variant="filled"  />
        <h3> Role </h3>
        <select  id="role" onChange={(e)=> handleChange(e) }  >

            <option value=""> </option>
            <option value="manager"> Manager </option>
            <option value="resident"> Resident </option>

        </select>

        <br />
        <br />


        <Button variant="contained" onClick={ ()=> handleSubmit() }  > Register </Button>

       

    </>

}