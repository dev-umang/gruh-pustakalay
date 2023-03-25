import React from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../common/routes/default.routes";
import BooksView from "../../components/pageComponents/BooksView/booksView";
import FloatingButton from "../../components/shared/floatingButton/floatingButtoon";
import NavHeader from "../../components/shared/navigation/header.nav";

type Props = {};

const BooksPage = (props: Props) => {
  const navigate = useNavigate();

  return (
    <div>
      <NavHeader />
      <div>
        <BooksView />
      </div>
      <FloatingButton onClick={() => navigate(ROUTES.ADD_BOOK)} />
    </div>
  );
};

export default BooksPage;
