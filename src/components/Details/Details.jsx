import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';


function Details() {

    const dispatch = useDispatch();
    const history = useHistory();
    const movies = useSelector(store => store.movies);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    const handleClick = (event) => {

        history.push('/')
}

    return (
        <main>
            <h1>Details</h1>
            <section className="Details">
                <button onClick={handleClick}>Back</button>
            </section>
        </main>

    );
}

export default Details;