import React from 'react';
import './BeersItem.css';
import { Link } from 'react-router-dom';
import Heart from './../heart/Heart';

const BeersItem = ({id, name, isOrganic, icon, style}) => {

  return (
    <div className='beers-container'>
      <div className='img-name-div'>
        <div className="beers-img">{icon && <img src={icon} alt="No pic" />}</div>
        <div className="beer-name">
          <h5>{name}</h5>
          <p>{style}</p>
        </div>
      </div>
      <div className="organic-heart">
        <div className="heart-div" >
          <Heart
            id={id}
            name={name}
            isOrganic={isOrganic}
            icon={icon}
            style={style}
          />
          <Link to={`/beers/${id}`} >
            <span role="img" className="arrow" aria-label="right-angle-bracket" >〉</span>
          </Link>
        </div>
        <div className="organic"><p><strong>Organic: </strong>{isOrganic}</p></div>
      </div>
    </div>
  )
}
  
export default BeersItem;