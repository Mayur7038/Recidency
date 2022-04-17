import {logIn} from "./action"



export const reducer = (store , {type , payload})=>{
    
    switch (type){

        case logIn : 
        
            return { user : payload }

        default : 
            return store;    

    }
}