import {HashRouter as Router, Route} from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList'
import Details from '../Details/Details'
// material UI
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function App() {
  return (
    <>
    <div className="App">
    <Box 
      m="auto"
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{
      width: 400,
      height: 150,
      backgroundColor: 'primary.dark'
      }}>
        <Typography 
        variant="h3" 
        gutterBottom
        align='center'
        >
        The Movies Saga!
        </Typography>
    </Box>
      {/* <h1>The Movies Saga!</h1> */}
      <Router>        
        <Route path="/" exact>
          <MovieList />
        </Route>
        
        {/* Details page */}
        <Route path="/details/:id" exact>
          <Details />
        </Route>
        {/* Add Movie page */}
      </Router>
    </div>
    </>
  );
}


export default App;
