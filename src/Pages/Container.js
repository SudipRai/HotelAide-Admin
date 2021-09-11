import { Component } from "react";
import {Route} from 'react-router-dom'
import AddUser from "./Admin/AddUser";
import Checkout from "./Admin/Checkout";
import Dashboard from "./Admin/Dashboard";
import Feedback from "./Admin/Feedback";
import Food from "./Admin/Food";
import Mailbox from "./Admin/Mailbox";
import Service from "./Admin/Service";
import UserDetail from "./Admin/UserDetail";
import PrivateRoute from "./PrivateRoute";




function Container(){
    return(
        <div>
            
            <PrivateRoute exact path="/addUser" component={AddUser}/> 
            <PrivateRoute exact path="/dashboard" component={Dashboard}/> 
            <PrivateRoute exact path="/user" component={UserDetail}/> 
            <PrivateRoute exact path="/mail" component={Mailbox}/> 
            <PrivateRoute exact path="/feedback" component={Feedback}/> 
            <PrivateRoute exact path="/food" component={Food}/> 
            <PrivateRoute exact path="/service" component={Service}/>
            <PrivateRoute exact path="/checkout" component={Checkout}/> 

        </div>
        )
    }
    
export default Container