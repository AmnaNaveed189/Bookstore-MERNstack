import { Link } from 'react-router-dom';
import { PiBookOpenTextLight } from 'react-icons/pi';
import { BiUserCircle, BiShow } from 'react-icons/bi';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';
import { useState } from 'react';
import BookModal from './BookModal';

const BookSingleCard = ({ book }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="book-card">
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
      <div className="card-operations">
        <BiShow className="operation-icon show" onClick={() => setShowModal(true)} />
        <Link to={`/books/details/${book._id}`}>
          <BsInfoCircle className="operation-icon info" />
        </Link>
        <Link to={`/books/edit/${book._id}`}>
          <AiOutlineEdit className="operation-icon edit" />
        </Link>
        <Link to={`/books/delete/${book._id}`}>
          <MdOutlineDelete className="operation-icon delete" />
        </Link>
      </div>
      {showModal && <BookModal book={book} onClose={() => setShowModal(false)} />}
    </div>
  );
};

export default BookSingleCard;