import React from 'react';
import PropTypes from 'prop-types';
import './PfSelect.scss';

export const PfSelect = ({ options }) => {
  return (
    <select role='listbox'>
      {options.map((option) => <option key={`select_${option}`}>{option}</option>)}
    </select>
  ); 
}

PfSelect.propTypes = {
  options: PropTypes.array,
}
