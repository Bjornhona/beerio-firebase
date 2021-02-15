import React, { useState, useEffect } from 'react';
import { beerService } from '../../lib/beer-service';
import './Heart.css';

const Heart = ({id, name, isOrganic, icon, style}) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    let ignore = false;

    const getFavorite = async () => 
      await beerService.getFavorites()
        .then(result => {
          if (!ignore) {
            const newFavorite = result.find(item => (item.id === id));
            if (newFavorite) {setIsFavorite(true)}
          }
        })
        .catch(error => {
          console.error('Error');
      });
      getFavorite();

      return () => {ignore = true};
  }, [id]);

  const handleFavorites = async (e) => {
    // stops default link to next page in container
    e.preventDefault();

    await beerService.postFavorite({
      id: id,
      name: name,
      isOrganic: isOrganic,
      icon: icon,
      style: style
    })
    .then(() => setIsFavorite(!isFavorite))
    .catch(error => console.error('Error'))
  }
  
  return (
    <div>
        {isFavorite ?
          <span role="img" className="heart" onClick={handleFavorites} aria-label="red-heart">❤️</span> :
          <span role="img" className="heart" onClick={handleFavorites} aria-label="black-heart">🖤</span>
        }
    </div>
  )
}

export default Heart;