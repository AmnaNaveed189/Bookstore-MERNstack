import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';

const BooksTable = ({ books }) => {
  return (
    <table className="books-table">
      <thead>
        <tr>
          <th>No</th>
          <th>Title</th>
          <th className="hide-on-mobile">Author</th>
          <th className="hide-on-mobile">Publish Year</th>
          <th>Operations</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book, index) => (
          <tr key={book._id}>
            <td>{index + 1}</td>
            <td>{book.title}</td>
            <td className="hide-on-mobile">{book.author}</td>
            <td className="hide-on-mobile">{book.publishYear}</td>
            <td>
              <div className="operations">
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
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BooksTable;