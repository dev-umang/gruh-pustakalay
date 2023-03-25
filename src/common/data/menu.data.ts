import { ROUTES } from "../routes/default.routes";
import { ValueDTO } from "../types/general.type";
import { FaHome, FaBook, FaCog } from "react-icons/fa";

export const BottomMenu: ValueDTO[] = [
  { lable: "Home", value: ROUTES.HOME, Icon: FaHome },
  { lable: "Books", value: ROUTES.BOOKS, Icon: FaBook },
  { lable: "Settings", value: ROUTES.SETTINGS, Icon: FaCog },
];
