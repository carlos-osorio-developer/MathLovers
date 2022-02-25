/* eslint-disable react/jsx-key */
import React from 'react';

const Quotes = () => (
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
      Quote of the day
    </h1>
    <p
      style={{
        fontSize: '1.5rem',
        fontWeight: '600',
        marginBottom: '2rem',
        width: '50%',
      }}
    >
      There is no math like mamuth math.
    </p>
  </div>
);

export default Quotes;
