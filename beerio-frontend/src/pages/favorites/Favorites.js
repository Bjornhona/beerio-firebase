import React, { useState, useEffect } from 'react';
import { withAuth } from '../../lib/authContext';
import { Link } from 'react-router-dom';
import { beerService } from '../../lib/beer-service';
import BeersItem from '../../components/beers-item/BeersItem';
import './Favorites.css';

const Favorites = (props) => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    let ignore = false;

    const fetchFavorites = () => beerService.getFavorites()
    .then(result => {
      if (!ignore) {
        setFavorites(result);
      }
    })
    .catch(error => console.error('Error'));
    fetchFavorites();

    return () => {ignore = true};
  }, []);

  return (
    <div className="index-div section">
      <div className="beers-title">
        <Link to='/home' className="menu-button back"><span role="img" aria-label="left-angle-bracket">〈</span></Link>
        <h4>My Favorite Beers</h4>
      </div>
      {favorites.length < 1 ? <p>You have not selected any favorites yet.</p> : 
        favorites.map(item => {
          const {id, name, isOrganic, icon, style} = item;
          return (
            <BeersItem 
              key={id}
              id={id}
              name={name}
              isOrganic={isOrganic}
              icon={icon}
              style={style}
            />
          )
        })
      }
    </div>
  );
}

export default withAuth(Favorites);