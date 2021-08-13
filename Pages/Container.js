import { Component } from "react";
import {Route} from 'react-router-dom'
import AdminLogin from "./Admin/AdminLogin";

function Container(){
    return(
        <div>
            <Route path="/adminLogin" component={AdminLogin}/> 
        </div>
        )
    }
    
export default Container