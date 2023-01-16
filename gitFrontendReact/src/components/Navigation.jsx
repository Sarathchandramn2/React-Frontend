import React from 'react'
import {Navbar,Nav} from 'react-bootstrap'
import images from '../static/log.png'
import "../App.css";
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

  
const Navigation =()=>{
    return(
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
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>

      </CDBSidebar>
      </div>
        </div>

    

    );
};
export default Navigation;