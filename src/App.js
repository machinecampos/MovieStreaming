import { useState, useEffect } from 'react';
import MovieCard from './MovieCard';
import './App.css';
import SearchIcon from './search.svg';

const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=eefd0977';

const movie1 = {
    "Title": "Amazing Spiderman Syndrome",
    "Year": "2012",
    "imdbID": "tt2586634",
    "Type": "movie",
    "Poster": "N/A"
}

const App = () => {
    const [movies, setMovies] = useState();
    
    const searchMovies = async (title) => {
        const response = await fetch('${API_URL}&s=${title}');
        const data = await response.json();

        console.log(data.Search);
    } 

    useEffect(() => {
        searchMovies('Spiderman');
    }, []);
    
    return (
        <div className="app">
            <h1>Movieland</h1>
            <div className="search">
                <input 
                  placeholder="Search for movies"
                  value="Superman"
                  onChange={() => {}}
                />
                <img
                  src={SearchIcon}
                  alt="search"
                  onClick={() =>{}}
                />
            </div>
            <div className="container">
                <MovieCard movie1={movie1} />;
            </div>
        </div>
    );
}

export default App;