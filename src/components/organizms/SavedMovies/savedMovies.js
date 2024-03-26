import React, { useState } from 'react';
import {storage } from 'storage'
import './likedMoviesWrapper.scss';
import Movie from 'components/molecules/Movie/movie';

const SavedMovies = () => {
  const [data,setData] = useState({value:[]});

  const removeInStorage = async(id)=>{
    const res =  await storage.remove(id);
    setData({...data,value:res});
  };

  return (
    <div>
      {storage.get().map(movie=>{
          return (
            <Movie key={movie.id} movie={movie} saveIconDisable={true} removeInStorage={(id)=>removeInStorage(id)}/>
          )
        })
      }
    </div>
  )
}

export default SavedMovies