import { FaPencilAlt, FaTrash } from "react-icons/fa";
import { BookDTO } from "../../../common/models/books.model";
import styles from "./booksView.module.scss";

type Props = {
  book: BookDTO;
  onDelete: (b: BookDTO) => void;
};

const BookCard = ({ book, onDelete }: Props) => {
  return (
    <div className={styles.bookCard}>
      <div className={styles.cardWrapper}>
        <div className={styles.row}>
          <strong>{book.name}</strong>
          <div>
            <button className={`${styles.action} ${styles.edit}`}>
              <FaPencilAlt />
            </button>
            <button
              onClick={() => onDelete(book)}
              className={`${styles.action} ${styles.delete}`}
            >
              <FaTrash />
            </button>
          </div>
        </div>
        <div className={styles.row}>
          <em className="label">by {book.author}</em>
          <label className="label">{book.dateAdded}</label>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
