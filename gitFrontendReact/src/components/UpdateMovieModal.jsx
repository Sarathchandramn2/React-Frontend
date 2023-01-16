import react, {useState} from "react";
import {Button ,Modal,Row, Col , Form} from 'react-bootstrap'
import { updateMovie } from "../services/MovieService";



const UpdateMovieModal =(props) =>{
    let [updatedmovieName, setUpdatedMovieName] = useState(undefined);
    let [updatedmovieGenre, setUpdatedMovieGenre] = useState(undefined);
    let [updatedDirector, setUpdatedDirector] = useState(undefined);
    let [updatedLanguage, setUpdatedLanguage] = useState(undefined);
    const handleSubmits =(e)=>{
        e.preventDefault();
        console.log(props, e)
        updateMovie({
            MovieName: updatedmovieName,
            MovieGenre:updatedmovieGenre,
            Director:updatedDirector,
            Language:updatedLanguage


        },props.movie.movieId)
        .then((result)=>
        {
            alert(result);
            props.setUpdated(true)
            console.log(result)
            //props.getMovie()

        },
        (error)=>{
            alert("Failed to Add Movie")
        }
        )

    }
    return (
        <div className="container">
            <Modal 
            {...props}
            size="lg"
            aria_labelledby="contained-modal-title-vcenter"
            centered>
            <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">Update Movie Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
                    <Row>
                        <Col sm={6}>
                            <Form onSubmit={handleSubmits}>
                                <Form.Group controlId="MovieName">
                                    <Form.Label>Movie Name</Form.Label>
                                    <Form.Control type="text" name="MovieName" required onChange={(e) => setUpdatedMovieName(e.target.value)} value={updatedmovieName}
                                    defaultValue={props.movie.MovieName} placeholder="" />
                            </Form.Group>
                            <Form.Group controlId="MovieGenre">
                                    <Form.Label>Movie Genre</Form.Label>
                                    <Form.Control type="text" name="MovieGenre" required 
                                      onChange={(e) => setUpdatedMovieGenre(e.target.value)} value={updatedmovieGenre} placeholder="" />
                            </Form.Group>
                            <Form.Group controlId="Director">
                                    <Form.Label>Director</Form.Label>
                                    <Form.Control type="text" name="Director" required 
                                    onChange={(e) => setUpdatedDirector(e.target.value)} value={updatedDirector} placeholder="" />
                            </Form.Group>
                            <Form.Group controlId="Language">
                                    <Form.Label>Language</Form.Label>
                                    <Form.Control type="text" name="Language" required
                                  onChange={(e) => setUpdatedLanguage(e.target.value)} value={updatedLanguage}  placeholder="" />
                            </Form.Group>
                            <Form.Group>
                                <p></p>
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form.Group>
                            </Form>
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer></Modal.Footer>
        

        
      </Modal>

        
        </div>
    );
};
export default UpdateMovieModal;