import React, { useState, useContext } from 'react';
import { Card, Button, Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import RatingBar from './RatingBar';
import AppContext from '../data/AppContext';

const ProfileCard = ({ id }) => {
  const context = useContext(AppContext);
  const items = context.items;
  const dispatch = context.dispatch;

  const item = items.find(item => item.id === id);
  const { name, birth, eyes, ratingStars } = item;
  
  const [rate, setRate] = useState(ratingStars);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const handleRateChange = (newRate) => {
    setRate(newRate);
    dispatch({ type: 'rate', payload: { id, rating: newRate } });
    handleClose();
  };

  const handleEdit = () => {
    navigate(`/lab4/edit/${id}`);
  };

  return (
    <>
      <Card style={{ width: '22rem' }} className="border mb-3 p-3 ms-3">
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            <strong>Data urodzenia:</strong> {birth}<br />
            <strong>Kolor oczu:</strong> {eyes}<br />
            <RatingBar rating={rate} />
          </Card.Text>
        </Card.Body>
        <Card.Footer className='d-flex justify-content-between'>
          <Button variant="primary" onClick={handleEdit}>Edit</Button>
          <Button variant="danger" onClick={() => dispatch({ type: 'delete', payload: { id } })}>Delete</Button>
          <Button variant="success" onClick={handleShow}>Rate</Button>
        </Card.Footer>
      </Card>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Rate {name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="d-flex justify-content-center">
            {Array.from({ length: 10 }, (_, i) => (
              <span
                key={i}
                style={{ cursor: 'pointer', fontSize: '2rem', color: i < rate ? 'gold' : 'gray' }}
                onClick={() => handleRateChange(i + 1)}
              >
                {i < rate ? '★' : '☆'}
              </span>
            ))}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ProfileCard;