import React, { useState } from 'react';
import { withAuth } from '../../lib/authContext';
import { Link } from 'react-router-dom';
import MoodItem from './components/MoodItem';

const Play = (props) => {
  const [mood] = useState('');
  const [type] = useState('');

  const handleFormSubmit = () => {
    //TODO: what hapens on submit?
  };

  return (
    <div className="index-div section">
      <div className="beers-title">
        <Link to='/home' className="menu-button back"><span role="img" aria-label="left-angle-bracket">〈</span></Link>
        <h4>What beer mood are you in, {props.user.username}?</h4>
      </div>
      <form onSubmit={handleFormSubmit} className="signup">
        <div className="mood-page">
          <h2>What mood are you in?</h2>
          <div className="first-row">
            <MoodItem mood={mood} image={"/images/mood_1.png"} label={'Horrible'} required />
            <MoodItem mood={mood} image={"/images/mood_2.png"} label={'Bad'} />
            <MoodItem mood={mood} image={"/images/mood_3.png"} label={'Sad'} />
          </div>
          <div className="first-row">
            <MoodItem mood={mood} image={"/images/mood_4.png"} label={'Okay'} />
            <MoodItem mood={mood} image={"/images/mood_5.png"} label={'Great'} />
            <MoodItem mood={mood} image={"/images/mood_6.png"} label={'Happy'} />
          </div>
        </div>

        <div className="mood-page">
          <h2>What beer type are you?</h2>
          <div className="first-row">
            <MoodItem mood={type} image={"/images/gourmand.png"} label={'Gourmand'} required />
            <MoodItem mood={type} image={"/images/chique.png"} label={'Chique'} />
            <MoodItem mood={type} image={"/images/funny.png"} label={'Funny'} />
          </div>
          <div className="first-row">
            <MoodItem mood={type} image={"/images/casual.png"} label={'Casual'} />
            <MoodItem mood={type} image={"/images/friendly.png"} label={'Friendly'} />
            <MoodItem mood={type} image={"/images/king.png"} label={'King'} />
          </div>
        </div>

        <Link to={"/recommended"} className="beer-container beer-button beer-top" >Get the result</Link>
        <p>Scared to see the result? 
          <Link to={"/home"}> Go back</Link>
        </p>
      </form>
    </div>
  );
}

export default withAuth(Play);