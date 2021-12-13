import React from 'react'
import MovieRating from './MovieRating'


const movieCard = ({film}) => {
    return (
        <div className="movie-card" >
            <img src={film.img} alt="" />
            <h1>{film.title}</h1>
       
       <MovieRating rat={film.Rating}/>
        </div>
    )
}

export default movieCard
