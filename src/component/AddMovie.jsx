import React, { useState } from 'react'
import Modal from 'react-modal';
import MovieRating from './MovieRating';
import {Form} from 'react-bootstrap';
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
Modal.setAppElement('#root');


const AddMovie = ({add}) => {
    const [modalIsOpen, setIsOpen] = React.useState(false);
const [title, setTitle] = useState('')
const [Rating, setRating] = useState(1)
const [img, setImg] = useState('')
    function openModal() {
      setIsOpen(true);
    }
    function closeModal() {
      setIsOpen(false);
    }
    const handleRating = (x) => setRating(x)
    const handleSubmit = (e) => {
        e.preventDefault();
        const newmovies = {
            id: Math.random(),
            title,
            img,
            Rating,
        }
add(newmovies)
closeModal()
    }
    return (
        <div>
               <button className="btn add-movie-btn" onClick={openModal}>Add movie</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >

<form onSubmit={handleSubmit} > 
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>title</Form.Label>
    <Form.Control type="text" placeholder="Title" value={title} onChange={(e)=> setTitle(e.target.value)} required />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>img</Form.Label>
    <Form.Control type="url" placeholder="image" value={img} onChange={(e)=> setImg(e.target.value)} required />
  </Form.Group>
  <MovieRating handleRating={handleRating} rat={Rating} required />
  <button variant="primary" type="Submit">
    Confirm
  </button>
  <button variant="primary" >
    Cancel
  </button>
</form>
      </Modal>
        </div>
    )
}

export default AddMovie
