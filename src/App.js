import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  } from "react-router-dom";
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Header from 'components/organizms/Header/header'
import LatestMovies from 'components/organizms/LatestMovies/latestMovies'
import SavedMovies from 'components/organizms/SavedMovies/savedMovies';
import Movie from 'components/organizms/Movie/movie'
import './App.css';

function App() {
  return (
    <div className='App'>
      <Router>
          <Header/>
          <Routes>
            <Route path="/" element={<LatestMovies />} />
            <Route path="/saved" element={<SavedMovies />} />
            <Route path="/movie/:id" element={<TransitionGroup><CSSTransition classNames="fade" timeout={300}><Movie /></CSSTransition></TransitionGroup>} />
          </Routes>
      </Router>
    </div>
    
  );
}

export default App;
