import { Component } from "react";
import {Route} from 'react-router-dom'
import AddUser from "./Admin/AddUser";
import Dashboard from "./Admin/Dashboard";
import Mailbox from "./Admin/Mailbox";
import UserDetail from "./Admin/UserDetail";
import PrivateRoute from "./PrivateRoute";




function Container(){
    return(
        <div>
            
            <PrivateRoute exact path="/addUser" component={AddUser}/> 
            <PrivateRoute exact path="/dashboard" component={Dashboard}/> 
            <PrivateRoute exact path="/user" component={UserDetail}/> 
            <PrivateRoute exact path="/mail" component={Mailbox}/> 

        </div>
        )
    }
    
export default Container