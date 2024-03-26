/* eslint-disable eqeqeq */
export const storage = {
    value:[],
    set:(movie)=>{
        const info = {
            id:movie.id||'',
            tittle:movie.tittle || '',
            poster_path:movie.poster_path || '',
            overview: movie.overview || '',
            release_date:movie.release_date || '',
            vote_count:movie.vote_count || '',
            saved:true,
        };
        const index = storage.value.findIndex(v => v.id == movie.id);
        if (index === -1) {
            storage.value.push(info);
        }
    },
    get:() => storage.value,
    getById: (id) => {
        const movie = storage.value.find(v => v.id == id);
        return movie;
    },
    remove:(id)=> {
      const index = storage.value.findIndex(v => v.id == id);
      if (index !== -1) {
        storage.value.splice(index, 1);
      }
      return storage.get();
    }
    
}
  