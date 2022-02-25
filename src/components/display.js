/* eslint-disable react/jsx-key */
import React from 'react';
import PropTypes from 'prop-types';

// stateless component
const Display = (props) => {
  let { total, next } = props;
  const { operation } = props;
  next = next || '';
  total = total || '0';
  const display = operation ? `${total} ${operation} ${next}` : next;
  return (
    <div className="display">
      <p>{(!display && total) ? total : display}</p>
    </div>
  );
};

Display.defaultProps = { total: null, next: '', operation: null };
Display.propTypes = {
  total: PropTypes.string,
  next: PropTypes.string,
  operation: PropTypes.string,
};

export default Display;
