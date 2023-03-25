import { onValue, ref } from "firebase/database";
import React, { ReactNode, useEffect, useRef } from "react";
import { useSetRecoilState } from "recoil";
import { RTDatabase } from "../common/config/firebase.config";
import { NODES } from "../common/constants/nodes.constant";
import { AtomAllBooks } from "../store/books.store";

type Props = {
  children: ReactNode;
};

const BooksProvider = ({ children }: Props) => {
  const setBooks = useSetRecoilState(AtomAllBooks);
  const booksRef = useRef<any>(null);

  useEffect(() => {
    booksRef.current = ref(RTDatabase, `${NODES.BOOKS}`);
    onValue(
      booksRef.current,
      (res) => {
        if (res.exists()) setBooks(Object.values(res.val()));
        else setBooks([]);
      },
      (err) => {
        setBooks([]);
        console.log(err);
      }
    );
  }, []);

  return <>{children}</>;
};

export default BooksProvider;
