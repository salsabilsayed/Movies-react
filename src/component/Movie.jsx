import React from 'react';
import './Movie.css';

const Movie = ({title,poster,year}) => {
    return (
        <div className='position-relative mb-4 overflow-hidden main-movie-info'>
            <img src={poster} className='w-100' alt={title}/>
            <div className='movie-info'>
                <h4>{title}</h4>
                <p className='mb-0'>{year}</p>
            </div>
        </div>
    )
}

export default Movie;
