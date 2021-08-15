import { Component } from "react"
import axios from 'axios';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './Header'
import "../../App.css"
toast.configure()

class AddUser extends Component{
    constructor(props){
        super(props)
        this.state={
            roomno:"",
            password:"",
            fullname:"",
            hidden:true,
            userID:localStorage.getItem('userID'),

            config : {
              headers : {'authorization': `Bearer ${localStorage.getItem('token')}`}
          }
        }
    this.toggleShow=this.toggleShow.bind(this)   
    }

    inputHandler =(e)=>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    toggleShow(){
        this.setState({
            hidden: !this.state.hidden
        })
    }
  
    register=(e)=>{
        e.preventDefault()
          if(this.state.email!==""&&this.state.fullname!==""&&this.state.password!=="")
          {
        axios.post("http://localhost:90/register", this.state,this.state.config)
        .then((response)=>{
            console.log(response);
            toast.success("Added Successfully")
            this.setState({
                roomno:"",
                password:"",
                fullname:"",
            })
        })        
        .catch((err)=>{
            console.log(err)
           toast.error(`${err.response.data.message}`,{autoClose:3000})
        })
    }
    else{
        toast.error("Input field is empty")
    }
    } 
    
    render(){   
        return( 
           <div>
            <div className="adduser">   
                        <form className="loginform">
                        <div class="form-group">
                                <input type="text" value={this.state.fullname} required autoComplete="off" className="form-control logintext"  onChange={this.inputHandler} placeholder="Fullname" name="fullname" />
                                </div>
                           
                            <div class="form-group">
                                <input type="email" value={this.state.roomno} required autoComplete="off" className="form-control logintext"  onChange={this.inputHandler} placeholder="Room No" name="roomno" />
                                </div>
                            
                                <div class="form-group">
                                <input type={this.state.hidden ? "password":"text"} value={this.state.password} autoComplete="off" className="form-control logintext" id="myInput" onChange={this.inputHandler} placeholder="Password" name="password" required/>   
                            </div>
                            
                            <div className="check">
                                <input type="checkbox"  onClick={this.toggleShow}/>
                                <p>Show Password</p>
                            </div>
                            <button type="submit" onClick={this.register} className="btnlogin">Add</button>
                        </form>
                    </div>
                </div>
         
        )
    }
}

export default AddUser