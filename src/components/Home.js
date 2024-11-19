import React from 'react';
// Import username and city using relative path from Home.js to user.js
import { username, city } from '../data/user';  // Go up one directory and then into the data folder

function Home() {
  return (
    <div className="home">
      <h1>Welcome, {username}!</h1> {/* Display the username */}
      <p>City: {city}</p> {/* Display the city */}
    </div>
  );
}

export default Home;
