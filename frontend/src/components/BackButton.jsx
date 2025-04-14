import { BsArrowLeft } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const BackButton = ({ destination = '/' }) => {
  return (
    <div className="back-button">
      <Link to={destination}>
        <BsArrowLeft className="back-icon" />
      </Link>
    </div>
  );
};

export default BackButton;