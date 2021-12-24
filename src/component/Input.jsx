import React from "react";
import { Form } from 'react-bootstrap';
import Error from './Error';

import './Input.css'

const Input = ({setMovieName,movieName,error,setError}) => {

  const searchHandler = (e)=>{
    if(!e.target.value){
      setError('Please enter a movie name!')
    }
    setMovieName(e.target.value)
  }

  return (
    <div className="inputContainer mx-auto my-4">
      <Form>
        <Form.Group className="mb-3">
          <Form.Control type="text" 
          placeholder="Enter movie..." 
          value={movieName}
          onChange={searchHandler}
          />
        </Form.Group>
      </Form>

      {error && <Error>{error}</Error>}
    </div>
  );
};

export default Input;
