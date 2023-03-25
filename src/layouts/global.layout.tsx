import { Outlet } from "react-router-dom";
import { BottomMenu } from "../common/data/menu.data";
import BottomNavigation from "../components/shared/navigation/bottombar.nav";
import BooksProvider from "../providers/books.provider";
import styles from "./layout.module.scss";

const GlobalLayout = () => {
  return (
    <BooksProvider>
      <div className={styles.layoutWrapper}>
        <Outlet />
        <BottomNavigation menu={BottomMenu} />
      </div>
    </BooksProvider>
  );
};

export default GlobalLayout;
