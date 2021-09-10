import { Component } from "react"
import axios from 'axios';
import {toast} from 'react-toastify';
import Table from 'react-bootstrap/Table'
import 'react-toastify/dist/ReactToastify.css';
import "../../App.css"
toast.configure()
class Food extends Component{
    state = {
        messages:[],  
        userID:localStorage.getItem('userID'),
 
        config : {
          headers : {'authorization': `Bearer ${localStorage.getItem('token')}`}
      }  
 }
 

 
 componentDidMount(){
     axios.get("http://localhost:90/food",this.state.config)
     .then((response)=>{
         console.log(response)
         this.setState({
             messages : response.data.data,
         })
     })
     .catch((err)=>{
         console.log(err.response)
     })
 }
 
 handlePageClick = (event) => {
     let page = event.selected;
     this.setState({page})
   }
 
 
 renderTableData() {
     const {messages} = this.state;
     return messages.map((message) => {
        return (
           <tr key={message._id}>
             <td>{message.roomno}</td>
             <td>{message.foodname}</td>
             <td>{message.number}</td>
         
           </tr>
        )
     })}
     render(){ 
         const {pages} = this.state;
         return( 
             <div>                      
                 <br></br>
                 <Table responsive id='students'>
                   <tbody>
                     <tr>
                       <th>Room No</th>
                       <th>Food Name</th>
                       <th>Quantity</th>
  
                     </tr>
                     
                   
                         {this.renderTableData()} 
                    
                     
                     
     
                   </tbody>
                 </Table>
          </div>                                     
         )}
}
export default Food