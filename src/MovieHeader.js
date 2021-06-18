import React from 'react';

const MovieHeader=()=>{
    return (
        <div className="movie-content">

            <table>
                <thead  >
                    <tr className="movie-header" >
                        <td >
                            <img className="movie-header-pic" src="movies.svg" alt="Movie Logo" />
                        </td>
                        <td>
                            OMDB Movies
                        </td>
                    </tr>
                </thead>
                
            </table>
    </div>

    );
}

export default MovieHeader;