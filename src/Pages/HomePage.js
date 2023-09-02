import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="container-lg">
      <h1>Welcome to the Natiq Service</h1>
      <p>The Natiq service allows you to convert text into speech.</p>
      <p>
        Simply enter your text, and Natiq will generate an audio file for you to
        listen to.
      </p>
      <Link to="/NatiqPage">
        <button>Go to Natiq Page</button>
      </Link>
    </div>
  );
}

export default HomePage;
