import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.scss";
import { ROUTES } from "./common/routes/default.routes";
import GlobalLayout from "./layouts/global.layout";
import LoginPage from "./pages/auth/login.page";
import AddBookPage from "./pages/books/addBook.page";
import BooksPage from "./pages/books/books.page";
import HomePage from "./pages/home.page";
import IndexPage from "./pages/index.page";
import SettingsPage from "./pages/settings.page";
import themes from "./styles/theme.module.scss";

function App() {
  return (
    <div className={`App ${themes.dark}`}>
      <ToastContainer />
      <Routes>
        <Route element={<GlobalLayout />}>
          <Route path={ROUTES.INDEX} element={<IndexPage />} />
          <Route path={ROUTES.HOME} element={<HomePage />} />
          <Route path={ROUTES.BOOKS} element={<BooksPage />} />
          <Route path={ROUTES.ADD_BOOK} element={<AddBookPage />} />
          <Route path={ROUTES.SETTINGS} element={<SettingsPage />} />
        </Route>
        <Route path={ROUTES.LOGIN} element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
