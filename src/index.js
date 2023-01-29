import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('FETCH_MOVIES', fetchAllMovies);
    yield takeEvery('FETCH_GENRES', fetchAllGenres);
    yield takeEvery('FETCH_MOVIEDETAILS', fetchMovieDetails);

}

function* fetchAllMovies() {
    // get all movies from the DB
    try {
        const movies = yield axios.get('/api/movie');
        console.log('get all:', movies.data);
        yield put({ type: 'SET_MOVIES', payload: movies.data });

    } catch {
        console.log('get all error');
    }
        
}
function* fetchAllGenres() {
    // get all Genres from the DB
    try {
        const genres = yield axios.get('/api/genre');
        console.log('get all:', genres.data);
        yield put({ type: 'SET_GENRES', payload: genres.data });

    } catch {
        console.log('get all error');
    }
        
}
// function* updateCategory (action){
  
//     try{
//       const category = action.payload
  
//       const response = yield axios({
//         method: 'PUT',
//         url: `/api/favorite/${category}`,
//       })
//       yield put ({
//         type: 'SAGA/FETCH_CATEGORY'
//       }) 
//     }catch (error){
//         console.log('deletePlant error:', error)
//     }
//   }
    // TODO fetch single movie? id:?
function* fetchMovieDetails(action) {
    // console.log('in fetchMovieDetails', action.payload);
    try {
        const id = action.payload
  
        const movieDetails = yield axios({
          method: 'GET',
          url: `/api/movie/${id}`,
        })
        yield put ({
          type: 'SET_MOVIEDETAILS',
          payload: movieDetails.data
        }) 
        // console.log(movieDetails);
    } catch {
        console.log('get all error');
    }
        
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        default:
            return state;
    }
}
// Used to store the movie details
const movieDetails = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIEDETAILS':
            return action.payload;
        default:
            return state;
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        genres,
        movieDetails
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={storeInstance}>
        <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
