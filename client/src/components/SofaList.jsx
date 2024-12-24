import SofaDetail from '../assets/styles/SofaList.css';
import './SofaList.css';
import PropTypes from 'prop-types';

const SofaList = ({ sofas }) => {
  return (
    <div className="sofa-list">
      {sofas.map(sofa => (
        <SofaDetail key={sofa.id} sofa={sofa} />
      ))}
    </div>
  );
};
SofaList.propTypes = {
  sofas: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    // add other sofa properties here if needed
  })).isRequired,
};

export default SofaList;
