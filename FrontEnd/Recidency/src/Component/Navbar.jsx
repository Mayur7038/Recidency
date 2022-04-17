import { Link } from "react-router-dom"
import{ useDispatch , useSelector } from "react-redux"
import { useState } from "react";



export const Navbar = ()=>{

    const user = useSelector((store)=> store.user);

    const [acess , setAcess] = useState(false);

    return <div id="navbar">
        <Link className="link" to="/"> Home </Link>
        <Link className="link" to="/login" > Login  </Link>
        <Link className="link" to="/register" > Register  </Link>

        <Link className="link" to="/form" > Create List </Link>
    </div>
}