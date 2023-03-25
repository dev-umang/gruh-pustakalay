import { useState } from "react";
import { FaStar, FaStarHalf } from "react-icons/fa";
import { useRecoilValue, useRecoilValueLoadable } from "recoil";
import { BookCategories, BOOK_LANGUAGES } from "../../common/data/options.data";
import { BookDTO } from "../../common/models/books.model";
import { ROUTES } from "../../common/routes/default.routes";
import { ElementChangeEvent } from "../../common/types/general.type";
import Dropdown from "../../components/shared/elements/dropdown/dropdown.element";
import Input from "../../components/shared/elements/input/input.element";
import NavHeader from "../../components/shared/navigation/header.nav";
import { AtomCategories } from "../../store/settings.store";
import styles from "./booksPage.module.scss";
import { TbStarOff } from "react-icons/tb";
import { ref, set } from "firebase/database";
import { RTDatabase } from "../../common/config/firebase.config";
import { getInitBook, getUniqueId } from "../../common/helpers/value.helper";
import { NODES } from "../../common/constants/nodes.constant";
import { showToast } from "../../common/helpers/message.helper";
import { isValidObject } from "../../common/helpers/validation.helper";
import { format } from "date-fns";
type Props = {};

const AddBookPage = (props: Props) => {
  const [book, setBook] = useState<BookDTO>(getInitBook());
  const cat = useRecoilValueLoadable(AtomCategories);
  const categories = cat.state === "hasValue" ? cat.contents : [];
  const [isLoading, setIsLoading] = useState(false);

  const onBookChange = (e: ElementChangeEvent) => {
    setBook({ ...book, [e.name ?? ""]: e.data });
  };

  const submitForm = (e: any) => {
    e.preventDefault();
    let _book = { ...book };
    _book.bookId = getUniqueId();
    _book.dateAdded = format(new Date(), "dd-MM-yyyy");
    debugger;
    if (!isValidObject(_book, ["isFavourite"])) return;
    setIsLoading(true);
    set(ref(RTDatabase, `${NODES.BOOKS}/${_book.bookId}`), _book)
      .then((res) => {
        console.log(res);
        showToast("Data Added Successfully!");
        setIsLoading(false);
        setBook(getInitBook());
      })
      .catch((err) => {
        console.log(err);
        showToast(err.message, "error");
        setIsLoading(false);
      });
  };

  return (
    <div>
      <NavHeader backTo={ROUTES.BOOKS} />
      <div className={styles.addBookFormWrapper}>
        <h3 className="pageTitle">Add Book</h3>

        <Input
          onChange={onBookChange}
          value={book.name ?? ""}
          name="name"
          label="Name"
        />
        <Input
          onChange={onBookChange}
          value={book.author ?? ""}
          name="author"
          label="Author"
        />
        <Input
          onChange={onBookChange}
          value={book.price?.toString() ?? ""}
          name="price"
          label="Price"
        />
        <Dropdown
          onChange={onBookChange}
          name={"category"}
          options={categories}
          value={book.category}
          label="Category"
        />
        <Dropdown
          onChange={onBookChange}
          name={"language"}
          options={BOOK_LANGUAGES}
          value={book.language}
          label="Language"
        />

        <div className={styles.formFooter}>
          <button
            onClick={() =>
              onBookChange({ data: !book.isFavourite, name: "isFavourite" })
            }
            style={{
              background: book.isFavourite ? "gold" : "black",
              color: book.isFavourite ? "black" : "white",
            }}
            className={styles.favBtn}
          >
            {book.isFavourite ? (
              <FaStar color={"black"} style={{ marginRight: "0.5rem" }} />
            ) : (
              <TbStarOff style={{ marginRight: "0.5rem" }} />
            )}
            Favourite
          </button>

          <button
            className={`${styles.favBtn} ${styles.saveBtn}`}
            onClick={submitForm}
            disabled={isLoading}
          >
            {isLoading ? "..." : "Save"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddBookPage;
