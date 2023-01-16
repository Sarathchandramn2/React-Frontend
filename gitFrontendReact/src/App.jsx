
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navigation from './components/Navigation';
import Home from './components/Home';
import{BrowserRouter,Route,Routes}from 'react-router-dom'
import Movies from './components/Movies';
import Manage from './components/Manage';
import Login from './components/Login'
import Register from './components/Register';
function App() {
    return (
        <>
        <BrowserRouter>
        
        <Routes>
           <Route exact path='/' element = {<Login/>}/>
            
           <Route exact path='/register' element = {<Register/>}/>
            <Route exact path='/home' element ={<Home/>}/>
            <Route exact path ='/movies' element ={<Movies/>}/>
            <Route exact path ='/manage' element ={<Manage/>}/>
        </Routes>
        
        
        </BrowserRouter>
        </>
        
    )
}


export default App;

