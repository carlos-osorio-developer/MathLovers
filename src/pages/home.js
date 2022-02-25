/* eslint-disable react/jsx-key */
import React from 'react';

const Home = () => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginTop: '6rem',
      textAlign: 'center',
    }}
  >
    <h1 style={{
      fontSize: '4rem',
      fontWeight: '600',
      marginBottom: '2rem',
    }}
    >
      Home
    </h1>
    <p
      style={{
        fontSize: '1.5rem',
        fontWeight: '600',
        marginBottom: '2rem',
        width: '50%',
      }}
    >
      Mathematical beauty is the aesthetic pleasure typically derived from the abstractness,
      purity, simplicity, depth or orderliness of mathematics.
      Mathematicians often express this pleasure by describing mathematics as beautiful.
    </p>
  </div>
);

export default Home;
