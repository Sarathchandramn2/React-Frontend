import react,{useEffect,useState} from "react";
import { Table } from "react-bootstrap";
import {Button,ButtonToolbar} from 'react-bootstrap'
import { getMovie ,deleteMovie} from "../services/MovieService";
import AddMovieModal from './AddMovieModal'
import UpdateMovieModal from "./UpdateMovieModal";
import {FaEdit} from 'react-icons/fa';
import { RiDeleteBin5Line } from 'react-icons/ri'
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


const Manage =()=>{
    const [movies,setMovies] =useState([]);
    const [addModalShow,setAddModalShow]=useState(false);
    const [editModalShow,setEditModalShow]=useState(false);
    const [editMovie,setEditMovie]=useState([]);

    const [isUpdated,setIsupdated]=useState(false)

    let mounted =true;
    useEffect(() => {

     
        if (movies.length && !isUpdated){
            return ;
        }


        getMovies()

      
            return () =>{
                 mounted =false;
                setIsupdated(false);
            } 

    },[isUpdated,movies]);

  
  function getMovies(){
    getMovie()
    .then(data => {
        
        if (mounted){
            setMovies(data)
        }
        console.log(data)

   

    });
  }
    

    const handleAdd = (e) =>{
        e.preventDefault();
        setAddModalShow(true);
    };

    const handleUpdate = (e ,mov) =>{
        e.preventDefault();
        setEditModalShow(true);
        setEditMovie(mov);
    };

    const handleDelete =(e ,movieId) =>{
        if (window.confirm("Are you sure")){
            e.preventDefault();
            deleteMovie(movieId)
            .then((result)=>{
                alert(result);
                setIsupdated(true);
            },
            (error)=>{
                alert("failed to delete");
            })

        }
    }



    let AddModalClose =()=> setAddModalShow(false);
    let EditModalClose =()=> setEditModalShow(false)







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
         <th>Id</th>
          <th>Movie Name</th>
          <th>Movie Genre</th>
          <th>Director</th>
          <th>Language</th>
          <th>Action</th>

        </tr>
      </thead>
      <tbody>
          {movies.map((mov) =>

            <tr  key={mov.movieId}>
            <td>{mov.movieId} </td>
            <td>{mov.MovieName}</td>
            <td>{mov.MovieGenre}</td>
            <td>{mov.Director}</td>
            <td>{mov.Language}</td>
            <td>
                <Button  className ='mr-2' variant="danger" onClick={event => handleDelete(event, mov.movieId)} ><RiDeleteBin5Line/> </Button>
                <span> &nbsp;&nbsp;</span>

                 <Button className ='mr-2' variant="info"  onClick={event => handleUpdate(event, mov)} ><FaEdit/>
                 </Button>
                
                 <UpdateMovieModal getMovie={getMovies} show={editModalShow} onHide={EditModalClose}
                 movie={editMovie} setUpdated={setIsupdated}>
                 </UpdateMovieModal>
                 

                </td>
            </tr>
            


          )}
       
      </tbody>
    </Table>
    <ButtonToolbar>
    <Button variant="success" onClick={handleAdd}>Add Movie</Button>{' '}
    <AddMovieModal show={addModalShow} onHide={AddModalClose} setUpdated={setIsupdated}>
    </AddMovieModal>
    </ButtonToolbar>

        </div>
        </>
    )
    

}

export default Manage;