import { ref, remove } from "firebase/database";
import { useRecoilValueLoadable } from "recoil";
import { RTDatabase } from "../../../common/config/firebase.config";
import { NODES } from "../../../common/constants/nodes.constant";
import { showError, showToast } from "../../../common/helpers/message.helper";
import { BookDTO } from "../../../common/models/books.model";
import { AtomAllBooks } from "../../../store/books.store";
import BookCard from "./book.card";
import styles from "./booksView.module.scss";

const BooksView = () => {
  const allBooks = useRecoilValueLoadable(AtomAllBooks);
  const books = allBooks.state === "hasValue" ? allBooks.contents : [];

  const onDelete = (book: BookDTO) => {
    remove(ref(RTDatabase, `${NODES.BOOKS}/${book.bookId}`))
      .then((res) => {
        showToast("Book Deleted Succesfully!", "success");
      })
      .catch((err) => {
        console.log(err);
        showError(err.message);
      });
  };

  return (
    <div>
      {books.map((book) => {
        return <BookCard onDelete={onDelete} book={book} key={book.bookId} />;
      })}
    </div>
  );
};

export default BooksView;
