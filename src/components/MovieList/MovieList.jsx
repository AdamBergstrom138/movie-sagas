import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'
import { useHistory } from 'react-router-dom';
//material ui
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function MovieList() {

    const dispatch = useDispatch();
    const history = useHistory();
    const movies = useSelector(store => store.movies);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    const handleClick = (data) => {
        // event.preventDefault();
        
        console.log('clicked poster', data.id);
        let movieId = data.id;
        // dispatch({
        //     type: 'FETCH_MOVIEDETAILS',
        //     payload: movieId
        // })

        history.push(`/details/${movieId}`)
}

    return (
        <main>
            <Box 
            m="auto"
            display="flex"
            justifyContent="center"
            alignItems="center"
            sx={{
            width: 400,
            height: 150,
            backgroundColor: 'primary.light'
            }}>
                <Typography 
                variant="h4" 
                gutterBottom
                align='center'
                >
            MovieList
            </Typography>
            </Box>
            {/* <h1>MovieList</h1> */}
            <section className="movies">
                {movies.map(movie => {
                    
                    return (
                        <div className='movieBox' key={movie.id} >
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