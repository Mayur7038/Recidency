import {Route ,Routes } from "react-router-dom"
import { Form } from "./Form"
import { Home } from "./Home"
import { Login } from "./Login"
import { Register } from "./Register"



export const Router = ()=>{
    return <>

        <Routes>
            <Route path="/" element={ <Home/> } ></Route>
            <Route path="/login" element={ <Login/> } ></Route>
            <Route path="/register" element={ <Register/> } ></Route>
            <Route path="/form"  element={ <Form/> } ></Route>
        </Routes>
    
    </>
}