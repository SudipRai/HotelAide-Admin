import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {Route} from 'react-router-dom'
import {BrowserRouter} from 'react-router-dom'
import Container from './Pages/Container';
import Sidebar from './Pages/Admin/Sidebar';
import AdminLogin from "./Pages/Admin/AdminLogin";
import Header from './Pages/Admin/Header';



function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header></Header>
      <Sidebar></Sidebar>
      <Container></Container>
    </div>
    </BrowserRouter>
  );
}

export default App;
