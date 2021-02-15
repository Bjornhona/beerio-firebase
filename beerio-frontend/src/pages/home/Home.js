import React from 'react';
import { withAuth } from '../../lib/authContext';
import HomeItem from './home-item/HomeItem';
import './Home.css';

const Home = () => {

  return (
    <div className="home-div">
      <span className="home-background"></span>
      <span className="home-overlay"></span>
      <div className="home-menu">
        <span className="home-box">
          <h1>Beerio</h1>
          <h5>Welcome to the world of beers!</h5>
        </span>
        <HomeItem 
          link='/beers' 
          headerText='Explore' 
          description='Read about the best beers' 
          iconName='search' 
          iconClass='fontawesome' />
        <HomeItem 
          link='/favorites' 
          headerText='Favourites' 
          description='Remember the beers you love' 
          iconName='heart' 
          iconClass='fontawesome' />
        <HomeItem 
          link='/recommended' 
          headerText='Recommended' 
          description='The most wanted beers' 
          iconName='thumbs-up' 
          iconClass='fontawesome' />
        <HomeItem 
          link='/breweries' 
          headerText='Breweries' 
          description='Learn from the best breweries' 
          iconName='beer' 
          iconClass='fontawesome' />
        <HomeItem 
          link='/play' 
          headerText='Play' 
          description='Your beer personality' 
          iconName='play-circle' 
          iconClass='fontawesome' />
      </div>
    </div>
  )
}

export default withAuth(Home);