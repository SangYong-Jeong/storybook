import React from 'react';
import PropTypes from 'prop-types';
import './PfInput.scss';

export const PfInput = ({ label }) => {
  return (
    <div className='pf-input'>
      <label className='pf-input__label'>{label}</label>
      <input className='pf-input__input' data-testid={label} />
    </div>);
};

PfInput.propTypes = {
  label: PropTypes.string,
}


// Input 쪽 style 수정 필요 -> "npm run storybook" 이후 나오는 page에서 확인하면서 조정 -> push 하고 싶은뎀 (퇴근 전에 push)

