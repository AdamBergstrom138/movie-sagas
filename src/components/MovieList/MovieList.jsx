import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'

function MovieList() {

    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    const handleClick = (data) => {
        // event.preventDefault();
        
        console.log('clicked poster', data.id);
        let movieId = data.id;
        dispatch({
            type: 'FETCH_MOVIEDETAILS',
            payload: movieId
        })

        // dispatch({
        //     type: 'SET_FEELING', 
        //     payload: feeling
        // })
        // history.push('/understanding')
}
// const handleFavorite = (data) => {
//     setIsFavorited(!isFavorited);
//     console.log(data.url);
//     let newFavorite = {
//       url : data.url
//     }
//     //  Dispatch an action to add/remove the gif from the favorites list
//     dispatch({
//       type: "SAGA/ADD_FAVORITES",
//       payload: newFavorite
//     });
//   };

    return (
        <main>
            <h1>MovieList</h1>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <div key={movie.id} >
                            <h3>{movie.title}</h3>
                            <img onClick={() => handleClick(movie)} src={movie.poster} alt={movie.title}/>

                        </div>
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;