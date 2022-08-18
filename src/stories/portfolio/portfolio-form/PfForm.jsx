import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { PfInput } from '../portfolio-input/PfInput';
import './PfForm.scss';

export const PfForm = ({ labels, onClickButton }) => {
  const [isSubmit, setIsSubmit] = useState(false);
  const onClickFormButton = () => {
    onClickButton();
    setIsSubmit(true);
  };
  return (
    <form className="pf-form">
      {labels.map((label) => (
        <PfInput key={`input_${label}`} label={label} />
      ))}
      <button
        type="button"
        data-testid={'button'}
        className="pf-form__button"
        onClick={onClickFormButton}
      >
        Submit
      </button>
      {isSubmit ? (
        <div className="pf-form__complete-text">
          Everything is perfect, Your Message is sended! Have a good day!!
        </div>
      ) : null}
    </form>
  );
};

PfForm.propTypes = {
  labels: PropTypes.array,
  onClickButton: PropTypes.func,
};
