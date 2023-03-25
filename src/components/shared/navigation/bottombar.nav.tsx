import { Link } from "react-router-dom";
import { ValueDTO } from "../../../common/types/general.type";
import styles from "./navbar.module.scss";
import { useLocation } from "react-router-dom";

interface Props {
  menu: ValueDTO[];
}

const BottomNavigation = (props: Props) => {
  const path = useLocation().pathname;

  return (
    <div className={styles.bottomNavWrapper}>
      {props.menu.map((menu, index) => {
        return (
          <Link
            className={`${styles.menuLink} ${
              path.startsWith(menu.value) ? styles.active : ""
            }`}
            to={menu.value}
            key={index}
          >
            <>
              {menu.Icon && <menu.Icon size={24} />}
              {/* {menu.lable} */}
            </>
          </Link>
        );
      })}
    </div>
  );
};

export default BottomNavigation;
