import styles from "./floatingButton.module.scss";
import { FaPlus } from "react-icons/fa";

type Props = {
  onClick: () => void;
};

const FloatingButton = (props: Props) => {
  return (
    <div className={styles.btnWrapper}>
      <button onClick={props.onClick}>
        <FaPlus size={18} />
      </button>
    </div>
  );
};

export default FloatingButton;
