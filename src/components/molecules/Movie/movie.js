import React, { useEffect } from 'react';
import Save from 'components/atoms/Save/save'
import { storage } from 'storage'
import'./movieWrapper.scss'

const Movie = ({movie,saveIconDisable,removeInStorage}) => {

    const saveMovie = (e,movie)=>{
        const attValue = e.target.getAttribute('data-custom-attribute')
        if(attValue === 'false'){
            e.target.setAttribute('data-custom-attribute', 'true');
            storage.set(movie)
        }
        else{
            e.target.setAttribute('data-custom-attribute', 'false');
            storage.remove(movie.id)
        }
    }

    useEffect(()=>{
       if(movie.saved && !saveIconDisable){
        const savedElement = document.getElementById("save_icon");
        savedElement.setAttribute('data-custom-attribute', 'true');
       }
    },[movie,saveIconDisable])

  return (
    <div key={movie.id} className='movie_item'>
        <img src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`} alt={movie.title} />
        <div>
            <p> Title: { movie.title }</p>
            <p> Overview: { movie.overview }</p>
            <p> Year: { movie.release_date }</p>
            <p> Rating: { movie.vote_count }</p>
            {saveIconDisable
                ?<div onClick={()=>removeInStorage(movie.id)} style={{cursor:'pointer',color:'#e36e6e'}}>Delete from saved data</div>
                : <Save saveMovie={(e)=>saveMovie(e,movie)}/>
            }
        </div>
    </div>
  )
}

export default Movie