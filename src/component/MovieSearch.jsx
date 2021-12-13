import React from 'react'
import MovieRating from './MovieRating';

const MovieSearch = ({rating,handleRating,text,handleChange}) => {
    return (
        <div>
            <h1>our movie app</h1>
            <div>
                <input type="text" value={text}  onChange={handleChange}  placeholder='search for movie' />
         <MovieRating rat={rating} handleRating={handleRating} />
        </div>
        
        </div> )
}

export default MovieSearch;
// value={text}  onChange={handleChange} 