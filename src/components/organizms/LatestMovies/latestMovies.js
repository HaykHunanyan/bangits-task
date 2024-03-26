/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {TMDB_KEY} from 'configs/env-vars';
import useApiCall from 'hooks/useApiCall';
import './latestMoviesWrapper.scss';

const LatestMovies = () => {
    const [movies, setMovies] = useState([]);
    const [request, response] = useApiCall((data)=>fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${data.TMDB_KEY}`))

    useEffect(() => request({TMDB_KEY}), []);

    useEffect(() => {
      if(response?.results.length){
        setMovies(response.results)
      }
    }, [response]);
  
    return (
      <div >
        <h2>Latest Movies</h2>
        <div className='movie_content'>
          <ul className='movie_list'>
            {movies.map(movie => (
              <li key={movie.id}>
                <Link to={`/movie/${movie.id}`}>
                  <img src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`} alt={movie.title} />
                  <p>{movie.title}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
}

export default LatestMovies