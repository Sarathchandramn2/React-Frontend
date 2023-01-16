import React, { useEffect, useState} from 'react'
import {Table} from 'react-bootstrap'
import { getMovie } from '../services/MovieService'
import"../App.css";
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



const Movies =()=>{
    const [movies,setMovies] =useState([]);

    useEffect(() => {
        let mounted =true;
        getMovie()
            .then(data => {
                
                if (mounted){
                    setMovies(data)
                }
                console.log(data)

            });
            return () => mounted =false;

    },[]);
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
              <NavLink exact to='/home'activateClassName="activeClicked">
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

        <div className="row side-row">
            
    <Table striped bordered hover>
      <thead>
        <tr>
          <td>Id</td>
          
          <tr >Movie Name</tr>
          <th>Movie Genre</th>
          <th>Director</th>
          <th>Language</th>
        </tr>
      </thead>
      <tbody>
          {movies?.map((mov) =>

             <tr key={mov.movieId}>
            <td>{mov.movieId} </td>
            <td>{mov.MovieName}</td>
            <td>{mov.MovieGenre}</td>
            <td>{mov.Director}</td>
            <td>{mov.Language}</td>
            
            </tr>


          )}
       
      </tbody>
    </Table>

        </div>
        </>
    )
    

}

export default Movies