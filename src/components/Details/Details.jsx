import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import './MovieList.css'


function Details() {

    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    return (
        <main>
            <h1>Details</h1>
            <section className="Details">
                
            </section>
        </main>

    );
}

export default Details;