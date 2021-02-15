import React from 'react';
import { Link } from 'react-router-dom';
import './Button.css';

const Button = (props) => {
  const { link, text } = props;

  return (
      <Link to={link} className="common-button">
        <p>{text}</p>
      </Link>
  );
}

export default Button;