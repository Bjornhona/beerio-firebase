import React, {useState, useEffect, useRef} from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import AuthContext from './lib/authContext';
import PrivateRoute from './components/PrivateRoute'
import PublicRoute from './components/PublicRoute'
import Navbar from './components/navbar/Navbar';
import NavItem from './components/navbar/nav-item/NavItem';
import Dropdown from './components/navbar/dropdown/Dropdown';
import Index from './pages/Index';
import Signup from './pages/signup/Signup';
import Login from './pages/login/Login';
import Home from './pages/home/Home';
import Beers from './pages/beers/Beers';
import Favorites from './pages/favorites/Favorites';
import Recommended from './pages/recommended/Recommended';
import NotFound from './pages/not-found/NotFound';
import Beer from './pages/beer/Beer';
import Play from './pages/play/Play';
import Breweries from './pages/breweries/Breweries';
// import Brewery from './pages/brewery/Brewery';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faBeer } from '@fortawesome/free-solid-svg-icons';

library.add(faPlayCircle, faSearch, faHeart, faStar, faThumbsUp, faUser, faBars, faBeer);

const App = () => {
  const node = useRef();
  const [openLeft, setOpenLeft] = useState(false);
  const [openRight, setOpenRight] = useState(false);

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const handleOutsideClick = (event) => {
    if (node.current.contains(event.target)) {
      return;
    }
    setOpenLeft(false);
    setOpenRight(false);
  };

  const handleClickItem = () => {
    setOpenRight(false);
    setOpenLeft(false);
  }

  return (
    <AuthContext>
      <div className="app" data-testid="app">
        <Navbar node={node}>
          <NavItem icon={faBars} isOpen={openLeft} handleOpen={() => setOpenLeft(!openLeft)}>
            <Dropdown menuLeft handleClickItem={handleClickItem} />
          </NavItem>
          <div className="header-logo-container">
            <img src="Beerio-192.png" alt="beer logo" className="logo-image" />
            <h2 className='nav-headline'>Beerio</h2>
          </div>
          <NavItem icon={faUser} isOpen={openRight} handleOpen={() => setOpenRight(!openRight)}>
            <Dropdown menuRight handleClickItem={handleClickItem} />
          </NavItem>
        </Navbar>
        <Switch>
          <Route exact path="/" component={Index} />
           <PublicRoute path="/signup" component={Signup} />
           <PublicRoute path="/login" component={Login} />
           <PrivateRoute path="/home" component={Home} />
           <PrivateRoute exact path="/beers" component={Beers} />
           <PrivateRoute path="/favorites" component={Favorites} />
           <PrivateRoute path="/recommended" component={Recommended} />
           <PrivateRoute path="/beers/:id" component={Beer} />
           <PrivateRoute path="/breweries" component={Breweries} />
           {/* <PrivateRoute path="/breweries/:id" component={Brewery} /> */}
           <PrivateRoute path="/play" component={Play} />
           <Route component={NotFound} />
         </Switch>
      </div>
    </AuthContext>
  );
}

export default App;
