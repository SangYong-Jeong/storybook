import React from 'react';
import PropTypes from 'prop-types';
import './PortFolioSet.scss';
import { PortFolioItem } from '../portfolio-item/PortFolioItem';

export const PortFolioSet = ({ portfolioItems }) => {
  return (
    <div className='portfolio-set'>
    {portfolioItems.map((portfolioItem, Index) => {
    const { title, content, src } = portfolioItem;
    return (
      <PortFolioItem key={`portfolioItem_${Index}`} title={title} content={content} src={src} />
    );
    })}
  </div>
  );
}

PortFolioSet.propTypes = {
  portfolioItems: PropTypes.array.isRequired,
} 
