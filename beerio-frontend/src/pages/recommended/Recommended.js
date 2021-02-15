import React, { useState, useEffect } from 'react';
import { withAuth } from '../../lib/authContext';
import { beerService } from '../../lib/beer-service';
// import { Link } from 'react-router-dom';
// import Heart from '../../components/heart/Heart';
import BeerItem from '../../components/beer-item/BeerItem';
import './Recommended.css';
import LoadingScreen from '../../components/loading-screen/LoadingScreen';

const Recommended = () => {
  const [randomId, setRandomId] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let ignore = false;

    const getRecommended = () => {
      beerService.getBeers()
      .then((data) => {
        if (!ignore) {
          const randomIndex = Math.floor(Math.random() * data.length);
          const newItem = data[randomIndex];
          const newRandomId = newItem.id;

          setIsLoading(false);
          setRandomId(newRandomId);
        }
      })
      .catch((error) => {
        console.error('Error');
      })
    }
    getRecommended();

    return () => {ignore = true};
  }, []);

  return (
    isLoading ? <LoadingScreen /> :
    <BeerItem id={randomId} />
  );
}

export default withAuth(Recommended);