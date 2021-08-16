import { Component } from "react"
import axios from 'axios';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../../App.css"
toast.configure()
class Mailbox extends Component{
    render(){
        return(
        <div>
            <iframe src="https://www.w3schools.com" title="W3Schools Free Online Web Tutorials"></iframe>
        </div>
        )
    }
}
export default Mailbox