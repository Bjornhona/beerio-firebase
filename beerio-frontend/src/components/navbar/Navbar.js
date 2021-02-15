import React from 'react';
import './Navbar.css';

const Navbar = (props) => {
const { node } = props;

  return (
    <nav className='navbar' ref={node}>
      <ul className='navbar-nav'>
        { props.children }
      </ul>
    </nav>
  )
}

export default Navbar;