import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';


function Details() {

    const dispatch = useDispatch();
    const history = useHistory();
    const params = useParams();
    const movies = useSelector(store => store.movies);
    const movieDetails = useSelector(store => store.movieDetails)

    console.log("movie details in Details:",movieDetails);

    useEffect(() => {
        const movieId = params.id;
        console.log('movie ID', movieId);
        dispatch({ 
            type: 'FETCH_MOVIEDETAILS',
            payload: movieId
        });
    }, []);

    const handleBackClick = (event) => {

        history.push('/')
}

    return (
        <main>
            <h1>Details</h1>
            <div>
            {movieDetails.map((details, index) => {
                return (
                    <div key={index}>
                        <img src={details.poster}/>
                        <p>{details.title}</p>
                        <p>{details.genres}</p>
                        <p>{details.description}</p>

                    </div>
                )
            })}
            </div>
            
            <section className="Details">
                <button onClick={handleBackClick}>Back</button>
            </section>
        </main>

    );
}

export default Details;