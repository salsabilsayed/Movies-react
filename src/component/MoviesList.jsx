import React from "react";
import Movie from "./Movie";
import { Container,Row,Col } from 'react-bootstrap';

const MoviesList = ({data}) => {
  return (
    <Container>
      <div className="py-4">
        <Row>
              {data.map((movie,index) =>{
                  return <Col key={index} xs={12} sm={6} md={4} lg={3}>
                      <Movie 
                          poster={movie.Poster}
                          title={movie.Title}
                          year={movie.Year}
                      />
                  </Col>
              })}
        </Row>
      </div>
    </Container>
  );
};

export default MoviesList;
