import React from 'react';
import PropTypes from 'prop-types';
import { PfInput } from '../portfolio-input/PfInput';
import './PfForm.scss';

export const PfForm = ({ labels }) => {
  return (
    <form className='pf-form'>
      {labels.map(label => (<PfInput key={`input_${label}`} label={label} />))}
    </form>
  )
};

PfForm.propTypes = {
  labels: PropTypes.array,
}