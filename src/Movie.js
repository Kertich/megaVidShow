import React from 'react';

const Movie=({id,image,title,overview})=>{
  
    return (
        
        <div className="movie-content">

            <table className="table table-stripped"> 
              
                <tbody>
                
                <tr>
                    <td>
                        <img className="Movie-Pic" src={image} alt="Missing Movie Pic" />
                    </td>
                    <td>
                        <p className="title">{title}</p>
                        <p>{overview}</p>
                    </td>
                </tr>
                
                </tbody>
                
            </table>
    </div>

    );
}

export default Movie;