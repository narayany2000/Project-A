import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import RegistrationForm from './components/RegistrationForm';
import NavBar from './components/NavBar';
import Admin from './components/Admin';
import ProductForm from './components/ProductForm';
import FarmerWelcome from './components/FarmerWelcome';
import updateProduct from './components/updateProduct';
import FarmerviewProduct from './components/FarmerviewProduct';
import About from './components/About';
import Customer from './components/Customer';
import HomePage from './components/HomePage';
function App() {
  return (
    <>
    <div className="App">
     
    <NavBar/>
     
      <Routes>
      <Route path='/Home' Component={HomePage}></Route>
      <Route path='/About' Component={About}></Route>
      <Route path='/Login' Component={Login}></Route>
      <Route path='/RegistrationForm' Component={RegistrationForm}></Route>
      <Route path='/Admin' Component={Admin}></Route> 
      <Route path='/Farmer' Component={ProductForm}></Route>
      <Route path='/FarmerWelcome' Component={FarmerWelcome}></Route>
      <Route path='/updateProduct/:productId'Component={updateProduct}></Route>
      <Route path='/FarmerviewProduct'Component={FarmerviewProduct}></Route>
      <Route path='/Customer' Component={Customer}></Route>
      </Routes>
     

    
    </div>
    </>
  );
}

export default App;
