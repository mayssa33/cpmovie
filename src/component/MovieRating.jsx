import React from 'react'

const MovieRating = ({rat,handleRating}) => {
    function stars(rating){
        let star=[];
        for (let i=1;i<=5;i++){
        if(i<=rating){
        star.push( <span onClick={()=>handleRating(i)} style={{color:"gold" ,fontSize:"20px",cursor:'pointer'  }} >★</span> )
    }
    else star.push(<span onClick={()=>handleRating(i)} style={{color:"black", fontSize:"20px" ,cursor:'pointer' }} >★</span>)
}
return star
}
    
    return (
        <div>
            {stars(rat)}
        </div>
    )
}

MovieRating.defaultProps={
    handleRating:()=>{}
}

export default MovieRating
