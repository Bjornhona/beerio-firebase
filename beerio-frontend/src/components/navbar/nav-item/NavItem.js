import React from 'react';
import './NavItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NavItem = (props) => {
  const {isOpen, icon, handleOpen} = props;

  return (
    <li className='nav-item'>
      <span
        className='icon-button'
        onClick={handleOpen}
      >
        <FontAwesomeIcon icon={icon} className='icon' />
      </span>
      {isOpen && props.children}
    </li>
  )
}

export default NavItem;