import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="container-lg pt-4">
      <h1 className="global--header">Welcome to the Natiq Service</h1>
      <div className="global--text">
        <p>The Natiq service allows you to convert text into speech.</p>
        <p>
          Simply enter your text, and Natiq will generate an audio file for you
          to listen to.
        </p>
      </div>
      <Link to="/NatiqPage">
        <button className="global--btn">Go to Natiq Page</button>
      </Link>
    </div>
  );
}

export default HomePage;
