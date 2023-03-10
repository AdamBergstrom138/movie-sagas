import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';


function Details() {
    // hooks
    const dispatch = useDispatch();
    const history = useHistory();
    const params = useParams();
    const movieDetails = useSelector(store => store.movieDetails)

    console.log("movie details in Details:", movieDetails);
    // FETCH_MOVIEDETAILS grabs the info for one movie based on the ID we clicked on
    useEffect(() => {
        const movieId = params.id;
        console.log('movie ID', movieId);
        dispatch({ 
            type: 'FETCH_MOVIEDETAILS',
            payload: movieId
        });
    }, []);
    // back button
    const handleBackClick = () => {

        history.push('/')
}

    return (
        <main>
            <h1>Details</h1>
            <h1>{movieDetails.title}</h1>
            <div>
            {movieDetails.map((details, index) => {
                return (
                    <div className='detailsBox' key={index}>
                        <img src={details.poster}/>
                        <h3>Title: {details.title}</h3>
                        <h4>Genres: {details.genres}</h4> 
                        <h5>Description:</h5>
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