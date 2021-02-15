import React from 'react';
import Button from '../components/button/Button';
import './index-components/Index.css';

const Index = () => {
  
  return (
    <div className="index-div">
      <span className="index-background"></span>
      <span className="index-overlay"></span>
      <span className="index-box">
        <h2>The happy Beer Gormand</h2>
        <h1 className="beerio-title">Beerio</h1>
        <h5>Sign up to learn about your favorite beers.</h5>
        <h5>We'll help you remember the good moments!</h5>
        <div className="buttons-container">
          <Button link="/login" text='Log in' />
          <Button link="/signup" text='Sign up' />
        </div>
      </span>
    </div>
  );
}

export default Index;