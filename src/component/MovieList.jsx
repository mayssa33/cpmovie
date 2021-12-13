import React, { useState } from 'react'
import MovieCard from './MovieCard.jsx'
import MovieRating from './MovieRating.jsx'
import Search from './MovieSearch.jsx'
const MovieList = ({movies}) => {
    return (
        <div>
     {movies.map(el=>
        <MovieCard film={el}/>
        )}
          </div>
           )
       
    
}

export default MovieList
