import React from 'react';
import './Dropdown.css';
import DropdownItem from '../dropdownItem/DropdownItem';
import { faSignInAlt, faUserPlus, faHome, faBeer, faHeart, faThumbsUp, faGamepad, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { withAuth } from '../../../lib/authContext';

const Dropdown = (props) => {
  const { isLogged, logout, user, menuRight, handleClickItem } = props;

  return (
    menuRight ?
      isLogged ?
        <ul className="dropdown dropdownRight">
          <li className="hi-user">Hi {user.username}</li>
          <DropdownItem leftIcon={faSignOutAlt} link={"/login"} logout={logout} handleClickItem={handleClickItem}>Logout</DropdownItem>
        </ul>
      :
      <ul className="dropdown dropdownRight">
        <DropdownItem leftIcon={faSignInAlt} link={"/login"} handleClickItem={handleClickItem}>Login</DropdownItem>
        <DropdownItem leftIcon={faUserPlus} link={"/signup"} handleClickItem={handleClickItem}>Signup</DropdownItem>
      </ul> :
    <ul className="dropdown dropdownLeft">
      <DropdownItem leftIcon={faHome} link={"/home"} handleClickItem={handleClickItem}>Home</DropdownItem>
      <DropdownItem leftIcon={faBeer} link={"/beers"} handleClickItem={handleClickItem}>Beers</DropdownItem>
      <DropdownItem leftIcon={faHeart} link={"/favorites"} handleClickItem={handleClickItem}>Favorites</DropdownItem>
      <DropdownItem leftIcon={faThumbsUp} link={"/recommended"} handleClickItem={handleClickItem}>Recommended</DropdownItem>
      <DropdownItem leftIcon={faGamepad} link={"/play"} handleClickItem={handleClickItem}>Play</DropdownItem>
    </ul>
  )
}

export default withAuth(Dropdown);