import Carousel from 'react-bootstrap/Carousel';
import mal from '../static/mal.jpg'
import ava from '../static/ava.jpg'
import aveng from '../static/aveng.jpg'
import React from 'react'
import {Navbar,Nav} from 'react-bootstrap'
import images from '../static/log.png'
import "../App.css";
import { Navigate } from 'react-router';
import {
    CDBSidebar,
    CDBSidebarHeader,
    CDBSidebarMenuItem,
    CDBSidebarContent,
    CDBSidebarMenu,
    CDBSidebarSubMenu,
    CDBSidebarFooter,
  } from 'cdbreact';
import { NavLink } from 'react-router-dom';



const Home=() =>{


  function Logout(){
    localStorage.clear()
    Navigate('/')
  }
  return (
    <>
    <div >
            <Navbar bg="dark" variant="dark" expand ="lg">
        
          <Navbar.Brand className="app-logo" href="#home">
            <img
              alt=""
              src={images}
              width="30"
              height="50"
              className="d-inline-block align-center"
            />{' '}
            Movie Mangement application
          </Navbar.Brand>
    
      </Navbar>
      <div className='sidebar'>
      <CDBSidebar textColor='#333' backgroundColor="f0f0f0">
        <CDBSidebarHeader prefix={<i className="fa fa-bars" />}>Navigation</CDBSidebarHeader>
        <CDBSidebarContent>
          <CDBSidebarMenu>
              <NavLink exact to='/'activateClassName="activeClicked">
                    <CDBSidebarMenuItem icon="home">Home</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to='/movies'activeClassName="activeClicked"  >
                    <CDBSidebarMenuItem icon="list">MovieList</CDBSidebarMenuItem>
            </NavLink>
         
            <NavLink exact to='/manage'activeClassName="activeClicked">
            <CDBSidebarMenuItem icon="user" iconType="solid">ManageMovie
            </CDBSidebarMenuItem>
            <NavLink exact to='/'activeClassName="activeClicked"  >
                    <CDBSidebarMenuItem icon="user"onClick={Logout}>logout</CDBSidebarMenuItem>
            </NavLink>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>

      </CDBSidebar>
      </div>
        </div>

    
      <div className="row">
    <Carousel variant="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          height="100%"
          src={mal}
          alt="First slide"
        />
    
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ava}
          alt="Second slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={aveng}
          alt="Third slide"
        />
        
      </Carousel.Item>
    </Carousel>
    </div> </>
  );
}

export default Home;