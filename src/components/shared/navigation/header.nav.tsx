import { Link } from "react-router-dom";
import styles from "./navbar.module.scss";
import { FaArrowLeft } from "react-icons/fa";
type Props = {
  backTo?: string;
};

const NavHeader = ({ backTo }: Props) => {
  return (
    <div className={styles.navHeader}>
      <div className={styles.title}>
        {backTo && (
          <Link className={styles.backBtn} to={backTo}>
            <FaArrowLeft />
          </Link>
        )}
        <span>UMANG</span>
      </div>
    </div>
  );
};

export default NavHeader;
