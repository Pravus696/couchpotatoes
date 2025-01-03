import React from 'react';
import PropTypes from 'prop-types';
import '../assets/styles/Card.css';

const Card = ({ title, image, description }) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
        <button className="card-button">Learn More</button>
      </div>
    </div>
  );
};
Card.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Card;
