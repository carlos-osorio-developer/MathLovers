import React from 'react';
import PropTypes from 'prop-types';

// stateless component
const Key = (props) => {
  const { clickEvent, value, className } = props;
  return (
    <input type="button" onClick={clickEvent} value={value} className={className} />
  );
};

Key.defaultProps = { clickEvent: () => {}, value: '', className: '' };
Key.propTypes = {
  clickEvent: PropTypes.func,
  value: PropTypes.string,
  className: PropTypes.string,
};

export default Key;
