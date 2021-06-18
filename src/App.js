import React,{useEffect,useState} from 'react'

import './App.css';
import Movie from './Movie'
import MovieHeader from './MovieHeader'
import MovieFooter from './MovieFooter'


function App() {
  const [search,setSearch]=useState('');
  const [query,setQuery]=useState('Avengers');
  const [movies,setMovies]=useState([]);
  var res = [];

  const API_KEY=process.env.REACT_APP_API_KEY;

  const movieSearchQuery=`http://www.omdbapi.com/?t=${query}&apikey=${API_KEY}`;




  useEffect(()=>{
    getMovies();
  },[query])// eslint-disable-line react-hooks/exhaustive-deps

const getMovies= async ()=>{
  
  const response=await fetch(movieSearchQuery);
  const data  =await response.json();


 
              
  for(var i in data)
      res.push(data[i]);

  setMovies(res);

  console.log(res);

  
}





const updateSearch=e=>{
  setSearch(e.target.value);

};

const getSearch=e=>{
  e.preventDefault();
  setQuery(search);

  setSearch('');
}


  return (
    <div className="App">
      <MovieHeader/>

      <form onSubmit={getSearch} >
      <div className="movie-content">
            <input type="text" className="search-bar"   placeholder="Enter Search Term" value={search} onChange={updateSearch} />
            <button className="search-button" type="submit">
                Search
            </button>
          </div>
      </form>

      



      <Movie
        key={movies[16]}
        id={movies[16]}
        image={movies[13]}
        title={movies[9]}
        overview={movies[9]}


      />
 
    
      <MovieFooter/>

    </div>
  );
}

export default App;
