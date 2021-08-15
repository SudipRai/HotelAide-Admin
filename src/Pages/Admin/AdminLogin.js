import { Component } from "react"
import axios from 'axios';
class AdminLogin extends Component{
    state={
        fullname:"",
        password:"",
        fullnameError:"",
        passwordError:"",   
    }

    inputHandler =(e)=>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    login=(e)=>{
      e.preventDefault()
      this.validate()
        
        let axiosConfig = {
            withCredentials: true,
          }
        axios.post("http://localhost:90/adminLogin", this.state,axiosConfig)
        .then((response)=>{
            console.log(response);
            //setting token and userid into localstorage
            localStorage.setItem('isAdmin',"true")
            
        })        
        .catch((err)=>{
            console.log(err.response)
        })
      
    }

    validate=()=>{
      let fullnameError=""
      let passwordError=""
      if(!this.state.fullname){
        fullnameError="Field is empty"
      }

      if(!this.state.password){
        passwordError="Field is empty"
      }

      if(fullnameError || passwordError){
        this.setState({fullnameError,passwordError})
        return false;
      }
      return true;

    }
    


    handleSubmit=event=>{
        event.preventDefault()
        const isValid=this.validate()
        if(isValid){
          console.log("Validate")
        }
    }

    render(){
        return(
            <div className="col-md-6 container form">
            <h2>Admin Login</h2>
            <form>
              <div class="form-group">
                <label for="username">Full Name:</label>
                <input type="text" className="form-control" id="email"  onChange={this.inputHandler} placeholder="Enter email" name="fullname" required=""/>
                <div style={{fontSize:12, color:"red"}}>{this.state.fullnameError}</div>
              </div>
              <div class="form-group">
                <label for="pwd">Password:</label>
                <input type="text" className="form-control" id="pwd" onChange={this.inputHandler} placeholder="Enter password" name="password" required=""/>
                <div style={{fontSize:12, color:"red"}}>{this.state.passwordError}</div>
              </div>
              <button type="submit" onClick={this.login} class="btn btn-info m-2">Submit</button>
            </form>
          </div> 
        )
    }
}
export default AdminLogin