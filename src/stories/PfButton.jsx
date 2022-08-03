import React from 'react';
import PropTypes from 'prop-types';
import './PfButton.scss';

export const PfButton = ({ label, size, backgroundColor, ...props }) => {
  let className = '';
  if (size) className += ['pf-button', `pf-button-${size}`].join(' ');
  return (
    <button type='button' className={className ? className : 'pf-button'}
      style={{ backgroundColor }} {...props} >
      {label}
    </button>
  )
};


PfButton.propTypes = {
  label: PropTypes.string,
  backgroundColor: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  onClick: PropTypes.func,
}