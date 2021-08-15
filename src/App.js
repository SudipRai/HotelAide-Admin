import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {Route} from 'react-router-dom'
import {BrowserRouter, Switch} from 'react-router-dom'
import Container from './Pages/Container';
import Sidebar from './Pages/Admin/Sidebar';
import AdminLogin from "./Pages/Admin/AdminLogin";
import Header from './Pages/Admin/Header';



function App() {
  return (
    <BrowserRouter>
    <Switch>
    <Route path="/adminLogin" component={AdminLogin}/>
    <div className="App">
      <Header></Header>
      <div className="body-part">
      <Sidebar></Sidebar>
      <div className="content">
      <Container></Container>
      </div>
      </div>
      
    </div>
    </Switch>
    </BrowserRouter>
    
  );
}

export default App;
