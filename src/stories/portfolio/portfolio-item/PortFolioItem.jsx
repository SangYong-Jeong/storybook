import React from 'react';
import PropTypes from 'prop-types';
import './PortFolioItem.scss';

export const PortFolioItem = ({ title, content, src }) => {
  return (
    <div className="portfolio">
      <div
        className="portfolio__top"
        style={{ backgroundImage: `url(${src})` }}
      ></div>
      <div className="portfolio__bottom">
        <div className="portfolio__title">{title}</div>
        <div className="portfolio__content">{content}</div>
      </div>
    </div>
  );
};

PortFolioItem.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
};
