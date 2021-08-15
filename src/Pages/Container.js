import { Component } from "react";
import {Route} from 'react-router-dom'
import AddUser from "./Admin/AddUser";




function Container(){
    return(
        <div>
            
            <Route path="/addUser" component={AddUser}/>

        </div>
        )
    }
    
export default Container