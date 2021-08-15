import { Component } from "react";
import {Route} from 'react-router-dom'
import AddUser from "./Admin/AddUser";
import Dashboard from "./Admin/Dashboard";
import UserDetail from "./Admin/UserDetail";




function Container(){
    return(
        <div>
            
            <Route path="/addUser" component={AddUser}/>
            <Route path="/dashboard" component={Dashboard}/>
            <Route path="/user" component={UserDetail}/>

        </div>
        )
    }
    
export default Container