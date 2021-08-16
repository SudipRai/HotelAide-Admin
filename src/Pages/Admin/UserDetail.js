import { Component} from "react";
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import Table from 'react-bootstrap/Table'
import {Link} from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import { TextField } from "@material-ui/core";

class UserDetail extends Component{
    state = {
       customers:[],
       searchTerm:"",
       perPage: 4,
       page: 0,
       pages: 0,   
       userID:localStorage.getItem('userID'),

       config : {
         headers : {'authorization': `Bearer ${localStorage.getItem('token')}`}
     }  
}

editSearchTerm=(e)=>{
this.setState({searchTerm:e.target.value})
}

componentDidMount(){
    axios.get("http://localhost:90/users",this.state.config)
    .then((response)=>{
        console.log(response)
        const customerlist=response.data.data
        this.setState({
            customers : response.data.data,
            pages: Math.floor(customerlist.length / this.state.perPage)
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

logout=()=>{
    axios.get('http://localhost:90/adminLogout')
    .then((response)=>{
      console.log(response)
      localStorage.clear()
      window.location.href= '/adminLogin'
  })
  .catch((err)=>{
      console.log(err.response)
  })  
  }

renderTableData() {
    const {page, perPage, customers} = this.state;
    let items = customers.slice(page * perPage, (page + 1) * perPage);
    if(this.state.searchTerm===""){
    return items.map((customer) => {
      console.log(customer)
       return (
          <tr key={customer._id}>
            <td>{customer._id}</td>
            <td>{customer.fullname}</td>
            <td>{customer.roomno}</td>
        
          </tr>
       )
    })}
    else{
        return customers.map((customer) => {
            console.log(customer)
            if(this.state.searchTerm!=="" && customer.fullname.toLowerCase().indexOf(this.state.searchTerm.toLowerCase())===-1){
              return null
          }
             return (
                <tr key={customer._id}>
                  <td>{customer._id}</td>
                  <td>{customer.fullname}</td>
                  <td>{customer.roomno}</td>
              
                </tr>
             )
          })
    }
 }
    render(){ 
        const {pages} = this.state;
        return( 
            <div>
              
               <TextField InputProps={{
                          endAdornment: (
                            <InputAdornment position="start">
                              <IconButton>
                              <SearchIcon />
                              </IconButton>
                            </InputAdornment>
                          )
                          }} className="searchbar" type= 'text' value={this.state.searchTerm}  onChange = {this.editSearchTerm} placeholder = 'Search'/>
                                      
                <br></br>
                <Table responsive id='students'>
                  <tbody>
                    <tr>
                      <th>ID</th>
                      <th>Full NAME</th>
                      <th>Room No</th>
 
                    </tr>
                    
                  
                        {this.renderTableData()} 
                   
                    
                    
    
                  </tbody>
                </Table>
                <ReactPaginate
                  previousLabel={'prev'}
                  nextLabel={'next'}
                  pageCount={this.pages}
                  onPageChange={this.handlePageClick}
                  containerClassName={'pagination'}
                  activeClassName={'active'}
                />
         </div>                                     
        )}
}
export default UserDetail;

