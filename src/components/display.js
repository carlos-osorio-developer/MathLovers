import React from 'react';
import PropTypes from 'prop-types';

// stateless component
const Display = (props) => {
  const { total, next, operation } = props;
  const intNext = !next ? '' : next;
  const intTotal = !total ? '0' : total;
  const display = operation ? `${total} ${operation} ${intNext}` : next;
  return (
    <div className="display">
      <p>{(!display && total) ? intTotal : display}</p>
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
