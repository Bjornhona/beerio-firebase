import React from 'react';
import './DropdownItem.css';
import NavItem from '../nav-item/NavItem';
import { Link } from 'react-router-dom';

const DropdownItem = (props) => {
  const {leftIcon, link, logout, handleClickItem} = props;

  const handleDropdownClick = () => {
    logout && logout();
    handleClickItem();
  }

  return (
    <Link to={link} className="menu-item" onClick={() => handleDropdownClick()}>
      <NavItem 
        className='icon-left' 
        icon={leftIcon} 
      />
      {props.children}
    </Link>
  )
}

export default DropdownItem;