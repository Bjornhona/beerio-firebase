import React from 'react';

const MoodItem = ({mood, image, label, required}) => {
  return (
    <div className="mood-row">
      <div><img className="mood-image" src={image} alt="mood" /></div>
      {required ?
        <input type="radio" name="mood" value={mood} required /> :
        <input type="radio" name="mood" value={mood} />}
      <label>{label}</label>
    </div>
  )
}

export default MoodItem;