import { useEffect, useState } from "react"
import axios  from "axios"
import{ useDispatch , useSelector } from "react-redux"
import Button from '@mui/material/Button';

export const Home = ()=>{

    const user = useSelector((store)=> store.user);

    const [Data , setData ] = useState([]);

    useEffect(()=>{

        axios.get("http://localhost:5000/flat").then(({data})=>{
            setData(data);
        })

    },[])


    let count = 1;

    const sortByPop=(c,d)=>{
       
        const arr = [...Data];

        arr.sort((a,b)=>{
            if(+a.no > +b.no) return c;
            if(+a.no < +b.no) return d;
            return 0;
        })
        setData(arr);
    }

    const check =(e)=>{
        axios.get("http://localhost:5000/flat").then(({data})=>{
            const b = data.filter((el)=>{
                return (el.type === e.target.value)
            })
            setData(b);
        })
    }
    



    return <>

        <h1> Home </h1>

        <Button  variant="contained" onClick={()=> sortByPop(1,-1) }  > Acs  </Button>

        <br />
        <br />

        <Button  variant="contained"  onClick={()=> sortByPop(-1,1)  } > Dsc  </Button>

        <br />
        <br />
        <select name="" id="" onClick={(e)=> check(e) } >
            <option value="">  </option>
            <option value="owner"> Owner </option>
            <option value="tenent"> Tenant  </option>

        </select>
        <br />
        <br/>

        <table>
            <thead>

                <tr>
                    <td> Sr.No</td>
                    <td> Type </td>
                    <td> Block </td>
                    <td> Number </td>
                    <td> Manager </td>
                   
                </tr>

            </thead>
            <tbody>


                {
                    Data.map((e)=>{


                        return <tr key={e._id}>
                            <td> {count++} </td>
                            <td> {e.type}  </td>
                            <td> {e.block} </td>
                            <td> {e.no} </td>
                            <td> {e.manager} </td>
                        </tr>

                    })
                }
            
            </tbody>
        </table>


    
    </>
}