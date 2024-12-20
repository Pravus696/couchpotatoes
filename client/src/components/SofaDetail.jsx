import './SofaDetail.css';
import PropTypes from 'prop-types';

const SofaDetail = ({ sofa }) => {
  return (
    <div className="sofa-detail">
      <img src={sofa.image} alt={sofa.name} />
      <h2>{sofa.name}</h2>
      <p>{sofa.description}</p>
    </div>
  );
};
SofaDetail.propTypes = {
  sofa: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default SofaDetail;
