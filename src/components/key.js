import React from 'react';
import PropTypes from 'prop-types';

// stateless component
const Key = (props) => {
  const { value, className } = props;
  return (
    <input type="button" value={value} className={className} />
  );
};

Key.defaultProps = { value: '', className: '' };
Key.propTypes = { value: PropTypes.string, className: PropTypes.string };

export default Key;
