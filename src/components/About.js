import React from 'react';
// Import image using relative path from About.js to user.js
import { image } from '../data/user';  // Go up one directory and then into the data folder

function About() {
  return (
    <div className="about">
      <h1>About Me</h1>
      <img src={image} alt="Profile" /> {/* Display the profile image */}
    </div>
  );
}

export default About;
