import { useEffect, useState } from 'react';
import './App.css';
import MovieCard from './MovieCard';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import Profile from './components/User';

function App() {
  const API_URL = "https://api.themoviedb.org/3/movie/popular?api_key=7b32dff98f1e3311096e39f0874f2a4d";

   const SEARCH_API = "https://api.themoviedb.org/3/search/movie?api_key=7b32dff98f1e3311096e39f0874f2a4d&query="


  const [movies, setMovies] = useState([])
  const [term, setTerm] = useState('')

  useEffect(() => {
    fetch(API_URL)
    .then(res => res.json())
    .then(data => setMovies(data.results))
  },[])

  console.log(movies)

  const handleSearch = (e) =>{ 
    e.preventDefault()

    fetch(SEARCH_API + term)
    .then(res => res.json())
    .then(data => setMovies(data.results))
  }

  return (
  
    <div className="App">
      <div className='login/logout'>
        <LoginButton />
        <LogoutButton />
        <Profile />
      </div>
      
      
      <div className='search_nav'>
        <div className='title'>
          <h1>Movies</h1>
        </div>

        <div className='search_box'>
          <form onSubmit={handleSearch}>
            <input onChange={(e) => setTerm(e.target.value) }/>
            <button>Search</button>

          </form>
        </div>
      </div>

      <div className='movies'>
        {movies.map((movie) => 
           <MovieCard {...movie} />
        )}

      </div>

    </div>
  );
}

export default App;
