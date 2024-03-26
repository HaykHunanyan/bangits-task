/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect,useState } from 'react';
import { useParams } from 'react-router-dom';
import { TMDB_KEY } from 'configs/env-vars';
import MovieItem from 'components/molecules/Movie/movie'
import { storage } from 'storage'
import useApiCall from 'hooks/useApiCall';
import './movieWrapper.scss'

const Movie = () => {
  let { id } = useParams();
  const [movie, setMovie] = useState(false);
  const [request, response] = useApiCall((data)=>fetch(`https://api.themoviedb.org/3/movie/${data.id}?api_key=${data.TMDB_KEY}`))
  

  useEffect(() => {
    if(id && !movie){
        const data = storage.getById(id);
        if(data) setMovie(data)
        else request({id,TMDB_KEY});
    }
  }, [id,movie]);

  useEffect(()=>{
    if(response) setMovie(response)
  },[response])

  return (
    <div>
        {movie && ( <MovieItem  movie={movie} /> )}
    </div>
  )
}

export default Movie