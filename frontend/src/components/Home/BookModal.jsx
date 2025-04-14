import { AiOutlineClose } from 'react-icons/ai';
import { PiBookOpenTextLight } from 'react-icons/pi';
import { BiUserCircle } from 'react-icons/bi';

const BookModal = ({ book, onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(event) => event.stopPropagation()}>
        <AiOutlineClose className="modal-close" onClick={onClose} />
        <h2 className="publish-year-badge">{book.publishYear}</h2>
        <h4 className="book-id">{book._id}</h4>
        <div className="book-title">
          <PiBookOpenTextLight className="book-icon" />
          <h2>{book.title}</h2>
        </div>
        <div className="book-author">
          <BiUserCircle className="author-icon" />
          <h2>{book.author}</h2>
        </div>
        <p className="description-title">Book Description</p>
        <p className="description-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quia
          voluptatum sint. Nisi impedit libero eveniet cum vitae qui expedita
          necessitatibus assumenda laboriosam, facilis iste cumque a pariatur
          nesciunt cupiditate voluptas? Quis atque earum voluptate dolor nisi
          dolorum est? Deserunt placeat cumque quo dicta architecto, dolore
          vitae voluptate sequi repellat!
        </p>
      </div>
    </div>
  );
};

export default BookModal;