import react from "react";
import {Button ,Modal,Row, Col , Form} from 'react-bootstrap'
import { addMovie } from "../services/MovieService";


const AddMovieModal =(props) =>{

    const handleSubmit =(e)=>{
        e.preventDefault();
        addMovie(e.target)
        .then((result)=>
        {
            alert(result);
            props.setUpdated(true)

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
            <Modal.Title id="contained-modal-title-vcenter">Fill in Movie Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
                    <Row>
                        <Col sm={6}>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group controlId="MovieName">
                                    <Form.Label>Movie Name</Form.Label>
                                    <Form.Control type="text" name="MovieName" required placeholder="" />
                            </Form.Group>
                            <Form.Group controlId="MovieGenre">
                                    <Form.Label>Movie Genre</Form.Label>
                                    <Form.Control type="text" name="MovieGenre" required placeholder="" />
                            </Form.Group>
                            <Form.Group controlId="Director">
                                    <Form.Label>Director</Form.Label>
                                    <Form.Control type="text" name="Director" required placeholder="" />
                            </Form.Group>
                            <Form.Group controlId="Language">
                                    <Form.Label>Language</Form.Label>
                                    <Form.Control type="text" name="Language" required placeholder="" />
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
export default AddMovieModal;