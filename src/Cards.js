import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {useNavigate} from "react-router-dom";
import "./Card.css";

const Cards = (props) => {
  const navigate=useNavigate();
    return(
        <Card style={{ width: '18rem',margin:"45px",border:"2px solid black" ,boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px" }} className='card'>
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <button  onClick={e=>navigate(`/edit?url=${props.img}`)} variant="primary"  className="btn" >Edit</button>
      </Card.Body>
    </Card>
    )
}
export default Cards;

