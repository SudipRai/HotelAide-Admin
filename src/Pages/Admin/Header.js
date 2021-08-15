import { Component } from "react"
import axios from 'axios';
import {Link} from 'react-router-dom';
import "../../App.css"
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AccountCircleTwoToneIcon from '@material-ui/icons/AccountCircleTwoTone';
import AddToPhotosIcon from '@material-ui/icons/AddToPhotos';
import HotelIcon from '@material-ui/icons/Hotel';
class Header extends Component{
  //logout
  logout=()=>{
    let axiosConfig = {
      withCredentials: true,
    }
    axios.get('http://localhost:90/adminLogout',axiosConfig)
    .then((response)=>{
      console.log(response)
      localStorage.clear()
      window.location.href= '/adminLogin'
  })
  .catch((err)=>{
      console.log(err.response)
  })
  }

    render(){
        return(
            <div>
                 <nav class="navbar navbar-expand-lg navbar-dark">
                    <a class="navbar-brand" href="#"><HotelIcon style={{color:"orangered", fontSize:30, marginRight:5}}/>Hotel Aide</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                        <Link to={'/adduser'}><button id={window.location.pathname=='/adduser' ? "active" : ""} type="submit"  className="btn-dashboard"><AddToPhotosIcon/>Add Customer</button></Link> 
                        </div>
                    </div>
                    <AccountCircleTwoToneIcon style={{color:"white", margin:5}}/><h6 style={{color:"white", margin:"5px 0"}}>Admin</h6>
                    <button type="submit" onClick={this.logout} className="btn-logout"><ExitToAppIcon/>Logout </button>
                </nav>
            </div>
        )
    }
}
export default Header