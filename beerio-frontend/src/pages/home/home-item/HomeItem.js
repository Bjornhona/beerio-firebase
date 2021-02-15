import React from 'react';
import './HomeItem.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const HomeItem = (props) => {
  const { link, headerText, description, iconName, iconClass } = props;

  return (
    <Link to={link} className='home-container'>
      <div className="home-text">
        <h4>{headerText.toUpperCase()}</h4>
        <p>{description}</p>
      </div>
      <div className="home-icon">
        <FontAwesomeIcon icon={iconName} className={iconClass} />
      </div>
    </Link>
  )
}

export default HomeItem;